param(
    [string]$Branch = "master",
    [string]$Remote = "origin"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

function Invoke-Git {
    param(
        [Parameter(Mandatory = $true)]
        [string[]]$Arguments
    )

    & git @Arguments
    if ($LASTEXITCODE -ne 0) {
        throw "git $($Arguments -join ' ') failed with exit code $LASTEXITCODE"
    }
}

try {
    Write-Output "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Auto push started in $repoRoot"

    Invoke-Git -Arguments @("add", "--all")

    & git diff --cached --quiet
    if ($LASTEXITCODE -eq 0) {
        Write-Output "No changes to commit."
        exit 0
    }
    if ($LASTEXITCODE -ne 1) {
        throw "git diff --cached --quiet failed with exit code $LASTEXITCODE"
    }

    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Invoke-Git -Arguments @("commit", "-m", "chore: auto update $timestamp")
    Invoke-Git -Arguments @("push", $Remote, $Branch)

    Write-Output "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Auto push completed successfully."
}
catch {
    Write-Error $_
    exit 1
}
