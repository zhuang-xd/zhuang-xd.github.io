var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => DshHarnessPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian3 = require("obsidian");
var import_node_child_process6 = require("node:child_process");
var import_node_os4 = require("node:os");
var import_node_path7 = require("node:path");

// src/service-manager.ts
var import_node_child_process = require("node:child_process");
var import_node_fs = require("node:fs");
var import_node_net = require("node:net");
var import_node_os = require("node:os");
var import_node_path = require("node:path");

// src/i18n.ts
var dict = {
  // ---- 语言设置 ----
  "settings.language.title": ["\u754C\u9762\u8BED\u8A00", "Language"],
  "settings.language.desc": ["\u63D2\u4EF6\u754C\u9762\u8BED\u8A00\uFF1B\u8DDF\u968F Obsidian\uFF08\u4EC5\u4E2D\u6587/\u82F1\u6587\uFF0C\u5176\u4ED6\u8BED\u8A00\u81EA\u52A8\u82F1\u6587\uFF09", "Plugin UI language; follows Obsidian (Chinese or English \u2014 any other language falls back to English)"],
  "settings.language.auto": ["\u8DDF\u968F Obsidian", "Follow Obsidian"],
  "settings.language.zh": ["\u4E2D\u6587", "\u4E2D\u6587"],
  "settings.language.en": ["English", "English"],
  // ---- 状态横幅 ----
  "settings.status.title": ["DSH \u72B6\u6001", "DSH Status"],
  "settings.status.reading": ["\u8BFB\u53D6\u4E2D\u2026", "Reading\u2026"],
  "settings.status.installedVer": ["\u5DF2\u5B89\u88C5\uFF08{v}\uFF09 \xB7 \u670D\u52A1\u8FD0\u884C\u4E2D \u2713", "Installed ({v}) \xB7 running \u2713"],
  "settings.status.installed": ["\u5DF2\u5B89\u88C5 \xB7 \u670D\u52A1\u8FD0\u884C\u4E2D \u2713", "Installed \xB7 running \u2713"],
  "settings.status.stopped": ["\u5DF2\u5B89\u88C5 \xB7 \u670D\u52A1\u672A\u542F\u52A8", "Installed \xB7 not running"],
  "settings.status.notInstalled": ["\u672A\u5B89\u88C5", "Not installed"],
  // ---- 基础设置 ----
  "settings.section.basic": ["\u57FA\u7840\u8BBE\u7F6E", "Basic Setup"],
  "settings.install.title": ["\u4E00\u952E\u5B89\u88C5 DSH \u672C\u4F53", "One-click install DeepSeek Harness"],
  "settings.install.desc": ["\u6CA1\u88C5\u8FC7 DeepSeek Harness \u5C31\u70B9\u8FD9\u4E2A\uFF1A\u5148\u786E\u8BA4\u5B89\u88C5\u76EE\u5F55\uFF0C\u518D\u81EA\u52A8\u4E0B\u8F7D\u3001\u5B89\u88C5\u3001\u914D\u7F6E\uFF0C\u51E0\u5206\u949F\u641E\u5B9A", "Never installed DeepSeek Harness? Click this: confirm the directory, then it downloads, installs and configures everything in a few minutes"],
  "settings.install.btn": ["\u5B89\u88C5 DSH", "Install DSH"],
  "settings.install.preparing": ["\u51C6\u5907\u4E2D\u2026", "Preparing\u2026"],
  "settings.detect.title": ["\u4E00\u952E\u68C0\u6D4B\u914D\u7F6E", "Detect & apply config"],
  "settings.detect.desc": ["\u5DF2\u7ECF\u88C5\u8FC7 DSH \u7684\uFF0C\u81EA\u52A8\u627E\u5230\u4F4D\u7F6E\u5E76\u586B\u597D\u914D\u7F6E", "Already have DSH? Auto-detect its location and fill in the config"],
  "settings.detect.btn": ["\u68C0\u6D4B\u5E76\u586B\u5145", "Detect & fill"],
  "settings.detect.progress": ["\u68C0\u6D4B\u4E2D\u2026", "Detecting\u2026"],
  "settings.installDir.title": ["\u5B89\u88C5\u76EE\u5F55", "Install directory"],
  "settings.installDir.desc": ["DSH \u5B89\u88C5\u4F4D\u7F6E\uFF1B\u672C\u673A\u5DF2\u6709 DSH \u65F6\u81EA\u52A8\u586B\u5165\u68C0\u6D4B\u5230\u7684\u8DEF\u5F84", "Where DSH is installed; auto-filled when a local DSH is detected"],
  "settings.version.title": ["DSH \u7248\u672C", "DSH version"],
  "settings.version.current": ["\u5F53\u524D\u7248\u672C\uFF1A{v}", "Current version: {v}"],
  "settings.version.check": ["\u68C0\u67E5\u66F4\u65B0", "Check for updates"],
  "settings.version.checking": ["\u68C0\u67E5\u4E2D\u2026", "Checking\u2026"],
  "settings.version.changelog": ["\u66F4\u65B0\u65E5\u5FD7", "Changelog"],
  "settings.autoUpdate.title": ["\u81EA\u52A8\u68C0\u67E5\u66F4\u65B0", "Auto-check updates"],
  "settings.autoUpdate.desc": ["\u6253\u5F00 DSH \u9762\u677F/\u542F\u52A8\u670D\u52A1\u65F6\u81EA\u52A8\u68C0\u6D4B DSH \u65B0\u7248\u672C\uFF08\u53D1\u73B0\u65B0\u7248\u672C\u624D\u5F39\u7A97\uFF0C\u4E0D\u4F1A\u6253\u6270\uFF09", "Automatically check for new DSH versions when opening the panel / starting the service (only prompts when an update is found)"],
  // ---- 快捷操作 ----
  "settings.section.quick": ["\u5FEB\u6377\u529F\u80FD", "Quick actions"],
  "settings.reconnect.title": ["\u91CD\u8FDE\u670D\u52A1", "Reconnect service"],
  "settings.reconnect.desc": ["DSH \u9762\u677F\u52A0\u8F7D\u5931\u8D25\u6216\u5361\u4F4F\u65F6\uFF0C\u91CD\u65B0\u63A2\u6D4B\u5E76\u5237\u65B0\u9762\u677F", "When the DSH panel fails to load or hangs, re-probe and refresh the panel"],
  "settings.reconnect.btn": ["\u91CD\u8FDE", "Reconnect"],
  "settings.browser.title": ["\u5728\u6D4F\u89C8\u5668\u6253\u5F00 DSH", "Open DSH in browser"],
  "settings.browser.desc": ["\u7528\u7CFB\u7EDF\u9ED8\u8BA4\u6D4F\u89C8\u5668\u6253\u5F00 DSH Web GUI\uFF08\u72EC\u7ACB\u7A97\u53E3\uFF0C\u4E0D\u53D7 Obsidian \u9762\u677F\u9650\u5236\uFF09", "Open the DSH Web GUI in your default browser (separate window, not constrained by the Obsidian panel)"],
  "settings.browser.btn": ["\u6253\u5F00\u6D4F\u89C8\u5668", "Open browser"],
  "settings.aed.title": ["AED for DSH", "AED for DSH"],
  "settings.aed.desc": ["\u4E0B\u8F7D\u5E76\u8FD0\u884Cdsh-fix\uFF0C\u5E76\u4EE5\u5B89\u5168\u6A21\u5F0F\u542F\u52A8DSH\u3002\u8BF7\u60A8\u4E8E\u5B89\u5168\u6A21\u5F0F\u542F\u52A8DSH\u540E\u547D\u4EE4DSH\u8FDB\u884C\u81EA\u6211\u4FEE\u590D\u3002", "Download and run dsh-fix, and start DSH in safe mode. After DSH starts in safe mode, please instruct DSH to perform self-repair."],
  "settings.aed.btn": ["AED \u62A2\u6551", "AED"],
  "settings.safeMode.title": ["\u5B89\u5168\u6A21\u5F0F\u542F\u52A8", "Start in safe mode"],
  "settings.safeMode.desc": ["\u4EC5\u4EE5\u5B89\u5168\u6A21\u5F0F\u542F\u52A8 DSH\uFF08\u7981\u7528\u5168\u90E8\u7528\u6237\u63D2\u4EF6\uFF0C\u53EF\u56DE\u6EDA\uFF09", "Start DSH in safe mode only (disables all user plugins; rollback available)"],
  "settings.safeMode.btn": ["\u5B89\u5168\u6A21\u5F0F\u542F\u52A8", "Safe mode"],
  "settings.exitSafeMode.btn": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F", "Exit safe mode"],
  // ---- 桥接（状态与发送开关）----
  "settings.section.send": ["\u6865\u63A5", "Bridge"],
  "settings.send.selectionBtn.title": ["\u6846\u9009\u540E\u663E\u793A\u53D1\u9001\u6309\u94AE", "Show send button on selection"],
  "settings.send.selectionBtn.desc": ["\u5728\u7F16\u8F91\u5668\u6846\u9009\u6587\u5B57\u540E\uFF0C\u81EA\u52A8\u5728\u9009\u533A\u65C1\u663E\u793A\u300C\u53D1\u9001\u5230 DSH\u300D\u6309\u94AE\uFF08\u547D\u4EE4\u9762\u677F\u4E0E\u53F3\u952E\u83DC\u5355\u59CB\u7EC8\u53EF\u7528\uFF09", 'Show a "Send to DSH" button next to the selection (the command palette and context menu always work)'],
  "settings.send.openPanel.title": ["\u53D1\u9001\u540E\u81EA\u52A8\u6253\u5F00\u9762\u677F", "Open panel after sending"],
  "settings.send.openPanel.desc": ["\u53D1\u9001\u9009\u4E2D\u6587\u5B57\u5230 DSH \u540E\uFF0C\u81EA\u52A8\u6253\u5F00/\u5207\u6362\u5230 DSH \u9762\u677F\u67E5\u770B\u5904\u7406\u8FC7\u7A0B", "After sending text to DSH, open/switch to the DSH panel to watch it being processed"],
  "settings.send.sourceTag.title": ["\u9644\u5E26\u6765\u6E90\u6807\u7B7E", "Attach source tag"],
  "settings.send.sourceTag.desc": ["\u53D1\u9001\u65F6\u81EA\u52A8\u5728\u6587\u5B57\u524D\u52A0\u300C[\u6765\u6E90\uFF1AObsidian \u7B14\u8BB0 <\u7EDD\u5BF9\u8DEF\u5F84>]\u300D\uFF0C\u8BA9 DSH \u76F4\u63A5\u5B9A\u4F4D\u6587\u4EF6\u3001\u51CF\u5C11\u5DE5\u4F5C\u91CF", 'Prepend "[Source: Obsidian note <absolute path>]" so DSH can locate the file directly and do less work'],
  "settings.bridge.status.title": ["\u6865\u63A5\u72B6\u6001", "Bridge status"],
  "settings.bridge.status.installedReady": ["\u6587\u4EF6\u5DF2\u5B89\u88C5\uFF1B\u5DF2\u52A0\u8F7D \u2713\uFF08\u9009\u4E2D\u6587\u5B57\u53EF\u53F3\u952E\u53D1\u9001\u5230 DSH \u804A\u5929\u6846\uFF1BDSH \u4E2D\u7684\u5E93\u5185\u53EF\u8BFB\u8DEF\u5F84\u53EF\u70B9\u51FB\u5728 Obsidian \u6253\u5F00\uFF09", "Installed; loaded \u2713 (selected text can be sent to DSH chat via right-click; in-vault readable paths in DSH are clickable to open in Obsidian)"],
  "settings.bridge.status.installedNotReady": ["\u6587\u4EF6\u5DF2\u5B89\u88C5\uFF1B\u672A\u52A0\u8F7D\uFF08\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548\uFF09", "Installed; not loaded (takes effect after restarting the DSH service)"],
  "settings.bridge.status.notInstalled": ["\u672A\u5B89\u88C5", "Not installed"],
  "settings.bridge.restart.title": ["\u91CD\u542F DSH \u670D\u52A1", "Restart DSH service"],
  "settings.bridge.restart.desc": ["\u7ED3\u675F\u5360\u7528\u7AEF\u53E3\u7684\u8FDB\u7A0B\uFF08\u542B\u5E38\u9A7B\u8FDB\u7A0B\uFF09\u5E76\u91CD\u65B0\u542F\u52A8\uFF1B\u7528\u4E8E\u52A0\u8F7D\u6865\u63A5\u8865\u4E01\u3002\u6CE8\u610F\uFF1A\u4F1A\u4E2D\u65AD\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1", "Kill the process on the port (including detached ones) and restart; used to load the bridge patch. Note: this interrupts running tasks"],
  "settings.bridge.restart.btn": ["\u91CD\u542F\u670D\u52A1", "Restart"],
  "settings.bridge.restart.progress": ["\u91CD\u542F\u4E2D\u2026", "Restarting\u2026"],
  "settings.bridge.rewrite.btn": ["\u91CD\u65B0\u5199\u5165", "Rewrite"],
  "settings.bridge.rewrite.fail": ["\u6865\u63A5\u5199\u5165\u5931\u8D25\uFF1A{err}", "Failed to write bridge files: {err}"],
  "settings.bridge.rewrite.updated": ["\u6865\u63A5\u6587\u4EF6\u5DF2\u66F4\u65B0\uFF0C\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548", "Bridge files updated; restart the DSH service to apply"],
  "settings.bridge.rewrite.ready": ["\u6865\u63A5\u6587\u4EF6\u5DF2\u5C31\u7EEA", "Bridge files ready"],
  // ---- 面板显示 ----
  "settings.section.panel": ["\u9762\u677F\u663E\u793A", "Panel display"],
  "settings.zoom.title": ["\u9875\u9762\u7F29\u653E", "Page zoom"],
  "settings.zoom.desc": ["DSH \u9875\u9762\u7F29\u653E\u6BD4\u4F8B\uFF08\u5F53\u524D {z}\xD7\uFF09\uFF0C\u8303\u56F4 0.5\u20132.0\uFF0C\u6B65\u8FDB 0.05", "DSH page zoom (currently {z}\xD7), range 0.5\u20132.0, step 0.05"],
  // ---- 高级设置 ----
  "settings.section.advanced": ["\u9AD8\u7EA7\u8BBE\u7F6E", "Advanced"],
  "settings.port.title": ["\u670D\u52A1\u7AEF\u53E3", "Service port"],
  "settings.port.desc": ["DSH Web GUI \u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4 3080", "Port the DSH Web GUI listens on; default 3080"],
  "settings.command.title": ["\u542F\u52A8\u547D\u4EE4", "Startup command"],
  "settings.command.hint": ["\u793A\u4F8B\uFF1Apnpm dsh web --port {port}\uFF08{port} \u81EA\u52A8\u66FF\u6362\u4E3A\u7AEF\u53E3\uFF1B\u82E5 dsh \u5728 PATH \u4E2D\u53EF\u7559\u7A7A\u81EA\u52A8\u63A2\u6D4B\uFF1B\u7528 pnpm \u542F\u52A8\u65F6\u8BF7\u628A\u5DE5\u4F5C\u76EE\u5F55\u8BBE\u4E3A DSH \u4ED3\u5E93\u8DEF\u5F84\uFF09", "Example: pnpm dsh web --port {port} ({port} is replaced automatically; leave empty to auto-detect when dsh is on PATH; set the working directory to the DSH repo when using pnpm)"],
  "settings.cwd.title": ["\u5DE5\u4F5C\u76EE\u5F55", "Working directory"],
  "settings.cwd.desc": ["\u542F\u52A8 DSH \u65F6\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF08DSH \u5DE5\u4F5C\u533A\uFF09\uFF1B\u7559\u7A7A\u4E3A Vault \u6839\u76EE\u5F55", "Working directory used to start DSH (the DSH workspace); empty means the Vault root"],
  "settings.autoStart.title": ["\u79BB\u7EBF\u65F6\u81EA\u52A8\u542F\u52A8", "Auto-start when offline"],
  "settings.autoStart.desc": ["\u6253\u5F00\u9762\u677F\u65F6\u82E5\u7AEF\u53E3\u65E0\u670D\u52A1\uFF0C\u81EA\u52A8\u8FD0\u884C\u542F\u52A8\u547D\u4EE4", "Automatically run the startup command when the port has no service"],
  "settings.detached.title": ["\u8FDB\u7A0B\u72EC\u7ACB\u5E38\u9A7B", "Detached persistent process"],
  "settings.detached.desc": ["\u5F00\u542F\u540E\uFF0C\u63D2\u4EF6\u542F\u52A8\u7684 DSH \u8FDB\u7A0B\u5728 Obsidian \u9000\u51FA\u540E\u7EE7\u7EED\u8FD0\u884C\uFF08\u9ED8\u8BA4\u5F00\u542F\uFF09\uFF1B\u5173\u95ED\u540E\u968F Obsidian \u9000\u51FA\u800C\u7EC8\u6B62", "When on (default), the DSH process started by the plugin keeps running after Obsidian exits; when off, it terminates with Obsidian"],
  "settings.readyTimeout.title": ["\u542F\u52A8\u7B49\u5F85\u65F6\u95F4", "Startup timeout"],
  "settings.readyTimeout.desc": ["\u81EA\u52A8\u542F\u52A8\u540E\u7B49\u5F85\u670D\u52A1\u5C31\u7EEA\u7684\u6700\u957F\u65F6\u95F4\uFF08\u5F53\u524D {s} \u79D2\uFF09\uFF1B\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981 1\u20132 \u5206\u949F", "Max time to wait for the service after auto-start (currently {s}s); first start may take 1\u20132 minutes"],
  "settings.installUrl.title": ["\u5B89\u88C5\u5730\u5740", "Install URL"],
  "settings.installUrl.desc": ["\u514B\u9686\u4ED3\u5E93\u5730\u5740\uFF1B\u9ED8\u8BA4\u5B98\u65B9\u4ED3\u5E93\uFF0C\u7F51\u7EDC\u53D7\u9650\u65F6\u53EF\u6362\u4EE3\u7406\u955C\u50CF\uFF08\u5982 https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git\uFF09", "Repo URL to clone; defaults to the official repo. Behind a restricted network, switch to a proxy mirror (e.g. https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git)"],
  // ---- 面板视图 ----
  "view.action.reconnect": ["\u91CD\u8FDE\u670D\u52A1", "Reconnect"],
  "view.action.openBrowser": ["\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 DSH", "Open DSH in browser"],
  "view.monitor.disconnected": ["\u8FDE\u63A5\u5DF2\u65AD\u5F00\uFF1A{msg}", "Disconnected: {msg}"],
  "view.loading.title": ["\u6B63\u5728\u542F\u52A8 DeepSeek Harness\u2026", "Starting DeepSeek Harness\u2026"],
  "view.loading.detail": ["\u9996\u6B21\u542F\u52A8\u53EF\u80FD\u9700\u8981\u4E00\u4E24\u5206\u949F\uFF0C\u8BF7\u7A0D\u5019", "The first start may take a minute or two, please wait"],
  "view.copy.copied": ["\u547D\u4EE4\u5DF2\u590D\u5236", "Command copied"],
  "view.copy.failed": ["\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u624B\u52A8\u590D\u5236", "Copy failed, please copy manually"],
  "view.install.title": ["\u8FD8\u6CA1\u5B89\u88C5 DeepSeek Harness", "DeepSeek Harness is not installed yet"],
  "view.install.desc": ["\u70B9\u4E00\u4E0B\u81EA\u52A8\u5B89\u88C5\uFF1A\u4F1A\u81EA\u52A8\u4E0B\u8F7D DeepSeek Harness \u5E76\u914D\u597D\u4E00\u5207\uFF0C\u5168\u7A0B\u4E0D\u7528\u78B0\u547D\u4EE4\u884C\u3002", "Click to install automatically: it downloads DeepSeek Harness and sets everything up \u2014 no command line needed."],
  "view.install.mark.ok": ["\u2713 \u5DF2\u5B89\u88C5", "\u2713 Installed"],
  "view.install.mark.missing": ["\u2717 \u672A\u5B89\u88C5", "\u2717 Missing"],
  "view.install.depsHint": ["\u4E0A\u9762\u6709\u7F3A\u5931\u7684\u5DE5\u5177\uFF0C\u5148\u70B9\u4E0B\u9762\u7684\u6309\u94AE\u88C5\u4E0A\uFF08\u9700\u8981\u6388\u6743\u65F6\u6309\u63D0\u793A\u5141\u8BB8\uFF09\uFF1A", "Some tools above are missing \u2014 install them with the buttons below (approve the prompts when asked):"],
  "view.install.git": ["\u4E00\u952E\u5B89\u88C5 git", "Install git"],
  "view.install.node": ["\u4E00\u952E\u5B89\u88C5 Node.js", "Install Node.js"],
  "view.install.pnpm": ["\u4E00\u952E\u5B89\u88C5 pnpm", "Install pnpm"],
  "view.install.btn": ["\u4E00\u952E\u5B89\u88C5 DSH \u672C\u4F53", "Install DeepSeek Harness"],
  "view.install.installing": ["\u5B89\u88C5\u4E2D\u2026", "Installing\u2026"],
  "view.install.done": ["\u5B89\u88C5\u5B8C\u6210\uFF08\u5DF2\u81EA\u52A8\u5237\u65B0\u73AF\u5883\u53D8\u91CF\uFF0C\u65E0\u9700\u91CD\u542F\uFF09", "Installed (PATH refreshed automatically; no restart needed)"],
  "view.install.preparing": ["\u51C6\u5907\u4E2D\u2026", "Preparing\u2026"],
  "view.install.starting": ["\u5B89\u88C5\u5B8C\u6210\uFF0C\u6B63\u5728\u542F\u52A8\u2026", "Installed, starting\u2026"],
  // ---- DSH 睡着了（等待重连界面）----
  "view.asleep.name": ["DSH for Obsidian", "DSH for Obsidian"],
  "view.asleep.status": ["\u4F60\u7684 DSH \u7761\u7740\u4E86\uFF0C\u8BF7\u5C1D\u8BD5\u5524\u9192", "Your DSH is asleep \u2014 try to wake it up"],
  "view.asleep.hint": ["\u5C0F\u63D0\u793A\uFF1ADSH \u751F\u6001\u5C1A\u672A\u5B8C\u5584\uFF0C\u6709\u673A\u4F1A\u56E0\u4E3A\u63D2\u4EF6\u51B2\u7A81\u6216\u63D2\u4EF6\u5378\u8F7D\u6B8B\u7559\u7B49\u95EE\u9898\u5BFC\u81F4\u65E0\u6CD5\u8FDE\u63A5\u3002", "Tip: The DSH ecosystem is still maturing; connection can fail due to plugin conflicts or leftover files from uninstalled plugins."],
  "view.asleep.wake": ["\u5524\u9192\u5E72\u6D3B", "Wake it up"],
  "view.asleep.aed": ["AED for DSH", "AED for DSH"],
  "view.asleep.aedConfirm": ["\u63D2\u4EF6\u5C06\u4E0B\u8F7D\u5E76\u6267\u884Cdsh-fix\uFF0C\u5C1D\u8BD5\u4EE5\u5B89\u5168\u6A21\u5F0F\u8FDB\u884CDSH\u3002\n\u8BF7\u7528\u6237\u8FDB\u5165DSH\u540E\u6307\u4EE4DSH\u8FDB\u884C\u81EA\u884C\u4FEE\u590D\uFF0C\u5E76\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\u3002", "The plugin will download and run dsh-fix to try operating DSH in safe mode.\nAfter entering DSH, instruct DSH to repair itself, then exit safe mode."],
  "view.asleep.aedConfirmBtn": ["\u786E\u8BA4\u6267\u884C", "Confirm & run"],
  "view.asleep.aedCancel": ["\u53D6\u6D88", "Cancel"],
  "view.asleep.askAi": ["\u95EE\u95EE AI", "Ask AI"],
  "view.asleep.more": ["\u66F4\u591A\u8BBE\u7F6E", "More settings"],
  // ---- AED for DSH（抢救工具）----
  "aed.checkFix": ["\u68C0\u67E5 dsh-fix\u2026", "Checking dsh-fix\u2026"],
  "aed.installFix": ["\u6B63\u5728\u5B89\u88C5 dsh-fix\u2026", "Installing dsh-fix\u2026"],
  "aed.installFixMirror": ["\u5B98\u65B9\u6E90\u4E0D\u53EF\u8FBE\uFF0C\u6539\u7528\u955C\u50CF\u5B89\u88C5\u2026", "Official registry unreachable; trying the mirror\u2026"],
  "aed.installFixDone": ["dsh-fix \u5DF2\u5C31\u7EEA", "dsh-fix ready"],
  "aed.installFixFail": ["dsh-fix \u5B89\u88C5\u5931\u8D25\uFF1A{err}", "dsh-fix install failed: {err}"],
  "aed.fallbackNpx": ["\u5168\u5C40\u5B89\u88C5\u5931\u8D25\uFF0C\u6539\u7528 npx \u4E34\u65F6\u8FD0\u884C\u2026", "Global install failed; using npx temporarily\u2026"],
  "aed.doctor": ["dsh-fix doctor \u8BCA\u65AD\u4E2D\u2026", "Running dsh-fix doctor\u2026"],
  "aed.doctorNoDetail": ["\uFF08\u8BCA\u65AD\u65E0\u660E\u7EC6\uFF09", "(no diagnostic detail)"],
  "aed.safeMode": ["\u8FDB\u5165\u5B89\u5168\u6A21\u5F0F\uFF08\u7981\u7528\u7528\u6237\u63D2\u4EF6\uFF09\u2026", "Entering safe mode (disabling user plugins)\u2026"],
  "aed.safeFail": ["\u5B89\u5168\u6A21\u5F0F\u542F\u52A8\u5931\u8D25\uFF1A{err}", "Safe mode failed: {err}"],
  "aed.safeDone": ["\u5DF2\u8FDB\u5165\u5B89\u5168\u6A21\u5F0F\uFF1A{diag}", "Safe mode entered: {diag}"],
  "aed.disableBundles": ["\u7981\u7528 bundle \u5C42\u7528\u6237\u63D2\u4EF6\u2026", "Disabling bundle-layer user plugins\u2026"],
  "aed.disableBundlesFail": ["\u7981\u7528 bundle \u5C42\u7528\u6237\u63D2\u4EF6\u5931\u8D25\uFF1A{err}", "Failed to disable bundle-layer user plugins: {err}"],
  "aed.safeBundles": ["\uFF1Bbundle \u5C42\u7528\u6237\u63D2\u4EF6\u5DF2\u4E00\u5E76\u7981\u7528\uFF1A{list}", "; bundle-layer user plugins also disabled: {list}"],
  "aed.done": ["AED \u62A2\u6551\u5B8C\u6210", "AED recovery done"],
  "aed.running": ["AED \u62A2\u6551\u8FDB\u884C\u4E2D\u2026", "AED recovery in progress\u2026"],
  "aed.exitSafeMode": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\uFF08\u6062\u590D\u7528\u6237\u63D2\u4EF6\uFF09\u2026", "Exiting safe mode (restoring user plugins)\u2026"],
  "aed.exitSafeFail": ["\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\u5931\u8D25\uFF1A{err}", "Exiting safe mode failed: {err}"],
  "aed.exitBundleFail": ["\u6062\u590D bundle \u5C42\u7528\u6237\u63D2\u4EF6\u5931\u8D25\uFF1A{err}", "Failed to restore bundle-layer user plugins: {err}"],
  "aed.exitSafeDone": ["\u5DF2\u9000\u51FA\u5B89\u5168\u6A21\u5F0F\uFF0C\u5168\u90E8\u7528\u6237\u63D2\u4EF6\u5DF2\u6062\u590D\uFF08\u542B bundle \u5C42\uFF09", "Exited safe mode; all user plugins restored (including bundle layer)"],
  // ---- 报错诊断（发给 DeepSeek 会话）----
  "diag.header": ["DeepSeek Harness Obsidian \u63D2\u4EF6\u62A5\u9519\uFF0C\u8BF7\u5206\u6790\u539F\u56E0\u5E76\u7ED9\u51FA\u5177\u4F53\u89E3\u51B3\u6B65\u9AA4\uFF1A", "The DeepSeek Harness Obsidian plugin reported an error. Analyze the cause and give concrete fix steps:"],
  "diag.error": ["\u9519\u8BEF\uFF1A", "Error: "],
  "diag.hint": ["\u63D0\u793A\uFF1A", "Hint: "],
  "diag.port": ["\u7AEF\u53E3\uFF1A", "Port: "],
  "diag.cwd": ["\u5DE5\u4F5C\u76EE\u5F55\uFF1A", "Working directory: "],
  "diag.command": ["\u542F\u52A8\u547D\u4EE4\uFF1A", "Startup command: "],
  "notice.askAiCopied": ["\u8BCA\u65AD\u4FE1\u606F\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F\uFF1B\u5DF2\u6253\u5F00 DeepSeek \u7F51\u9875\u7248\uFF0C\u7C98\u8D34\uFF08Ctrl+V\uFF09\u540E\u53D1\u9001", "Diagnostic copied to the clipboard; DeepSeek web chat opened \u2014 paste (Ctrl+V) and send"],
  // ---- 人话化错误提示 ----
  "hz.notFound": ["\u8FD8\u6CA1\u6709\u68C0\u6D4B\u5230 DeepSeek Harness\uFF0C\u5148\u5B89\u88C5\u4E00\u6B21\u5427\u3002", "DeepSeek Harness was not detected \u2014 install it first."],
  "hz.github": ["\u8FDE\u4E0D\u4E0A GitHub\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u540E\u518D\u8BD5\u3002", "Cannot reach GitHub \u2014 check your network and try again."],
  "hz.exited": ["DeepSeek Harness \u542F\u52A8\u5931\u8D25\u4E86\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5\u6216\u68C0\u67E5\u8BBE\u7F6E\u3002", "DeepSeek Harness failed to start \u2014 reinstall it or check the settings."],
  "hz.timeout": ["DeepSeek Harness \u542F\u52A8\u6709\u70B9\u6162\uFF0C\u7B49\u4E00\u4F1A\u513F\u518D\u8BD5\u8BD5\u3002", "DeepSeek Harness is starting slowly \u2014 try again in a moment."],
  "hz.noAuto": ["\u670D\u52A1\u6CA1\u6709\u8FD0\u884C\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8\uFF0C\u8BF7\u5728\u8BBE\u7F6E\u91CC\u6253\u5F00\u3002", "The service is not running and auto-start is off \u2014 enable it in Settings."],
  // ---- 命令 / 菜单 / 浮动按钮 / 对话框 ----
  "cmd.ribbon": ["\u6253\u5F00 DeepSeek Harness", "Open DeepSeek Harness"],
  "cmd.openPanel": ["\u6253\u5F00\u9762\u677F", "Open panel"],
  "cmd.sendSelection": ["\u53D1\u9001\u9009\u4E2D\u6587\u5B57\u5230 DSH", "Send selection to DSH"],
  "menu.sendSelection": ["\u53D1\u9001\u9009\u4E2D\u6587\u5B57\u5230 DSH", "Send selection to DSH"],
  "floating.send": ["\u53D1\u9001\u5230 DSH", "Send to DSH"],
  "modal.cancel": ["\u53D6\u6D88", "Cancel"],
  "modal.installTitle": ["\u5B89\u88C5 DeepSeek Harness", "Install DeepSeek Harness"],
  "modal.installDesc": ["\u9009\u62E9 DeepSeek Harness \u7684\u5B89\u88C5\u76EE\u5F55\uFF08\u5C06\u81EA\u52A8\u514B\u9686\u5B98\u65B9\u4ED3\u5E93\u5E76\u5B89\u88C5\u4F9D\u8D56\uFF09\uFF1A", "Choose where to install DeepSeek Harness (the official repo will be cloned and dependencies installed):"],
  "modal.installStart": ["\u5F00\u59CB\u5B89\u88C5", "Start install"],
  "modal.updateTitle": ["\u53D1\u73B0 DSH \u65B0\u7248\u672C", "DSH update available"],
  "modal.updateBody": ["{msg} \u662F\u5426\u7ACB\u5373\u66F4\u65B0\uFF1F\uFF08\u5FEB\u8FDB\u5F0F\u66F4\u65B0\uFF0C\u4E0D\u5F71\u54CD\u672C\u5730\u672A\u63D0\u4EA4\u6539\u52A8\uFF09", "{msg} Update now? (Fast-forward; local uncommitted changes are untouched)"],
  "modal.updateConfirm": ["\u7ACB\u5373\u66F4\u65B0", "Update now"],
  "modal.updateViewChanges": ["\u67E5\u770B GitHub \u66F4\u65B0\u5185\u5BB9", "View changes on GitHub"],
  // ---- 通知 ----
  "notice.bridgeInstalled": ["DSH \u6865\u63A5\u5DF2\u5B89\u88C5\uFF0C\u91CD\u542F DSH \u670D\u52A1\u540E\u751F\u6548\uFF08\u8BBE\u7F6E\u9875\u300C\u91CD\u542F DSH \u670D\u52A1\u300D\uFF09", "DSH bridge installed; restart the DSH service to apply (Settings \u2192 Restart DSH service)"],
  "notice.noOpenRemoved": ["\u68C0\u6D4B\u5230\u5F53\u524D DSH \u4E0D\u652F\u6301 --no-open\uFF0C\u5DF2\u4ECE\u542F\u52A8\u547D\u4EE4\u79FB\u9664\uFF08\u65B0\u7248 DSH \u4E0D\u518D\u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668\uFF09", "The current DSH does not support --no-open; removed it from the startup command (newer DSH no longer auto-opens the browser)"],
  "notice.reconnected": ["\u5DF2\u91CD\u8FDE DeepSeek Harness", "Reconnected to DeepSeek Harness"],
  "notice.notRunning": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF0C\u8BF7\u5148\u6253\u5F00\u9762\u677F\u6216\u68C0\u67E5\u8BBE\u7F6E", "DSH service is not running; open the panel or check the settings"],
  "notice.selectFirst": ["\u8BF7\u5148\u6846\u9009\u8981\u53D1\u9001\u7684\u6587\u5B57", "Select some text first"],
  "notice.startingPanel": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF0C\u6B63\u5728\u6253\u5F00\u9762\u677F\u542F\u52A8\u2026", "DSH service is not running; opening the panel to start it\u2026"],
  "notice.filled": ["\u5DF2\u586B\u5165 DSH \u8F93\u5165\u6846\uFF0C\u8BF7\u786E\u8BA4\u540E\u53D1\u9001", "Filled into the DSH input; review it and send"],
  "notice.sendFailed": ["\u53D1\u9001\u5931\u8D25\uFF1A{err}", "Send failed: {err}"],
  "notice.bridgeFallback": ["DSH \u6865\u63A5\u672A\u5C31\u7EEA\uFF0C\u5DF2\u6539\u4E3A\u76F4\u63A5\u53D1\u9001\uFF08\u8BBE\u7F6E\u9875\u53EF\u67E5\u770B\u6865\u63A5\u72B6\u6001\uFF09", "DSH bridge not ready; sent directly instead (see the bridge status in Settings)"],
  "notice.restarting": ["\u6B63\u5728\u91CD\u542F DSH \u670D\u52A1\u2026", "Restarting the DSH service\u2026"],
  "notice.restarted": ["DSH \u670D\u52A1\u5DF2\u91CD\u542F\uFF0C\u6865\u63A5\u5DF2\u52A0\u8F7D", "DSH service restarted; bridge loaded"],
  "notice.restartFailed": ["\u91CD\u542F\u5931\u8D25\uFF1A{msg}", "Restart failed: {msg}"],
  "notice.installing": ["\u5F00\u59CB\u5B89\u88C5 DeepSeek Harness\u2026", "Installing DeepSeek Harness\u2026"],
  "notice.installDirEmpty": ["\u5B89\u88C5\u76EE\u5F55\u4E0D\u80FD\u4E3A\u7A7A", "The install directory cannot be empty"],
  // ---- 安装器 ----
  "install.dirEmpty": ["\u5B89\u88C5\u76EE\u5F55\u4E3A\u7A7A\uFF1A\u8BF7\u5728\u8BBE\u7F6E\u4E2D\u586B\u5199\u5B89\u88C5\u76EE\u5F55", "The install directory is empty: fill it in Settings"],
  "install.found": ["\u68C0\u6D4B\u5230\u5DF2\u5B89\u88C5\u7684 DSH \u4ED3\u5E93\uFF1A{dir}", "Found an existing DSH repo: {dir}"],
  "install.notDsh": ["\u76EE\u5F55\u5DF2\u5B58\u5728\u4F46\u4E0D\u662F DSH \u4ED3\u5E93\uFF1A{dir}\u3002\u4E3A\u907F\u514D\u8986\u76D6\u6570\u636E\uFF0C\u8BF7\u66F4\u6362\u5B89\u88C5\u76EE\u5F55\u6216\u624B\u52A8\u5904\u7406", "The directory exists but is not a DSH repo: {dir}. To avoid overwriting data, choose another directory or handle it manually"],
  "install.downloading": ["\u6B63\u5728\u4E0B\u8F7D DeepSeek Harness\u2026", "Downloading DeepSeek Harness\u2026"],
  "install.mirrorRetry": ["\u5B98\u65B9\u6E90\u4E0B\u8F7D\u5931\u8D25\uFF0C\u6B63\u5728\u901A\u8FC7\u955C\u50CF\u91CD\u8BD5\uFF08\u7B2C {n} \u6B21\uFF09\u2026", "Official source failed; retrying via mirror ({n})\u2026"],
  "install.cloneFailed": ["\u514B\u9686\u5931\u8D25\uFF1A{err}\u3002\u5DF2\u81EA\u52A8\u91CD\u8BD5\u5B98\u65B9\u6E90\u4E0E gh-proxy.com \u955C\u50CF\uFF1B\u4ECD\u5931\u8D25\u65F6\u53EF\u5728\u8BBE\u7F6E\u4E2D\u66F4\u6362\u5B89\u88C5\u5730\u5740\u6216\u7A0D\u540E\u518D\u8BD5", "Clone failed: {err}. The official source and gh-proxy.com mirror were retried automatically; if it still fails, change the install URL in Settings or try again later"],
  "install.depsInstalling": ["\u6B63\u5728\u5B89\u88C5\u4F9D\u8D56\uFF08\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF09\u2026", "Installing dependencies (may take a few minutes)\u2026"],
  "install.depsMirror": ["\u4F9D\u8D56\u6E90\u8BBF\u95EE\u5931\u8D25\uFF0C\u6539\u7528\u56FD\u5185\u955C\u50CF\u6E90\u91CD\u8BD5\u2026", "Dependency source unreachable; retrying with a mirror\u2026"],
  "install.depsNoteFail": ["\uFF1B\u4F9D\u8D56\u5B89\u88C5\u672A\u5B8C\u6210\uFF08{err}\uFF09\uFF0C\u53EF\u7A0D\u540E\u5728 {dir} \u4E0B\u6267\u884C pnpm install", "; dependencies not fully installed ({err}) \u2014 run pnpm install in {dir} later"],
  "install.depsNoteNoPnpm": ["\uFF1B\u672A\u68C0\u6D4B\u5230 pnpm\uFF0C\u8BF7\u5B89\u88C5 pnpm \u540E\u5728\u4ED3\u5E93\u76EE\u5F55\u6267\u884C pnpm install", "; pnpm not found \u2014 install pnpm and run pnpm install in the repo directory"],
  "install.done": ["\u5B89\u88C5\u5B8C\u6210", "Done"],
  "install.buildStep": ["\u6B63\u5728\u6784\u5EFA DSH \u4ED3\u5E93\uFF08pnpm run build\uFF0C\u9996\u6B21\u53EF\u80FD\u9700\u8981\u51E0\u5206\u949F\uFF09\u2026", "Building the DSH repo (pnpm run build; the first run may take a few minutes)\u2026"],
  "install.buildFail": ["DSH \u4ED3\u5E93\u5DF2\u4E0B\u8F7D\u5E76\u5B89\u88C5\u4F9D\u8D56\uFF0C\u4F46\u6784\u5EFA\u5931\u8D25\uFF1A{err}\u3002\u8BF7\u7A0D\u540E\u5728 {dir} \u4E0B\u624B\u52A8\u6267\u884C pnpm run build\uFF0C\u6216\u91CD\u8BD5\u5B89\u88C5", "Repo downloaded and dependencies installed, but the build failed: {err}. Run pnpm run build in {dir} later, or retry the install"],
  "install.message": ["DSH \u5DF2\u5B89\u88C5\uFF1A{dir}{note}", "DSH installed: {dir}{note}"],
  "install.autoDep": ["\u6B63\u5728\u4E00\u952E\u5B89\u88C5\u7F3A\u5931\u4F9D\u8D56 {dep}\u2026", "Installing missing dependency {dep}\u2026"],
  "install.depStillMissing": ["\u4F9D\u8D56 {dep} \u5B89\u88C5\u540E\u4ECD\u4E0D\u53EF\u7528\uFF0C\u8BF7\u624B\u52A8\u5B89\u88C5\u540E\u91CD\u8BD5", "{dep} is still unavailable after installation \u2014 install it manually and retry"],
  "dep.git.installed": ["git \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "git is installed. No restart needed \u2014 continue"],
  "dep.git.fail": ["git \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u5230 git-scm.com \u4E0B\u8F7D\u5B89\u88C5", "git install failed: {err}. Install it manually from git-scm.com"],
  "dep.node.installed": ["Node.js \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "Node.js is installed. No restart needed \u2014 continue"],
  "dep.node.fail": ["Node.js \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u5230 nodejs.org \u4E0B\u8F7D\u5B89\u88C5", "Node.js install failed: {err}. Install it manually from nodejs.org"],
  "dep.pnpm.installed": ["pnpm \u5DF2\u5B89\u88C5\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "pnpm is installed. No restart needed \u2014 continue"],
  "dep.pnpm.fail": ["pnpm \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u6267\u884C winget install pnpm.pnpm \u6216 npm install -g pnpm", "pnpm install failed: {err}. Run winget install pnpm.pnpm or npm install -g pnpm manually"],
  "dep.brew.installed": ["{dep} \u5DF2\u5B89\u88C5\uFF08brew\uFF09\u3002\u65E0\u9700\u91CD\u542F\uFF0C\u53EF\u7EE7\u7EED\u4E0B\u4E00\u6B65", "{dep} installed (brew). No restart needed \u2014 continue"],
  "dep.brew.fail": ["{dep} \u5B89\u88C5\u5931\u8D25\uFF1A{err}\u3002\u53EF\u624B\u52A8\u6267\u884C brew install {formula}\uFF08\u9700\u5148\u5B89\u88C5 Homebrew\uFF09", "{dep} install failed: {err}. Run brew install {formula} manually (Homebrew required)"],
  "dep.manual": ["\u8BF7\u624B\u52A8\u5B89\u88C5\u4F9D\u8D56\uFF1A{hint}", "Install the dependency manually: {hint}"],
  "dep.hint.node": ["\u8BF7\u5230 nodejs.org \u4E0B\u8F7D\u5B89\u88C5 Node.js", "Download Node.js from nodejs.org"],
  "dep.hint.pnpm": ["\u5148\u5B89\u88C5 Node.js\uFF0C\u518D\u6267\u884C npm install -g pnpm", "Install Node.js first, then run npm install -g pnpm"],
  // ---- 服务管理器 ----
  "svc.offlineNoAuto": ["127.0.0.1:{port} \u65E0\u670D\u52A1\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8\uFF08\u8BBE\u7F6E\u91CC\u53EF\u6253\u5F00\uFF09", "No service on 127.0.0.1:{port} and auto-start is off (enable it in Settings)"],
  "svc.stopped": ["DSH \u670D\u52A1\u5DF2\u505C\u6B62\uFF08\u8FDB\u7A0B\u9000\u51FA\uFF0C\u6216\u7AEF\u53E3 {port} \u65E0\u54CD\u5E94\uFF09", "DSH service stopped (process exited or port {port} not responding)"],
  "svc.offline": ["127.0.0.1:{port} \u65E0\u670D\u52A1", "No service on 127.0.0.1:{port}"],
  "svc.ensureOffline": ["127.0.0.1:{port} \u65E0\u670D\u52A1\uFF0C\u4E14\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8", "No service on 127.0.0.1:{port} and auto-start is off"],
  "svc.unloaded": ["\u63D2\u4EF6\u5DF2\u5378\u8F7D", "Plugin unloaded"],
  "svc.startFailed": ["\u542F\u52A8\u5931\u8D25\uFF1A{err}", "Start failed: {err}"],
  "svc.timeout": ["\u7B49\u5F85\u670D\u52A1\u5C31\u7EEA\u8D85\u65F6\uFF08{sec} \u79D2\uFF09\uFF1B\u8BF7\u68C0\u67E5\u542F\u52A8\u547D\u4EE4\u662F\u5426\u6B63\u786E", "Timed out waiting for the service ({sec}s); check the startup command"],
  "svc.noCommand": ["\u8BF7\u5728\u63D2\u4EF6\u8BBE\u7F6E\u4E2D\u914D\u7F6E DSH \u542F\u52A8\u547D\u4EE4", "Configure the DSH startup command in the plugin settings"],
  "svc.exited": ["\u8FDB\u7A0B\u5DF2\u9000\u51FA\uFF08\u4EE3\u7801 {code}\uFF09\uFF1B\u8BF7\u68C0\u67E5\u542F\u52A8\u547D\u4EE4\u4E0E\u5DE5\u4F5C\u76EE\u5F55", "Process exited (code {code}); check the startup command and working directory"],
  // ---- 更新器 ----
  "up.noRepo": ["\u672A\u627E\u5230 DSH \u4ED3\u5E93\uFF08\u7F3A\u5C11 .git\uFF09\uFF1A\u8BF7\u5148\u300C\u4E00\u952E\u68C0\u6D4B\u914D\u7F6E\u300D\u6216\u300C\u4E00\u952E\u5B89\u88C5\u300D\u586B\u5145\u5DE5\u4F5C\u76EE\u5F55", 'DSH repo not found (no .git): run "Detect & fill" or "Install" first to set the working directory'],
  "up.noLocal": ["\u65E0\u6CD5\u8BFB\u53D6\u672C\u5730\u7248\u672C", "Cannot read the local version"],
  "up.githubFail": ["\u65E0\u6CD5\u8FDE\u63A5 GitHub\uFF08git ls-remote\uFF09\uFF1A{err}\uFF1B\u8BF7\u786E\u8BA4\u7F51\u7EDC\u4E0E git \u53EF\u7528", "Cannot reach GitHub (git ls-remote): {err}; check that the network and git are available"],
  "up.latest": ["\u5DF2\u662F\u6700\u65B0\uFF08{v}\uFF09", "Up to date ({v})"],
  "up.stableOnly": ["\u6682\u65E0\u6B63\u5F0F\u7248\u53EF\u66F4\u65B0\uFF08\u5F53\u524D {v}\uFF09\uFF1B\u63D2\u4EF6\u4EC5\u5728\u5B98\u65B9\u53D1\u5E03\u6B63\u5F0F\u7248\u540E\u63A8\u9001\u5347\u7EA7", "No stable release available (current {v}); the plugin only offers updates after an official stable release"],
  "up.repoOnlyHint": ["\uFF1B\u4ED3\u5E93\u6E90\u7801\u5DF2\u66F4\u65B0\uFF0C\u4F46\u8FD0\u884C\u4E2D\u7684\u670D\u52A1\u7531\u5168\u5C40 CLI \u542F\u52A8\uFF0C\u9700\u53E6\u884C\u5347\u7EA7\u5168\u5C40 CLI \u5E76\u91CD\u542F\u670D\u52A1\u540E\u751F\u6548", "; repo source updated, but the running service is launched by the global CLI \u2014 upgrade the global CLI and restart the service to apply"],
  "up.behind": ["GitHub \u4E0A\u6709\u65B0\u7248\u672C\uFF1A\u672C\u5730 {local}\uFF0CGitHub \u6700\u65B0 {remote}", "New version on GitHub: local {local}, latest {remote}"],
  "up.behindVer": ["GitHub \u4E0A\u6709\u65B0\u7248\u672C\uFF1A\u672C\u5730 {local}\uFF0C\u6700\u65B0 {remote}", "New version on GitHub: local {local}, latest {remote}"],
  "up.diverged": ["\u672C\u5730\u6709 {count} \u4E2A\u672A\u63A8\u9001\u7684\u63D0\u4EA4\uFF0C\u6709\u53EF\u80FD\u662F\u4F60\u81EA\u884C\u5F00\u53D1\u7684\u63D2\u4EF6\uFF0C\u8BF7\u5728 DSH \u4E2D\u544A\u8BC9 AI \u81EA\u884C\u66F4\u65B0", "There are {count} uncommitted-to-remote local commits, possibly plugins you developed yourself \u2014 ask the AI in DSH to update on its own"],
  "up.done": ["DSH \u5DF2\u66F4\u65B0\uFF08{dir}\uFF09\u3002\u82E5 DSH \u670D\u52A1\u6B63\u5728\u8FD0\u884C\uFF0C\u8BF7\u91CD\u542F\u670D\u52A1\u4F7F\u65B0\u7248\u672C\u751F\u6548", "DSH updated ({dir}). If the DSH service is running, restart it to apply the new version"],
  "up.fail": ["DSH \u66F4\u65B0\u5931\u8D25\uFF1A{err}\uFF08\u672C\u5730\u53EF\u80FD\u6709\u672A\u63D0\u4EA4\u6539\u52A8\u6216\u7F51\u7EDC\u95EE\u9898\uFF0C\u8BF7\u624B\u52A8\u5904\u7406\uFF09", "DSH update failed: {err} (there may be uncommitted changes or network issues; handle it manually)"],
  "up.mirrorFail": ["\uFF1B\u955C\u50CF\u6E90\u4E5F\u5931\u8D25\uFF1A{err}", "; the mirror also failed: {err}"],
  "notice.updating": ["\u6B63\u5728\u66F4\u65B0 DSH\u2026", "Updating DSH\u2026"],
  "settings.updateMirror.title": ["\u66F4\u65B0\u955C\u50CF\u5730\u5740", "Update mirror URL"],
  "settings.updateMirror.desc": ["DSH \u66F4\u65B0\u7684\u53EA\u8BFB\u955C\u50CF\uFF1B\u7559\u7A7A\u81EA\u52A8\u7528 gh-proxy \u515C\u5E95\uFF08\u5982 https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git\uFF09", "Read-only mirror for DSH updates; empty auto-falls back to gh-proxy (e.g. https://gh-proxy.com/https://github.com/deepseek-ai/deepseek-harness.git)"],
  "up.unknown": ["\u672A\u77E5", "Unknown"],
  "err.unknown": ["\u672A\u77E5\u9519\u8BEF", "unknown error"],
  "err.failed": ["\u5931\u8D25", "failed"],
  // ---- 一键检测 ----
  "detect.path": ["\u5DF2\u68C0\u6D4B\u5230 dsh\uFF08PATH \u4E2D\uFF09\uFF0C\u542F\u52A8\u547D\u4EE4\u5DF2\u8BBE\u4E3A dsh web --port {port}", "dsh found on PATH; startup command set to dsh web --port {port}"],
  "detect.notFound": ["\u672A\u68C0\u6D4B\u5230 DeepSeek Harness \u4ED3\u5E93\uFF1A\u8BF7\u5148\u4ECE github.com/deepseek-ai/deepseek-harness \u83B7\u53D6\u6E90\u7801\uFF0C\u6216\u5728\u8BBE\u7F6E\u4E2D\u624B\u52A8\u586B\u5199\u542F\u52A8\u547D\u4EE4\u4E0E\u5DE5\u4F5C\u76EE\u5F55", "No DeepSeek Harness repo detected: get the source from github.com/deepseek-ai/deepseek-harness, or fill in the startup command and working directory manually in Settings"],
  "detect.found": ["\u5DF2\u68C0\u6D4B\u5230 DSH \u4ED3\u5E93\uFF1A{dir}\uFF1B\u542F\u52A8\u547D\u4EE4\uFF1A{cmd}", "DSH repo detected: {dir}; startup command: {cmd}"],
  // ---- DSH RPC API ----
  "api.timeout": ["\u8BF7\u6C42 DSH \u8D85\u65F6\uFF08{ms}ms\uFF09", "DSH request timed out ({ms}ms)"],
  "api.notRunning": ["DSH \u670D\u52A1\u672A\u8FD0\u884C\uFF08127.0.0.1:{port} \u62D2\u7EDD\u8FDE\u63A5\uFF09", "DSH service is not running (connection refused on 127.0.0.1:{port})"],
  "api.connectFail": ["\u65E0\u6CD5\u8FDE\u63A5 DSH\uFF1A{err}", "Cannot connect to DSH: {err}"],
  "api.httpStatus": ["DSH \u8FD4\u56DE HTTP {code}", "DSH returned HTTP {code}"],
  "api.badFormat": ["DSH \u8FD4\u56DE\u4E86\u610F\u5916\u7684\u54CD\u5E94\u683C\u5F0F", "DSH returned an unexpected response format"],
  "api.rejected": ["DSH \u62D2\u7EDD\u4E86\u8BF7\u6C42", "DSH rejected the request"],
  "api.unparsable": ["DSH \u54CD\u5E94\u65E0\u6CD5\u89E3\u6790", "Cannot parse the DSH response"],
  "bridge.patchMergeError": ["\u73B0\u6709\u8865\u4E01\u6587\u4EF6\u4E3A\u975E\u7A7A\u6D41\u5F0F\u6570\u7EC4\u683C\u5F0F\uFF0C\u65E0\u6CD5\u81EA\u52A8\u5408\u5E76\uFF1B\u8BF7\u624B\u52A8\u5728 ~/.dsh/profiles/web/cordis.patch.yml \u8FFD\u52A0\u6865\u63A5\u6761\u76EE", "The existing patch file uses a non-empty flow-array format that cannot be merged automatically; add the bridge entry manually in ~/.dsh/profiles/web/cordis.patch.yml"]
};
var current = "zh";
function resolveLocale(setting, detected) {
  if (setting === "zh") return "zh";
  if (setting === "en") return "en";
  return detected != null ? detected : "en";
}
function applyLocale(setting, detected) {
  current = resolveLocale(setting, detected);
}
function getLocale() {
  return current;
}
function t(key, vars) {
  const entry = dict[key];
  const text = entry ? current === "en" ? entry[1] : entry[0] : key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, name) => {
    var _a;
    return String((_a = vars[name]) != null ? _a : "");
  });
}

// src/win-exec.ts
var CMD_WRAP_SET = /* @__PURE__ */ new Set(["npm", "npx", "pnpm", "dsh", "dsh-fix", "dsh-doctor"]);
function resolveExec(platform, command, args) {
  if (platform === "win32" && CMD_WRAP_SET.has(command)) {
    return { command: "cmd.exe", args: ["/d", "/s", "/c", command, ...args] };
  }
  return { command, args };
}

// src/service-manager.ts
var DEFAULT_PROBE_TIMEOUT_MS = 3e3;
var DEFAULT_POLL_INTERVAL_MS = 1e3;
var DEFAULT_READY_TIMEOUT_MS = 3e5;
function renderCommand(template, port) {
  const trimmed = template.replaceAll("{port}", String(port)).trim();
  if (trimmed === "") {
    return { command: "", args: [] };
  }
  const parts = trimmed.split(/\s+/);
  return { command: parts[0], args: parts.slice(1) };
}
function detectStartupCommand() {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process.execFileSync)(probe, ["dsh"], { stdio: "ignore" });
  } catch (e) {
    return "";
  }
  if (dshSupportsNoOpen()) {
    return "dsh web --port {port} --no-open";
  }
  return "dsh web --port {port}";
}
var cachedDshVersion = "";
var cachedNoOpenSupport = null;
function dshVersion() {
  var _a;
  if (cachedDshVersion !== "") return cachedDshVersion;
  try {
    const resolved = resolveExec(process.platform, "dsh", ["--version"]);
    const out = (0, import_node_child_process.execFileSync)(resolved.command, resolved.args, { encoding: "utf8", timeout: 5e3 });
    cachedDshVersion = ((_a = out.trim().split(/\r?\n/)[0]) != null ? _a : "").trim();
  } catch (e) {
    cachedDshVersion = "";
  }
  return cachedDshVersion;
}
function dshSupportsNoOpen() {
  if (cachedNoOpenSupport !== null) return cachedNoOpenSupport;
  return true;
}
function probeNoOpenSupportAsync(onDone) {
  setTimeout(() => {
    let supported = true;
    try {
      const resolved = resolveExec(process.platform, "dsh", ["web", "--help"]);
      const help = (0, import_node_child_process.execFileSync)(resolved.command, resolved.args, { encoding: "utf8", timeout: 15e3 });
      supported = help.includes("no-open");
    } catch (e) {
      supported = false;
    }
    cachedNoOpenSupport = supported;
    cachedDshVersion = dshVersion();
    onDone == null ? void 0 : onDone(supported);
  }, 0);
}
function killPortOwner(port) {
  if (process.platform === "win32") {
    killPortOwnerWin32(port);
    return;
  }
  try {
    const out = (0, import_node_child_process.execFileSync)("lsof", ["-ti", `:${port}`], { encoding: "utf8" });
    for (const pid of out.split(/\s+/).filter(Boolean)) {
      try {
        const cmd = (0, import_node_child_process.execFileSync)("ps", ["-p", pid, "-o", "command="], { encoding: "utf8" });
        if (/dsh|deepseek-harness|bin\.js/i.test(cmd)) {
          (0, import_node_child_process.execFileSync)("kill", ["-9", pid], { stdio: "ignore" });
        }
      } catch (e) {
      }
    }
  } catch (e) {
  }
}
function killPortOwnerWin32(port) {
  try {
    const netstat = (0, import_node_child_process.execFileSync)("netstat", ["-ano"], { encoding: "utf8" });
    const pids = /* @__PURE__ */ new Set();
    for (const line of netstat.split(/\r?\n/)) {
      const m = /TCP\s+127\.0\.0\.1:(\d+)\s+\S+\s+LISTENING\s+(\d+)/.exec(line);
      if (m !== null && Number(m[1]) === port) {
        pids.add(m[2]);
      }
    }
    for (const pid of pids) {
      if (isDshProcess(pid)) {
        try {
          (0, import_node_child_process.execFileSync)("taskkill", ["/pid", pid, "/T", "/F"], { stdio: "ignore" });
        } catch (e) {
        }
      }
    }
  } catch (e) {
  }
}
function isDshProcess(pid) {
  try {
    const ps = (0, import_node_child_process.execFileSync)("powershell", [
      "-NoProfile",
      "-NonInteractive",
      "-Command",
      `(Get-CimInstance Win32_Process -Filter 'ProcessId=${pid}').CommandLine`
    ], { encoding: "utf8", timeout: 8e3 });
    return /dsh|deepseek-harness|bin\.js/i.test(ps);
  } catch (e) {
    return false;
  }
}
function tcpProbe(port, timeoutMs) {
  return new Promise((resolve) => {
    const socket = (0, import_node_net.connect)({ host: "127.0.0.1", port });
    const timer = window.setTimeout(() => {
      socket.destroy();
      resolve(false);
    }, timeoutMs);
    socket.once("connect", () => {
      window.clearTimeout(timer);
      socket.destroy();
      resolve(true);
    });
    socket.once("error", () => {
      window.clearTimeout(timer);
      resolve(false);
    });
  });
}
async function defaultProbe(port, timeoutMs) {
  const t2 = timeoutMs != null ? timeoutMs : DEFAULT_PROBE_TIMEOUT_MS;
  return tcpProbe(port, t2);
}
function winQuoted(part) {
  return /\s/.test(part) ? `"${part}"` : part;
}
function winSpawnHidden(command, args, cwd, detached) {
  const cmdLine = [winQuoted(command), ...args.map(winQuoted)].join(" ");
  const vbsPath = (0, import_node_path.join)((0, import_node_os.tmpdir)(), `dsh-launch-${process.pid}-${Date.now()}.vbs`);
  const body = `Set sh = CreateObject("WScript.Shell")\r
On Error Resume Next\r
Set ex = sh.Run("cmd.exe /d /s /c ${cmdLine.replaceAll('"', '""')}", 0, True)\r
If Err.Number = 0 And Not ex Is Nothing Then WScript.Quit ex.ExitCode\r
`;
  (0, import_node_fs.writeFileSync)(vbsPath, "\uFEFF" + body, "utf16le");
  const child = (0, import_node_child_process.spawn)("wscript.exe", ["//nologo", "//b", vbsPath], {
    cwd,
    detached,
    stdio: "ignore",
    windowsHide: true
  });
  const cleanup = () => {
    try {
      (0, import_node_fs.unlinkSync)(vbsPath);
    } catch (e) {
    }
  };
  child.once("exit", cleanup);
  child.once("error", cleanup);
  return child;
}
function defaultSpawnProcess(command, args, cwd, detached) {
  if (process.platform === "win32") {
    return winSpawnHidden(command, args, cwd, detached);
  }
  return (0, import_node_child_process.spawn)(command, args, {
    cwd,
    detached: true,
    stdio: "ignore",
    windowsHide: true
  });
}
function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}
var DshServiceManager = class {
  constructor(opts, deps) {
    this.child = null;
    /** 是否已发起过启动（普通可变字段）。 */
    this.spawned = false;
    /** spawn 失败原因（由子进程 'error' 事件捕获）。 */
    this.spawnError = null;
    /** 是否已 dispose（防止卸载后重新拉起）。 */
    this.disposed = false;
    var _a, _b, _c, _d, _e;
    this.opts = opts;
    this.deps = {
      probe: (_a = deps == null ? void 0 : deps.probe) != null ? _a : (p) => defaultProbe(p, opts.probeTimeoutMs),
      spawnProcess: (_b = deps == null ? void 0 : deps.spawnProcess) != null ? _b : defaultSpawnProcess,
      killPortOwner: (_c = deps == null ? void 0 : deps.killPortOwner) != null ? _c : killPortOwner
    };
    this.pollIntervalMs = (_d = opts.pollIntervalMs) != null ? _d : DEFAULT_POLL_INTERVAL_MS;
    this.readyTimeoutMs = (_e = opts.readyTimeoutMs) != null ? _e : DEFAULT_READY_TIMEOUT_MS;
  }
  /** 探测一次服务是否在线。 */
  async probe() {
    return this.deps.probe(this.opts.port);
  }
  /** 服务离线时的原因描述（优先进程退出/spawn 错误，其次自动启动开关，兜底通用描述）。 */
  describeOffline() {
    if (this.spawnError) {
      return this.spawnError;
    }
    if (!this.opts.autoStart) {
      return t("svc.offlineNoAuto", { port: this.opts.port });
    }
    if (this.spawned) {
      return t("svc.stopped", { port: this.opts.port });
    }
    return t("svc.offline", { port: this.opts.port });
  }
  /**
   * 确保服务在线：先探活，离线时按 autoStart 决定启动并轮询等待就绪。
   * 返回最终服务状态（online / failed）。
   */
  async ensureOnline() {
    if (await this.probe()) {
      return { kind: "online" };
    }
    if (!this.opts.autoStart) {
      return { kind: "failed", message: t("svc.ensureOffline", { port: this.opts.port }) };
    }
    this.start();
    const deadline = Date.now() + this.readyTimeoutMs;
    while (Date.now() < deadline) {
      if (this.disposed) {
        return { kind: "failed", message: t("svc.unloaded") };
      }
      if (this.spawnError) {
        return { kind: "failed", message: t("svc.startFailed", { err: this.spawnError }) };
      }
      await delay(this.pollIntervalMs);
      if (await this.probe()) {
        return { kind: "online" };
      }
    }
    const seconds = Math.ceil(this.readyTimeoutMs / 1e3);
    return { kind: "failed", message: t("svc.timeout", { sec: seconds }) };
  }
  /** 拉起服务子进程；已 dispose 或已启动（child 存活）则忽略。命令为空时抛错。 */
  start() {
    if (this.disposed) {
      return;
    }
    if (this.child) {
      return;
    }
    const { command, args } = renderCommand(this.opts.startupCommand, this.opts.port);
    if (!command) {
      throw new Error(t("svc.noCommand"));
    }
    this.spawnError = null;
    this.deps.killPortOwner(this.opts.port);
    const child = this.deps.spawnProcess(command, args, this.opts.startupCwd, this.opts.detached);
    this.child = child;
    this.spawned = true;
    child.on("exit", (code) => {
      var _a;
      this.child = null;
      if (code !== 0 && code !== null) {
        this.spawnError = (_a = this.spawnError) != null ? _a : t("svc.exited", { code });
      }
    });
    child.on("error", (err) => {
      this.spawnError = err.message;
      this.child = null;
    });
  }
  /** 回收资源：非 detached 子进程将被终止；Windows 按进程树、POSIX 按进程组整组回收。 */
  dispose() {
    this.disposed = true;
    if (this.child && !this.opts.detached) {
      const pid = this.child.pid;
      if (pid && process.platform === "win32") {
        try {
          (0, import_node_child_process.execFileSync)("taskkill", ["/pid", String(pid), "/T", "/F"], { stdio: "ignore" });
        } catch (e) {
        }
      } else if (pid) {
        try {
          process.kill(-pid, "SIGTERM");
        } catch (e) {
        }
      } else {
        this.child.kill();
      }
      this.child = null;
    }
  }
};

// src/settings.ts
var import_obsidian = require("obsidian");

// src/detector.ts
var import_node_child_process2 = require("node:child_process");
var import_node_fs2 = require("node:fs");
var import_node_os2 = require("node:os");
var import_node_path2 = require("node:path");
function defaultHasBin(name) {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process2.execFileSync)(probe, [name], { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
function isDshRepo(dir) {
  var _a;
  if ((0, import_node_fs2.existsSync)((0, import_node_path2.join)(dir, "pnpm-workspace.yaml"))) {
    return true;
  }
  const pkgPath = (0, import_node_path2.join)(dir, "package.json");
  if (!(0, import_node_fs2.existsSync)(pkgPath)) {
    return false;
  }
  try {
    const raw = (0, import_node_fs2.readFileSync)(pkgPath, "utf8");
    const pkg = JSON.parse(raw);
    if ((_a = pkg.name) == null ? void 0 : _a.includes("deepseek-harness")) {
      return true;
    }
    return Boolean(pkg.scripts && typeof pkg.scripts.dsh === "string");
  } catch (e) {
    return false;
  }
}
function locateDshRepoDir(candidates) {
  for (const dir of candidates) {
    if (dir && (0, import_node_fs2.existsSync)(dir) && isDshRepo(dir)) {
      return dir;
    }
  }
  return null;
}
function defaultCandidates(cwd, homeDir = (0, import_node_os2.homedir)()) {
  const winPaths = process.platform === "win32" ? ["D:\\deepseek-harness", "C:\\deepseek-harness"] : [];
  const posixPaths = process.platform === "darwin" ? ["/opt/deepseek-harness", "/usr/local/deepseek-harness"] : [];
  return [...new Set([cwd, (0, import_node_path2.join)(homeDir, "deepseek-harness"), ...posixPaths, ...winPaths].filter(Boolean))];
}
function detectDshConfig(current2, opts = {}) {
  var _a, _b, _c;
  const homeDir = (_a = opts.homeDir) != null ? _a : (0, import_node_os2.homedir)();
  const hasBin2 = (_b = opts.hasBin) != null ? _b : defaultHasBin;
  if (hasBin2("dsh")) {
    return {
      found: true,
      // --no-open：DSH 全局 CLI 默认启动时自动打开系统浏览器（openBrowser 默认 true），面板嵌入场景不需要
      startupCommand: "dsh web --port {port} --no-open",
      startupCwd: current2.cwd,
      message: t("detect.path", { port: "{port}" })
    };
  }
  const repoDir = locateDshRepoDir((_c = opts.candidates) != null ? _c : defaultCandidates(current2.cwd, homeDir));
  if (!repoDir) {
    return {
      found: false,
      startupCommand: "",
      startupCwd: "",
      message: t("detect.notFound")
    };
  }
  const command = hasBin2("pnpm") ? "pnpm dsh web --port {port}" : "npm run dsh -- web --port {port}";
  return {
    found: true,
    startupCommand: command,
    startupCwd: repoDir,
    message: t("detect.found", { dir: repoDir, cmd: command })
  };
}

// src/installer.ts
var import_node_child_process3 = require("node:child_process");
var import_node_fs3 = require("node:fs");
var DEFAULT_DSH_REPO_URL = "https://github.com/deepseek-ai/deepseek-harness.git";
var CLONE_TIMEOUT_MS = 3e5;
var INSTALL_TIMEOUT_MS = 6e5;
function run(exec, command, args, timeoutMs, env) {
  const resolved = resolveExec(process.platform, command, args);
  return new Promise((resolve) => {
    exec(resolved.command, resolved.args, { timeout: timeoutMs, windowsHide: true, ...env ? { env } : {} }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: String(stdout != null ? stdout : "").trim(), err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout != null ? stdout : "").trim(), err: "" });
      }
    });
  });
}
var cachedPath;
function refreshedPath() {
  var _a, _b;
  if (cachedPath !== void 0) return cachedPath;
  if (process.platform === "win32") {
    try {
      const script = "[Environment]::ExpandEnvironmentVariables(([Environment]::GetEnvironmentVariable('Path','Machine')+';'+[Environment]::GetEnvironmentVariable('Path','User')))";
      const out = (0, import_node_child_process3.execFileSync)(
        "powershell.exe",
        ["-NoProfile", "-NonInteractive", "-Command", script],
        { encoding: "utf8", windowsHide: true, timeout: 15e3 }
      ).trim();
      if (out) cachedPath = out;
    } catch (e) {
    }
  } else if (process.platform === "darwin" || process.platform === "linux") {
    const current2 = (_a = process.env.PATH) != null ? _a : "";
    const home = process.env.HOME;
    const extras = [
      "/opt/homebrew/bin",
      // Apple Silicon brew
      "/opt/homebrew/sbin",
      "/usr/local/bin",
      // Intel brew / 常见安装
      "/usr/local/sbin",
      ...home ? [`${home}/.local/bin`, `${home}/bin`] : []
      // pip/用户级工具
    ];
    const merged = [current2, ...extras.filter((p) => (0, import_node_fs3.existsSync)(p))].join(":");
    if (merged) cachedPath = merged;
  }
  return (_b = cachedPath != null ? cachedPath : process.env.PATH) != null ? _b : "";
}
function refreshedEnv() {
  const path = refreshedPath();
  return { ...process.env, PATH: path, Path: path };
}
function defaultHasBin2(name) {
  const probe = process.platform === "win32" ? "where" : "which";
  try {
    (0, import_node_child_process3.execFileSync)(probe, [name], { stdio: "ignore", env: refreshedEnv() });
    return true;
  } catch (e) {
    return false;
  }
}
function delay2(ms) {
  return new Promise((resolve) => setTimer(resolve, ms));
}
var winTimers = typeof window !== "undefined" ? window : void 0;
function setTimer(fn, ms) {
  return winTimers ? winTimers.setTimeout(fn, ms) : setTimeout(fn, ms);
}
function clearTimer(id) {
  if (winTimers) winTimers.clearTimeout(id);
  else clearTimeout(id);
}
function setIntervalTimer(fn, ms) {
  return winTimers ? winTimers.setInterval(fn, ms) : setInterval(fn, ms);
}
function clearIntervalTimer(id) {
  if (winTimers) winTimers.clearInterval(id);
  else clearInterval(id);
}
function cloneWithProgress(targetDir, url, env, onProgress) {
  return new Promise((resolve) => {
    var _a;
    const child = (0, import_node_child_process3.spawn)(
      "git",
      [
        "clone",
        "--depth",
        "1",
        "--progress",
        "--config",
        "http.postBuffer=524288000",
        "--config",
        "http.lowSpeedLimit=1000",
        "--config",
        "http.lowSpeedTime=30",
        url,
        targetDir
      ],
      { env, windowsHide: true, stdio: ["ignore", "ignore", "pipe"] }
    );
    let stderr = "";
    let last = -1;
    const timer = setTimer(() => child.kill(), CLONE_TIMEOUT_MS);
    (_a = child.stderr) == null ? void 0 : _a.on("data", (chunk) => {
      const s = String(chunk);
      stderr += s;
      const m = s.match(/Receiving objects:\s+(\d+)%/);
      if (m) {
        const pct = Number(m[1]);
        if (pct !== last) {
          last = pct;
          onProgress(pct);
        }
      }
    });
    child.on("error", (err) => {
      clearTimer(timer);
      resolve({ ok: false, out: "", err: err.message });
    });
    child.on("close", (code) => {
      clearTimer(timer);
      resolve(code === 0 ? { ok: true, out: "", err: "" } : { ok: false, out: "", err: stderr.trim() });
    });
  });
}
async function runWithTicker(promise, onStep, baseStep, percent, intervalMs = 5e3) {
  let elapsed = 0;
  const id = setIntervalTimer(() => {
    elapsed += intervalMs;
    onStep(`${baseStep}\uFF08${Math.round(elapsed / 1e3)}s\uFF09`, percent);
  }, intervalMs);
  try {
    return await promise;
  } finally {
    clearIntervalTimer(id);
  }
}
function isRescuableDir(dir) {
  try {
    const entries = (0, import_node_fs3.readdirSync)(dir);
    return entries.length === 0 || entries.length === 1 && entries[0] === ".git";
  } catch (e) {
    return false;
  }
}
function checkDeps(opts = {}) {
  var _a;
  const hasBin2 = (_a = opts.hasBin) != null ? _a : defaultHasBin2;
  return { git: hasBin2("git"), node: hasBin2("node"), pnpm: hasBin2("pnpm") };
}
async function installDependency(dep, opts = {}) {
  var _a, _b;
  const exec = (_a = opts.exec) != null ? _a : import_node_child_process3.execFile;
  const onStep = (_b = opts.onStep) != null ? _b : () => void 0;
  const env = opts.exec ? void 0 : refreshedEnv();
  const ticked = (promise, pct) => opts.exec ? promise : runWithTicker(promise, onStep, t("install.autoDep", { dep }), pct);
  if (process.platform === "win32") {
    if (dep === "git") {
      const r2 = await ticked(run(exec, "winget", ["install", "--id", "Git.Git", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 8);
      return r2.ok ? { ok: true, message: t("dep.git.installed") } : { ok: false, message: t("dep.git.fail", { err: r2.err || t("err.unknown") }) };
    }
    if (dep === "node") {
      const r2 = await ticked(run(exec, "winget", ["install", "--id", "OpenJS.NodeJS.LTS", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 16);
      return r2.ok ? { ok: true, message: t("dep.node.installed") } : { ok: false, message: t("dep.node.fail", { err: r2.err || t("err.unknown") }) };
    }
    const w = await ticked(run(exec, "winget", ["install", "--id", "pnpm.pnpm", "-e", "--accept-source-agreements", "--accept-package-agreements", "--silent"], 6e5, env), 24);
    if (w.ok) {
      return { ok: true, message: t("dep.pnpm.installed") };
    }
    const r = await ticked(run(exec, "npm", ["install", "-g", "pnpm"], 6e5, env), 24);
    return r.ok ? { ok: true, message: t("dep.pnpm.installed") } : { ok: false, message: t("dep.pnpm.fail", { err: r.err || t("err.unknown") }) };
  }
  if (process.platform === "darwin") {
    const formula = dep === "git" ? "git" : dep === "node" ? "node" : "pnpm";
    const r = await ticked(run(exec, "brew", ["install", formula], 6e5, env), 24);
    return r.ok ? { ok: true, message: t("dep.brew.installed", { dep }) } : { ok: false, message: t("dep.brew.fail", { dep, err: r.err.split("\n")[0] || t("err.unknown"), formula }) };
  }
  const hints = {
    git: "macOS: brew install git\uFF1BLinux: sudo apt install git",
    node: t("dep.hint.node"),
    pnpm: t("dep.hint.pnpm")
  };
  return { ok: false, message: t("dep.manual", { hint: hints[dep] }) };
}
async function installDsh(targetDir, opts = {}) {
  var _a, _b, _c, _d;
  const exec = (_a = opts.exec) != null ? _a : import_node_child_process3.execFile;
  const hasBin2 = (_b = opts.hasBin) != null ? _b : defaultHasBin2;
  const cloneUrl = (_c = opts.cloneUrl) != null ? _c : DEFAULT_DSH_REPO_URL;
  const onStep = (_d = opts.onStep) != null ? _d : () => void 0;
  const env = opts.exec ? void 0 : refreshedEnv();
  if (!targetDir) {
    return { ok: false, message: t("install.dirEmpty") };
  }
  if ((0, import_node_fs3.existsSync)(targetDir) && isDshRepo(targetDir)) {
    return { ok: true, message: t("install.found", { dir: targetDir }), dir: targetDir };
  }
  if ((0, import_node_fs3.existsSync)(targetDir)) {
    if (isRescuableDir(targetDir)) {
      (0, import_node_fs3.rmSync)(targetDir, { recursive: true, force: true });
    } else {
      return {
        ok: false,
        message: t("install.notDsh", { dir: targetDir })
      };
    }
  }
  if (!opts.exec) {
    const depPct = { git: 8, node: 16, pnpm: 24 };
    for (const dep of ["git", "node", "pnpm"]) {
      if (!hasBin2(dep)) {
        onStep(t("install.autoDep", { dep }), depPct[dep]);
        const r = await installDependency(dep, { onStep });
        if (!r.ok) {
          return { ok: false, message: r.message };
        }
        if (!hasBin2(dep)) {
          return { ok: false, message: t("install.depStillMissing", { dep }) };
        }
      }
    }
  }
  onStep(t("install.downloading"), 30);
  const mirrorUrl = `https://gh-proxy.com/${cloneUrl}`;
  const cloneAttempts = [cloneUrl, mirrorUrl];
  const cloneArgs = (url) => [
    "clone",
    "--depth",
    "1",
    "--config",
    "http.postBuffer=524288000",
    "--config",
    "http.lowSpeedLimit=1000",
    "--config",
    "http.lowSpeedTime=30",
    url,
    targetDir
  ];
  let clone = null;
  let lastErr = "";
  for (let i = 0; i < cloneAttempts.length; i++) {
    if (i > 0) {
      onStep(t("install.mirrorRetry", { n: i }), 28);
      await delay2(2e3);
    }
    const r = opts.exec ? await run(exec, "git", cloneArgs(cloneAttempts[i]), CLONE_TIMEOUT_MS, env) : await cloneWithProgress(targetDir, cloneAttempts[i], env, (pct) => {
      onStep(t("install.downloading"), Math.round(30 + pct * 0.3));
    });
    if (r.ok && (0, import_node_fs3.existsSync)(targetDir) && isDshRepo(targetDir)) {
      clone = r;
      break;
    }
    lastErr = r.err.split("\n")[0] || `${t("err.failed")}\uFF08\u7B2C ${i + 1} \u6B21\u5C1D\u8BD5\uFF09`;
    if ((0, import_node_fs3.existsSync)(targetDir)) {
      (0, import_node_fs3.rmSync)(targetDir, { recursive: true, force: true });
    }
  }
  if (!clone) {
    return {
      ok: false,
      message: t("install.cloneFailed", { err: lastErr })
    };
  }
  let depsNote = "";
  if (hasBin2("pnpm")) {
    onStep(t("install.depsInstalling"), 65);
    const runInstall = (extra) => run(exec, "pnpm", ["-C", targetDir, "install", ...extra], INSTALL_TIMEOUT_MS, env);
    let install = opts.exec ? await runInstall([]) : await runWithTicker(runInstall([]), onStep, t("install.depsInstalling"), 70);
    if (!install.ok) {
      onStep(t("install.depsMirror"), 60);
      install = opts.exec ? await runInstall(["--registry", "https://registry.npmmirror.com"]) : await runWithTicker(
        runInstall(["--registry", "https://registry.npmmirror.com"]),
        onStep,
        t("install.depsInstalling"),
        70
      );
    }
    if (!install.ok) {
      depsNote = t("install.depsNoteFail", { err: install.err.split("\n")[0] || t("err.failed"), dir: targetDir });
    }
  } else {
    depsNote = t("install.depsNoteNoPnpm");
  }
  if (hasBin2("pnpm")) {
    onStep(t("install.buildStep"), 75);
    const runBuild = () => run(exec, "pnpm", ["-C", targetDir, "run", "build"], INSTALL_TIMEOUT_MS, env);
    const build = opts.exec ? await runBuild() : await runWithTicker(runBuild(), onStep, t("install.buildStep"), 85);
    if (!build.ok) {
      return {
        ok: false,
        message: t("install.buildFail", { err: build.err.split("\n")[0] || t("err.failed"), dir: targetDir })
      };
    }
  }
  onStep(t("install.done"), 100);
  return {
    ok: true,
    message: t("install.message", { dir: targetDir, note: depsNote }),
    dir: targetDir
  };
}

// src/bridge.ts
var import_node_crypto = require("node:crypto");
var import_node_fs4 = require("node:fs");
var import_node_os3 = require("node:os");
var import_node_path3 = require("node:path");
var BRIDGE_ENTRY_ID = "dsh-obsidian-bridge";
var BRIDGE_FILENAME = "dsh-obsidian-bridge.mjs";
function dshHomeDir() {
  var _a;
  const env = ((_a = process.env.DSH_HOME) != null ? _a : "").trim();
  return env !== "" ? env : (0, import_node_path3.join)((0, import_node_os3.homedir)(), ".dsh");
}
function webProfileDir(home = dshHomeDir()) {
  return (0, import_node_path3.join)(home, "profiles", "web");
}
function bridgeScriptSource() {
  return "(function(){if(window.__DSH_OBSIDIAN_BRIDGE__)return;window.__DSH_OBSIDIAN_BRIDGE__=true;function pick(){var el=document.querySelector('textarea[data-phase]')||document.querySelector('textarea');return el&&!el.readOnly&&!el.disabled?el:null}function fill(text){var n=0;function go(){var el=pick();if(el){var d=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,'value');d.set.call(el,text);el.dispatchEvent(new Event('input',{bubbles:true}));el.focus();return}if(++n<20)setTimeout(go,200)}go()}var vaultRoot=null;function normP(p){return p.replace(/\\\\/g,'/').replace(/\\/+/g,'/')}function coll(p){var m=/^[A-Za-z]:/.exec(p),drive=m?m[0]:'',body=p.slice(drive.length),rooted=body.charAt(0)==='/',segs=[],i,parts=body.split('/');for(i=0;i<parts.length;i++){var s=parts[i];if(s===''||s==='.')continue;if(s==='..'){if(segs.length)segs.pop()}else{segs.push(s)}}return drive+(rooted?'/':'')+segs.join('/')}function resolveTxt(text){var t=text.trim();if(!t||t.length>300||!vaultRoot)return null;var r=normP(vaultRoot).replace(/\\/+$/,'');var abs=/^[A-Za-z]:/.test(t)||t.charAt(0)==='/'?normP(t):r+'/'+normP(t);var a=coll(abs);var rl=r.toLowerCase(),al=a.toLowerCase();if(al===rl||al.indexOf(rl+'/')===0)return a;return null}function isClickable(el){return el.tagName==='BUTTON'||el.tagName==='A'}function labelPrefixed(t){return /^(read|edit|write|think|grep|pwsh|tool|search|diff|web|bash|python|node|run|open|show|copy|cat|mkdir|rm|mv|add|delete)\b/i.test(t)}function readable(p){return /\\.(md|markdown|txt|canvas|pdf|png|jpe?g|gif|svg|webp|bmp|ico|mp3|wav|ogg|oga|m4a|flac|opus|aac|mp4|webm|mov|mkv|avi|m4v|ogv|3gp|ts|js|jsx|tsx|mjs|cjs|json|css|scss|less|html|htm|xml|yaml|yml|csv|log|mdx|py|sh|bat|ps1)$/i.test(p)}function pathOf(el){var t=el.getAttribute?el.getAttribute('title'):null;if(t&&/[\\\\/]/.test(t))return t;return (el.textContent||'').trim()}document.addEventListener('click',function(e){if(!vaultRoot)return;var el=e.target;while(el&&el!==document.body){var txt=pathOf(el);if(txt.length>2&&txt.length<300&&/[\\\\/]/.test(txt)&&isClickable(el)&&!labelPrefixed(txt)){e.preventDefault();e.stopPropagation();var r=resolveTxt(txt);if(r&&readable(r)){try{window.parent.postMessage({type:'dsh-open-in-obsidian',path:r},'*')}catch(_){}}return}el=el.parentElement}},true);window.addEventListener('message',function(e){if(e.source!==window.parent)return;var d=e.data;if(!d)return;if(d.type==='dsh-fill-draft'&&typeof d.text==='string'){fill(d.text);return}if(d.type==='dsh-bridge-ping'){try{window.parent.postMessage({type:'dsh-bridge-ready'},'*')}catch(_){};return}if(d.type==='dsh-open-cfg'&&typeof d.vaultRoot==='string'){vaultRoot=d.vaultRoot;return}});try{window.parent.postMessage({type:'dsh-bridge-ready'},'*')}catch(_){}})()";
}
function bridgePluginSource() {
  const escaped = bridgeScriptSource().replaceAll("\\", "\\\\").replaceAll("'", "\\'");
  return [
    "// DeepSeek Harness Obsidian bridge \u2014 user patch-layer plugin (installed by the dsh-harness Obsidian plugin).",
    "// Registers an index.html transform that injects a postMessage bridge into the served Web GUI,",
    "// so the Obsidian plugin can fill the composer draft with selected text. Zero DSH source changes.",
    "export const name = 'dsh-obsidian-bridge'",
    "",
    `const BRIDGE = '${escaped}'`,
    "",
    "export function apply(ctx) {",
    "  ctx.inject(['webServer'], (httpCtx) => {",
    "    httpCtx.effect(",
    "      () => httpCtx.webServer.tapIndex((html) => html.replace('<head>', '<head><script>' + BRIDGE + '<\/script>')),",
    "      'dsh-obsidian-bridge: index bridge',",
    "    )",
    "  })",
    "}",
    ""
  ].join("\n");
}
function contentHash(s) {
  return (0, import_node_crypto.createHash)("sha256").update(s, "utf8").digest("hex");
}
function writeBridgeFiles(home = dshHomeDir()) {
  try {
    const dir = webProfileDir(home);
    (0, import_node_fs4.mkdirSync)(dir, { recursive: true });
    const pluginPath = (0, import_node_path3.join)(dir, BRIDGE_FILENAME);
    const source = bridgePluginSource();
    if (!(0, import_node_fs4.existsSync)(pluginPath) || contentHash((0, import_node_fs4.readFileSync)(pluginPath, "utf8")) !== contentHash(source)) {
      (0, import_node_fs4.writeFileSync)(pluginPath, source, "utf8");
    }
    const patchPath = (0, import_node_path3.join)(dir, "cordis.patch.yml");
    const existing = (0, import_node_fs4.existsSync)(patchPath) ? (0, import_node_fs4.readFileSync)(patchPath, "utf8") : "";
    if (existing.includes(BRIDGE_ENTRY_ID)) {
      return { changed: false, pluginPath };
    }
    const fileUrl = "file:///" + pluginPath.replaceAll("\\", "/");
    const entry = `- insert:
    - id: ${BRIDGE_ENTRY_ID}
      name: ${fileUrl}
`;
    const body = existing.split("\n").filter((line) => !line.trim().startsWith("#")).join("\n").trim();
    if (existing === "") {
      const newContent = `# ${BRIDGE_ENTRY_ID} \u2014 installed by the dsh-harness Obsidian plugin
${entry}`;
      (0, import_node_fs4.writeFileSync)(patchPath, newContent, "utf8");
      return { changed: true, pluginPath };
    }
    if (body === "[]") {
      const header = existing.trimEnd().replace(/\s*\[\s*\]\s*$/, "");
      const newContent = (header === "" || header.endsWith("\n") ? header : header + "\n") + entry;
      (0, import_node_fs4.writeFileSync)(patchPath, newContent, "utf8");
      return { changed: true, pluginPath };
    }
    if (/^-\s/.test(body)) {
      (0, import_node_fs4.writeFileSync)(patchPath, existing.trimEnd() + "\n" + entry, "utf8");
      return { changed: true, pluginPath };
    }
    return {
      changed: false,
      pluginPath,
      error: t("bridge.patchMergeError")
    };
  } catch (err) {
    return {
      changed: false,
      pluginPath: "",
      error: err instanceof Error ? err.message : String(err)
    };
  }
}
function isBridgeInstalled(home = dshHomeDir()) {
  try {
    const dir = webProfileDir(home);
    if (!(0, import_node_fs4.existsSync)((0, import_node_path3.join)(dir, BRIDGE_FILENAME))) return false;
    const patchPath = (0, import_node_path3.join)(dir, "cordis.patch.yml");
    if (!(0, import_node_fs4.existsSync)(patchPath)) return false;
    return (0, import_node_fs4.readFileSync)(patchPath, "utf8").includes(BRIDGE_ENTRY_ID);
  } catch (e) {
    return false;
  }
}

// src/settings.ts
var DEFAULT_SETTINGS = {
  port: 3080,
  startupCommand: "",
  startupCwd: "",
  autoStart: true,
  detached: true,
  readyTimeoutSec: 300,
  zoom: 0.6,
  installDir: "",
  installUrl: DEFAULT_DSH_REPO_URL,
  updateMirrorUrl: "",
  language: "auto",
  autoCheckUpdates: true,
  selectionButton: true,
  openPanelOnSend: true,
  addSourceTag: true
};
function startupCommandHint() {
  return t("settings.command.hint");
}
var DshSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    const detectedDir = locateDshRepoDir(defaultCandidates(this.plugin.settings.startupCwd));
    if (!this.plugin.settings.installDir && detectedDir) {
      this.plugin.settings.installDir = detectedDir;
      void this.plugin.saveSettings();
    }
    const statusSetting = new import_obsidian.Setting(containerEl).setName(t("settings.status.title")).setDesc(t("settings.status.reading"));
    void this.plugin.getDshStatus().then((s) => {
      let text;
      if (!s.installed) {
        text = t("settings.status.notInstalled");
      } else if (s.online) {
        text = s.version !== t("up.unknown") ? t("settings.status.installedVer", { v: s.version }) : t("settings.status.installed");
      } else {
        text = t("settings.status.stopped");
      }
      statusSetting.descEl.textContent = text;
    });
    new import_obsidian.Setting(containerEl).setName(t("settings.section.basic")).setHeading();
    new import_obsidian.Setting(containerEl).setName(t("settings.language.title")).setDesc(t("settings.language.desc")).addDropdown(
      (d) => d.addOption("auto", t("settings.language.auto")).addOption("zh", t("settings.language.zh")).addOption("en", t("settings.language.en")).setValue(this.plugin.settings.language).onChange(async (v) => {
        this.plugin.settings.language = v;
        await this.plugin.saveSettings();
        applyLocale(
          this.plugin.settings.language,
          this.plugin.settings.language === "auto" ? this.plugin.detectSystemLanguage() : void 0
        );
        this.display();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.install.title")).setDesc(t("settings.install.desc")).addButton(
      (b) => b.setButtonText(t("settings.install.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.install.preparing"));
        await this.plugin.installWithPathPrompt((step, percent) => {
          b.setButtonText(percent != null ? `${step} ${percent}%` : step);
        });
        b.setDisabled(false);
        b.setButtonText(t("settings.install.btn"));
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.detect.title")).setDesc(t("settings.detect.desc")).addButton(
      (b) => b.setButtonText(t("settings.detect.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.detect.progress"));
        await this.plugin.detectAndApplyConfig();
        b.setDisabled(false);
        b.setButtonText(t("settings.detect.btn"));
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.installDir.title")).setDesc(t("settings.installDir.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.installDir).onChange(async (v) => {
        this.plugin.settings.installDir = v.trim();
        await this.plugin.saveSettings();
      })
    );
    const versionSetting = new import_obsidian.Setting(containerEl).setName(t("settings.version.title")).setDesc(t("settings.status.reading")).addButton(
      (b) => b.setButtonText(t("settings.version.check")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.version.checking"));
        await this.plugin.checkUpdates();
        b.setDisabled(false);
        b.setButtonText(t("settings.version.check"));
      })
    );
    versionSetting.descEl.empty();
    const renderVersion = (label) => {
      versionSetting.descEl.createEl("span", { text: label });
      const link = versionSetting.descEl.createEl("a", {
        cls: "dsh-changelog-link",
        text: t("settings.version.changelog"),
        href: "#"
      });
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.plugin.openInBrowser(this.plugin.getDshReleasesUrl());
      });
    };
    renderVersion(t("settings.status.reading"));
    void this.plugin.getDshVersion().then((v) => {
      versionSetting.descEl.empty();
      renderVersion(t("settings.version.current", { v }));
    });
    new import_obsidian.Setting(containerEl).setName(t("settings.autoUpdate.title")).setDesc(t("settings.autoUpdate.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.autoCheckUpdates).onChange(async (v) => {
        this.plugin.settings.autoCheckUpdates = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.zoom.title")).setDesc(t("settings.zoom.desc", { z: this.plugin.settings.zoom.toFixed(2) })).addSlider(
      (s) => s.setLimits(0.5, 2, 0.05).setValue(this.plugin.settings.zoom).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.zoom = v;
        await this.plugin.saveSettings();
        void ((_b = (_a = this.plugin).refreshView) == null ? void 0 : _b.call(_a));
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.section.quick")).setHeading();
    new import_obsidian.Setting(containerEl).setName(t("settings.reconnect.title")).setDesc(t("settings.reconnect.desc")).addButton(
      (b) => b.setButtonText(t("settings.reconnect.btn")).onClick(async () => {
        b.setDisabled(true);
        await this.plugin.reconnectDsh();
        b.setDisabled(false);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.browser.title")).setDesc(t("settings.browser.desc")).addButton(
      (b) => b.setButtonText(t("settings.browser.btn")).onClick(() => {
        this.plugin.openDshInBrowser();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.aed.title")).setDesc(t("settings.aed.desc")).addButton(
      (b) => b.setButtonText(t("settings.aed.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("aed.running"));
        const home = this.plugin.aedHomeDir();
        const result = await this.plugin.runAedRecovery(home);
        new import_obsidian.Notice(result.message, result.ok ? 8e3 : 12e3);
        b.setDisabled(false);
        b.setButtonText(t("settings.aed.btn"));
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.safeMode.title")).setDesc(t("settings.safeMode.desc")).addButton(
      (b) => b.setButtonText(t("settings.safeMode.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("aed.running"));
        const home = this.plugin.aedHomeDir();
        const result = await this.plugin.runAedSafe(home);
        new import_obsidian.Notice(result.message, result.ok ? 8e3 : 12e3);
        b.setDisabled(false);
        b.setButtonText(t("settings.safeMode.btn"));
      })
    ).addButton(
      (b) => b.setButtonText(t("settings.exitSafeMode.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("aed.running"));
        const home = this.plugin.aedHomeDir();
        const result = await this.plugin.runExitSafeMode(home);
        new import_obsidian.Notice(result.message, result.ok ? 8e3 : 12e3);
        b.setDisabled(false);
        b.setButtonText(t("settings.exitSafeMode.btn"));
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.bridge.restart.title")).setDesc(t("settings.bridge.restart.desc")).addButton(
      (b) => b.setButtonText(t("settings.bridge.restart.btn")).onClick(async () => {
        b.setDisabled(true);
        b.setButtonText(t("settings.bridge.restart.progress"));
        await this.plugin.restartDshService();
        b.setDisabled(false);
        b.setButtonText(t("settings.bridge.restart.btn"));
        void this.plugin.probeBridgeReady().then(() => refreshBridgeStatus());
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.section.send")).setHeading();
    const bridgeStatus = new import_obsidian.Setting(containerEl).setName(t("settings.bridge.status.title")).setDesc(t("settings.status.reading")).addButton(
      (b) => b.setButtonText(t("settings.bridge.rewrite.btn")).onClick(() => {
        const r = writeBridgeFiles();
        if (r.error) {
          new import_obsidian.Notice(t("settings.bridge.rewrite.fail", { err: r.error }), 8e3);
          return;
        }
        new import_obsidian.Notice(r.changed ? t("settings.bridge.rewrite.updated") : t("settings.bridge.rewrite.ready"), 6e3);
        refreshBridgeStatus();
      })
    );
    const refreshBridgeStatus = () => {
      const s = this.plugin.getBridgeStatus();
      bridgeStatus.descEl.textContent = s.installed ? s.ready ? t("settings.bridge.status.installedReady") : t("settings.bridge.status.installedNotReady") : t("settings.bridge.status.notInstalled");
    };
    refreshBridgeStatus();
    void this.plugin.probeBridgeReady().then(() => refreshBridgeStatus());
    new import_obsidian.Setting(containerEl).setName(t("settings.send.selectionBtn.title")).setDesc(t("settings.send.selectionBtn.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.selectionButton).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.selectionButton = v;
        await this.plugin.saveSettings();
        if (!v) {
          (_b = (_a = this.plugin).hideSelectionButton) == null ? void 0 : _b.call(_a);
        }
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.send.openPanel.title")).setDesc(t("settings.send.openPanel.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.openPanelOnSend).onChange(async (v) => {
        this.plugin.settings.openPanelOnSend = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.send.sourceTag.title")).setDesc(t("settings.send.sourceTag.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.addSourceTag).onChange(async (v) => {
        this.plugin.settings.addSourceTag = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.section.advanced")).setHeading();
    new import_obsidian.Setting(containerEl).setName(t("settings.port.title")).setDesc(t("settings.port.desc")).addText(
      (tEl) => tEl.setValue(String(this.plugin.settings.port)).onChange(async (v) => {
        var _a, _b;
        const n = Number(v);
        if (Number.isInteger(n) && n > 0 && n <= 65535) {
          this.plugin.settings.port = n;
          await this.plugin.saveSettings();
          (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
        }
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.command.title")).setDesc(startupCommandHint()).addText(
      (tEl) => tEl.setValue(this.plugin.settings.startupCommand).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.startupCommand = v.trim();
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.cwd.title")).setDesc(t("settings.cwd.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.startupCwd).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.startupCwd = v.trim();
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.autoStart.title")).setDesc(t("settings.autoStart.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.autoStart).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.autoStart = v;
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.detached.title")).setDesc(t("settings.detached.desc")).addToggle(
      (tEl) => tEl.setValue(this.plugin.settings.detached).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.detached = v;
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.readyTimeout.title")).setDesc(t("settings.readyTimeout.desc", { s: this.plugin.settings.readyTimeoutSec })).addSlider(
      (s) => s.setLimits(60, 600, 30).setValue(this.plugin.settings.readyTimeoutSec).onChange(async (v) => {
        var _a, _b;
        this.plugin.settings.readyTimeoutSec = v;
        await this.plugin.saveSettings();
        (_b = (_a = this.plugin).reconfigureService) == null ? void 0 : _b.call(_a);
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.installUrl.title")).setDesc(t("settings.installUrl.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.installUrl).onChange(async (v) => {
        this.plugin.settings.installUrl = v.trim() || DEFAULT_DSH_REPO_URL;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName(t("settings.updateMirror.title")).setDesc(t("settings.updateMirror.desc")).addText(
      (tEl) => tEl.setValue(this.plugin.settings.updateMirrorUrl).onChange(async (v) => {
        this.plugin.settings.updateMirrorUrl = v.trim();
        await this.plugin.saveSettings();
      })
    );
  }
};

// src/view.ts
var import_obsidian2 = require("obsidian");
var DSH_VIEW_TYPE = "dsh-harness-view";
var MONITOR_INTERVAL_MS = 4e3;
async function copyText(text, successNotice) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      new import_obsidian2.Notice(successNotice != null ? successNotice : t("view.copy.copied"));
      return;
    }
  } catch (e) {
  }
  try {
    const ta = (0, import_obsidian2.createEl)("textarea", { cls: "dsh-clipboard" });
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    new import_obsidian2.Notice(ok ? successNotice != null ? successNotice : t("view.copy.copied") : t("view.copy.failed"));
  } catch (e) {
    new import_obsidian2.Notice(t("view.copy.failed"));
  }
}
function humanize(message) {
  if (message.includes("\u672A\u627E\u5230 DSH \u4ED3\u5E93") || message.includes("DSH repo not found")) {
    return t("hz.notFound");
  }
  if (message.includes("\u65E0\u6CD5\u8FDE\u63A5 GitHub") || message.includes("Cannot reach GitHub")) {
    return t("hz.github");
  }
  if (message.includes("\u8FDB\u7A0B\u5DF2\u9000\u51FA") || message.includes("Process exited")) {
    return t("hz.exited");
  }
  if (message.includes("\u8D85\u65F6") || message.includes("Timed out")) {
    return t("hz.timeout");
  }
  if (message.includes("\u5DF2\u5173\u95ED\u81EA\u52A8\u542F\u52A8") || message.includes("auto-start is off")) {
    return t("hz.noAuto");
  }
  return message;
}
var DshView = class extends import_obsidian2.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    /** 运行期探活定时器：DSH 服务崩溃后自动切到错误视图（显示原因 + 重连）。 */
    this.monitorTimer = null;
    /** 当前渲染的 iframe（供插件发送 postMessage / 校验消息来源）。 */
    this.frame = null;
    /** 可见性监听回调：系统睡眠/失焦恢复后强制重渲染 iframe。 */
    this.onVisibilityChange = null;
  }
  /** 当前 iframe 元素（可能未渲染完成）。 */
  getFrame() {
    return this.frame;
  }
  getViewType() {
    return DSH_VIEW_TYPE;
  }
  getDisplayText() {
    return "DeepSeek Harness";
  }
  getIcon() {
    return "dsh-logo";
  }
  async onOpen() {
    this.addAction("refresh-cw", t("view.action.reconnect"), () => void this.refresh());
    this.addAction("external-link", t("view.action.openBrowser"), () => this.plugin.openDshInBrowser());
    this.onVisibilityChange = () => {
      if (document.visibilityState === "visible" && this.frame === null) {
        void this.refresh();
      }
    };
    document.addEventListener("visibilitychange", this.onVisibilityChange);
    await this.refresh();
  }
  // 新版 obsidian.d.ts（1.13.1）中 View.onClose 为 Promise<void>，须保持返回类型兼容
  onClose() {
    this.stopMonitor();
    if (this.onVisibilityChange !== null) {
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
      this.onVisibilityChange = null;
    }
    return Promise.resolve();
  }
  /** 停止运行期探活定时器。 */
  stopMonitor() {
    if (this.monitorTimer !== null) {
      window.clearInterval(this.monitorTimer);
      this.monitorTimer = null;
    }
  }
  /**
   * 启动运行期探活：面板在线时周期性 TCP 探测。
   * 服务中途崩溃/断开 → 切到「睡着了」视图；定时器保持运行，
   * 服务恢复在线后自动重渲染 iframe（无需手动点「唤醒干活」）。
   */
  startMonitor() {
    this.stopMonitor();
    this.monitorTimer = window.setInterval(() => {
      void this.plugin.service.probe().then((online) => {
        if (online) {
          if (this.frame === null) void this.refresh();
          return;
        }
        if (this.frame !== null) {
          this.renderAsleep(t("view.monitor.disconnected", { msg: this.plugin.service.describeOffline() }));
        }
      });
    }, MONITOR_INTERVAL_MS);
  }
  async refresh() {
    this.stopMonitor();
    this.frame = null;
    this.contentEl.empty();
    this.renderLoading();
    const state = await this.plugin.service.ensureOnline();
    if (state.kind === "online") {
      this.renderFrame();
      return;
    }
    if (!this.plugin.isDshInstalled()) {
      this.renderInstallPrompt();
      return;
    }
    this.renderAsleep(state.kind === "failed" ? state.message : "");
    this.startMonitor();
  }
  renderLoading() {
    this.contentEl.addClass("dsh-view");
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    box.createDiv({ cls: "dsh-spinner" });
    box.createEl("p", { text: t("view.loading.title") });
    box.createEl("p", { cls: "dsh-detail", text: t("view.loading.detail") });
  }
  renderFrame() {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    const zoom = this.plugin.settings.zoom;
    const wrapper = this.contentEl.createDiv({ cls: "dsh-zoom" });
    wrapper.style.width = `calc(100% / ${zoom})`;
    wrapper.style.height = `calc(100% / ${zoom})`;
    wrapper.style.transform = `scale(${zoom})`;
    const frame = wrapper.createEl("iframe", { cls: "dsh-frame" });
    frame.src = `http://127.0.0.1:${String(this.plugin.settings.port)}/`;
    frame.setAttribute("allow", "clipboard-read; clipboard-write");
    this.frame = frame;
    this.startMonitor();
  }
  /** 未安装 DSH 时的一键安装引导（含依赖检测与一键安装）。 */
  renderInstallPrompt() {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    box.createEl("h3", { text: t("view.install.title") });
    box.createEl("p", { text: t("view.install.desc") });
    const deps = checkDeps();
    const depBox = box.createDiv({ cls: "dsh-dep" });
    const mark = (ok) => ok ? t("view.install.mark.ok") : t("view.install.mark.missing");
    depBox.createEl("p", { text: `git\uFF1A${mark(deps.git)}` });
    depBox.createEl("p", { text: `Node.js\uFF1A${mark(deps.node)}` });
    depBox.createEl("p", { text: `pnpm\uFF1A${mark(deps.pnpm)}` });
    const btn = box.createEl("button", { cls: "dsh-cta", text: t("view.install.btn") });
    btn.addEventListener("click", () => void this.installAndRefresh(btn, setProgress));
    const progress = box.createDiv({ cls: "dsh-progress", attr: { style: "display:none" } });
    const bar = progress.createDiv({ cls: "dsh-progress-bar" });
    const progressText = progress.createDiv({ cls: "dsh-progress-text" });
    const setProgress = (percent, step) => {
      progress.show();
      bar.style.width = `${Math.max(0, Math.min(100, percent))}%`;
      progressText.textContent = step;
    };
    if (!deps.git || !deps.node || !deps.pnpm) {
      box.createEl("p", { cls: "dsh-detail", text: t("view.install.depsHint") });
      const miss = box.createDiv({ cls: "dsh-actions" });
      if (!deps.git) {
        const b = miss.createEl("button", { text: t("view.install.git") });
        b.addEventListener("click", () => void this.installDep("git", b));
      }
      if (!deps.node) {
        const b = miss.createEl("button", { text: t("view.install.node") });
        b.addEventListener("click", () => void this.installDep("node", b));
      }
      if (!deps.pnpm) {
        const b = miss.createEl("button", { text: t("view.install.pnpm") });
        b.addEventListener("click", () => void this.installDep("pnpm", b));
      }
    }
  }
  /** 一键安装缺失依赖并刷新依赖状态。 */
  async installDep(dep, btn) {
    var _a;
    btn.setAttribute("disabled", "");
    const orig = (_a = btn.textContent) != null ? _a : "";
    btn.textContent = t("view.install.installing");
    const r = await installDependency(dep);
    btn.removeAttribute("disabled");
    btn.textContent = orig;
    if (r.ok) {
      new import_obsidian2.Notice(t("view.install.done"), 8e3);
      this.renderInstallPrompt();
    } else {
      new import_obsidian2.Notice(r.message, 1e4);
    }
  }
  /** DSH 睡着了（等待重连）界面：插件名 + 状态说明 + 小提示 + 四按钮（唤醒干活 / AED / 问问AI / 更多设置）。 */
  renderAsleep(message) {
    this.contentEl.empty();
    this.contentEl.addClass("dsh-view");
    this.contentEl.removeClass("dsh-lang-zh");
    this.contentEl.removeClass("dsh-lang-en");
    this.contentEl.addClass("dsh-lang-" + getLocale());
    this.frame = null;
    const box = this.contentEl.createDiv({ cls: "dsh-status" });
    const main = box.createDiv({ cls: "dsh-asleep-main" });
    main.createDiv({ cls: "dsh-asleep-dot" });
    main.createEl("h2", { cls: "dsh-asleep-name", text: t("view.asleep.name") });
    main.createEl("p", { cls: "dsh-asleep-status", text: t("view.asleep.status") });
    const primary = main.createDiv({ cls: "dsh-actions dsh-asleep-primary" });
    const wake = primary.createEl("button", { cls: "dsh-cta", text: t("view.asleep.wake") });
    wake.addEventListener("click", () => void this.refresh());
    const secondary = main.createDiv({ cls: "dsh-actions dsh-asleep-secondary" });
    const aed = secondary.createEl("button", { text: t("view.asleep.aed") });
    aed.addEventListener("click", () => void this.runAed(buttonBox));
    const askAi = secondary.createEl("button", { text: t("view.asleep.askAi") });
    askAi.addEventListener("click", () => void this.askAiAboutError(message, ""));
    const more = secondary.createEl("button", { text: t("view.asleep.more") });
    more.addEventListener("click", () => {
      const settingApi = this.app.setting;
      settingApi.open();
      settingApi.openTabById("dsh-harness");
    });
    const buttonBox = main.createDiv({ cls: "dsh-asleep-aedbox" });
    box.createEl("p", { cls: "dsh-detail dsh-asleep-hint", text: t("view.asleep.hint") });
  }
  /** AED for DSH：确认后执行抢救流水线，显示进度。 */
  runAed(container) {
    container.empty();
    const box = container.createDiv({ cls: "dsh-asleep-aed" });
    for (const line of t("view.asleep.aedConfirm").split("\n")) {
      box.createEl("p", { cls: "dsh-detail", text: line });
    }
    const actions = box.createDiv({ cls: "dsh-actions" });
    const cancel = actions.createEl("button", { text: t("view.asleep.aedCancel") });
    cancel.addEventListener("click", () => box.remove());
    const confirm = actions.createEl("button", { cls: "dsh-cta", text: t("view.asleep.aedConfirmBtn") });
    confirm.addEventListener("click", () => {
      box.empty();
      const progress = box.createDiv({ cls: "dsh-progress" });
      const bar = progress.createDiv({ cls: "dsh-progress-bar" });
      const progressText = progress.createDiv({ cls: "dsh-progress-text" });
      const setProgress = (step, percent) => {
        progress.show();
        bar.style.width = `${Math.max(0, Math.min(100, percent != null ? percent : 0))}%`;
        progressText.textContent = step;
      };
      progress.hide();
      setProgress(t("aed.running"), 0);
      const home = this.plugin.aedHomeDir();
      void this.plugin.runAedRecovery(home, setProgress).then((result) => {
        progressText.textContent = result.message;
        if (result.ok) {
          new import_obsidian2.Notice(result.message, 8e3);
        } else {
          new import_obsidian2.Notice(result.message, 12e3);
        }
      });
    });
  }
  async askAiAboutError(message, cmdText) {
    const diag = t("diag.header") + "\n" + t("diag.error") + (message || humanize(message)) + "\n" + t("diag.hint") + humanize(message) + "\n" + t("diag.port") + String(this.plugin.settings.port) + "\n" + t("diag.cwd") + (this.plugin.settings.startupCwd || "\u2014") + "\n" + t("diag.command") + (cmdText.trim() !== "" ? cmdText : "\u2014");
    await copyText(diag, t("notice.askAiCopied"));
    this.plugin.openInBrowser("https://chat.deepseek.com/");
  }
  /** 一键安装：先询问安装路径（用户意向），确认后执行并刷新视图；setProgress 可选用于显示进度条。 */
  installAndRefresh(btn, setProgress) {
    btn.setAttribute("disabled", "");
    btn.textContent = t("view.install.preparing");
    const report = (step, percent) => {
      btn.textContent = percent != null ? `${step} ${percent}%` : step;
      if (setProgress && percent != null) {
        setProgress(percent, step);
      }
    };
    void this.plugin.installWithPathPrompt(report).then((ok) => {
      btn.removeAttribute("disabled");
      if (ok) {
        btn.textContent = t("view.install.starting");
        void this.refresh();
      } else {
        btn.textContent = t("view.install.btn");
      }
    });
  }
};

// src/updater.ts
var import_node_child_process4 = require("node:child_process");
var import_node_fs5 = require("node:fs");
var import_node_path4 = require("node:path");
function run2(exec, args, timeoutMs = 3e4) {
  return new Promise((resolve) => {
    exec("git", args, { timeout: timeoutMs, windowsHide: true }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: "", err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout).trim(), err: "" });
      }
    });
  });
}
async function getLocalDshVersion(repoDir, exec = import_node_child_process4.execFile) {
  try {
    const pkgPath = (0, import_node_path4.join)(repoDir, "package.json");
    if ((0, import_node_fs5.existsSync)(pkgPath)) {
      const pkg = JSON.parse((0, import_node_fs5.readFileSync)(pkgPath, "utf8"));
      if (typeof pkg.version === "string" && pkg.version.trim() !== "") {
        return pkg.version.trim();
      }
    }
  } catch (e) {
  }
  const r = await run2(exec, ["-C", repoDir, "rev-parse", "HEAD"]);
  return r.ok && r.out ? r.out.slice(0, 7) : t("up.unknown");
}
function extractTagVersion(line) {
  const m = /refs\/tags\/[^^]*?([0-9]+\.[0-9]+\.[0-9]+[\w.-]*)$/.exec(line);
  return m ? m[1] : null;
}
function parseVersion(v) {
  const m = /^(\d+)\.(\d+)\.(\d+)(?:-rc\.(\d+))?/.exec(v.trim());
  if (!m) return null;
  return { core: [Number(m[1]), Number(m[2]), Number(m[3])], rc: m[4] !== void 0 ? Number(m[4]) : Infinity };
}
function isStableVersion(v) {
  const p = parseVersion(v);
  return p !== null && p.rc === Infinity;
}
function compareVersions(a, b) {
  const pa = parseVersion(a);
  const pb = parseVersion(b);
  if (!pa || !pb) return a === b ? 0 : a < b ? -1 : 1;
  for (let i = 0; i < 3; i++) {
    if (pa.core[i] !== pb.core[i]) return pa.core[i] > pb.core[i] ? 1 : -1;
  }
  if (pa.rc !== pb.rc) return pa.rc > pb.rc ? 1 : -1;
  return 0;
}
function maxStableTagVersion(output) {
  let best = null;
  for (const line of output.split("\n")) {
    const v = extractTagVersion(line);
    if (v && isStableVersion(v) && (best === null || compareVersions(v, best) > 0)) best = v;
  }
  return best;
}
async function checkDshUpdates(repoDir, exec = import_node_child_process4.execFile, opts = {}) {
  var _a, _b;
  const pullCommand = `cd "${repoDir}" && git pull`;
  if (!repoDir || !(0, import_node_fs5.existsSync)((0, import_node_path4.join)(repoDir, ".git"))) {
    return {
      state: "error",
      message: t("up.noRepo"),
      pullCommand
    };
  }
  let localVersion = null;
  let localHash = "";
  try {
    const pkgPath = (0, import_node_path4.join)(repoDir, "package.json");
    if ((0, import_node_fs5.existsSync)(pkgPath)) {
      const pkg = JSON.parse((0, import_node_fs5.readFileSync)(pkgPath, "utf8"));
      if (typeof pkg.version === "string" && pkg.version.trim() !== "") localVersion = pkg.version.trim();
    }
  } catch (e) {
  }
  const local = await run2(exec, ["-C", repoDir, "rev-parse", "HEAD"]);
  if (local.ok && local.out) {
    localHash = local.out.trim();
  } else if (!localVersion) {
    return { state: "error", message: t("up.noLocal"), pullCommand };
  }
  let tags = await run2(exec, ["-C", repoDir, "ls-remote", "--tags", "origin"], 45e3);
  let mirrorTried = false;
  if ((!tags.ok || !tags.out) && opts.mirrorUrl) {
    mirrorTried = true;
    tags = await run2(exec, ["-C", repoDir, "ls-remote", "--tags", opts.mirrorUrl], 45e3);
  }
  if (!tags.ok) {
    const err = tags.err || t("err.unknown");
    return {
      state: "error",
      message: t("up.githubFail", { err }) + (mirrorTried ? t("up.mirrorFail", { err }) : ""),
      pullCommand
    };
  }
  const remoteVersion = maxStableTagVersion(tags.out);
  if (remoteVersion === null) {
    return {
      state: "up-to-date",
      message: t("up.stableOnly", { v: localVersion != null ? localVersion : localHash }),
      pullCommand
    };
  }
  if (localVersion && remoteVersion) {
    if (compareVersions(localVersion, remoteVersion) >= 0) {
      return { state: "up-to-date", message: t("up.latest", { v: localVersion }), pullCommand };
    }
    return {
      state: "behind",
      message: t("up.behindVer", { local: localVersion, remote: remoteVersion }),
      pullCommand
    };
  }
  let remote = await run2(exec, ["-C", repoDir, "ls-remote", "origin", "HEAD"], 45e3);
  if ((!remote.ok || !remote.out) && opts.mirrorUrl) {
    remote = await run2(exec, ["-C", repoDir, "ls-remote", opts.mirrorUrl, "HEAD"], 45e3);
  }
  if (!remote.ok || !remote.out) {
    const err = remote.err || t("err.unknown");
    return {
      state: "error",
      message: t("up.githubFail", { err }) + (mirrorTried ? t("up.mirrorFail", { err }) : ""),
      pullCommand
    };
  }
  const remoteShort = (_b = (_a = remote.out.split(/\s+/)[0]) == null ? void 0 : _a.slice(0, 7)) != null ? _b : "";
  if (localHash.slice(0, 7) === remoteShort) {
    return { state: "up-to-date", message: t("up.latest", { v: localHash.slice(0, 7) }), pullCommand };
  }
  return {
    state: "behind",
    message: t("up.behind", { local: localHash.slice(0, 7), remote: remoteShort }),
    pullCommand
  };
}
async function pullDshUpdates(repoDir, exec = import_node_child_process4.execFile, opts = {}) {
  let pull = await run2(exec, ["-C", repoDir, "pull", "--ff-only", "--quiet"]);
  let mirrorTried = false;
  if (!pull.ok && opts.mirrorUrl) {
    mirrorTried = true;
    pull = await run2(exec, ["-C", repoDir, "pull", "--ff-only", "--quiet", opts.mirrorUrl]);
  }
  if (pull.ok) {
    return {
      ok: true,
      message: t("up.done", { dir: repoDir })
    };
  }
  const ahead = await countLocalAhead(repoDir, exec);
  const diverged = ahead > 0;
  const err = pull.err || t("err.unknown");
  return {
    ok: false,
    message: (diverged ? t("up.diverged", { count: String(ahead) }) : t("up.fail", { err })) + (mirrorTried ? t("up.mirrorFail", { err }) : "")
  };
}
async function countLocalAhead(repoDir, exec) {
  const branch = await run2(exec, ["-C", repoDir, "rev-parse", "--abbrev-ref", "HEAD"]);
  if (!branch.ok || !branch.out || branch.out === "HEAD") return 0;
  const upstream = await run2(exec, ["-C", repoDir, "rev-parse", "--abbrev-ref", `${branch.out}@{upstream}`]);
  if (!upstream.ok || !upstream.out) return 0;
  const count = await run2(exec, ["-C", repoDir, "rev-list", "--count", `${upstream.out}..HEAD`]);
  if (!count.ok) return 0;
  const n = Number(count.out.trim());
  return Number.isFinite(n) && n > 0 ? n : 0;
}

// src/aed.ts
var import_node_child_process5 = require("node:child_process");
var import_node_fs6 = require("node:fs");
var import_node_path5 = require("node:path");
var CORE_BUNDLES = /* @__PURE__ */ new Set(["@deepseek-ai/dsh-base", "@deepseek-ai/dsh-web-app"]);
var BUNDLE_DISABLE_MARKER = "# dsh-harness: disabled bundle entry ";
var NPM_MIRROR = "https://registry.npmmirror.com";
function run3(exec, command, args, timeoutMs) {
  const resolved = resolveExec(process.platform, command, args);
  return new Promise((resolve) => {
    exec(resolved.command, resolved.args, { timeout: timeoutMs, windowsHide: true }, (err, stdout, stderr) => {
      if (err) {
        resolve({ ok: false, out: String(stdout != null ? stdout : "").trim(), err: String(stderr != null ? stderr : "").trim() });
      } else {
        resolve({ ok: true, out: String(stdout != null ? stdout : "").trim(), err: "" });
      }
    });
  });
}
function hasBin(name) {
  try {
    const probe = process.platform === "win32" ? "where" : "which";
    (0, import_node_child_process5.execFileSync)(probe, [name], { stdio: "ignore" });
    return true;
  } catch (e) {
    return false;
  }
}
function isDshFixInstalled() {
  return hasBin("dsh-fix");
}
function webProfileDir2(home) {
  return (0, import_node_path5.join)(home, "profiles", "web");
}
function bundleUserPlugins(home) {
  var _a, _b;
  try {
    const pkgPath = (0, import_node_path5.join)(webProfileDir2(home), "package.json");
    if (!(0, import_node_fs6.existsSync)(pkgPath)) return [];
    const pkg = JSON.parse((0, import_node_fs6.readFileSync)(pkgPath, "utf8"));
    const bundles = (_b = (_a = pkg.dsh) == null ? void 0 : _a.profile) == null ? void 0 : _b.bundles;
    if (!Array.isArray(bundles)) return [];
    return bundles.filter((b) => typeof b === "string" && !CORE_BUNDLES.has(b));
  } catch (e) {
    return [];
  }
}
function appendBundleDisableBlocks(home, plugins) {
  const dir = webProfileDir2(home);
  const patchPath = (0, import_node_path5.join)(dir, "cordis.patch.yml");
  if (!(0, import_node_fs6.existsSync)(patchPath) || plugins.length === 0) return;
  const existing = (0, import_node_fs6.readFileSync)(patchPath, "utf8");
  const missing = plugins.filter((id) => !existing.includes(BUNDLE_DISABLE_MARKER + JSON.stringify(id)));
  if (missing.length === 0) return;
  (0, import_node_fs6.copyFileSync)(patchPath, (0, import_node_path5.join)(dir, `cordis.patch.yml.bak-harness-${Date.now()}`));
  const stamp = (/* @__PURE__ */ new Date()).toISOString();
  const blocks = missing.map((id) => `${BUNDLE_DISABLE_MARKER}${JSON.stringify(id)} at ${stamp}
- id: ${JSON.stringify(id)}
  disabled: true`).join("\n");
  (0, import_node_fs6.writeFileSync)(patchPath, existing.trimEnd() + "\n\n" + blocks + "\n", "utf8");
}
function removeBundleDisableBlocks(home) {
  const patchPath = (0, import_node_path5.join)(webProfileDir2(home), "cordis.patch.yml");
  if (!(0, import_node_fs6.existsSync)(patchPath)) return;
  const lines = (0, import_node_fs6.readFileSync)(patchPath, "utf8").split("\n");
  const kept = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith(BUNDLE_DISABLE_MARKER)) {
      i += 3;
      continue;
    }
    kept.push(lines[i]);
    i++;
  }
  const out = kept.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  (0, import_node_fs6.writeFileSync)(patchPath, out, "utf8");
}
async function installDshFix(exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  step(t("aed.installFix"), 10);
  let r = await run3(exec, "npm", ["install", "-g", "dsh-fix", "--no-fund", "--no-audit"], 12e4);
  if (!r.ok) {
    step(t("aed.installFixMirror"), 30);
    r = await run3(exec, "npm", ["install", "-g", "dsh-fix", "--registry", NPM_MIRROR, "--no-fund", "--no-audit"], 12e4);
  }
  if (!r.ok) {
    return { ok: false, message: t("aed.installFixFail", { err: r.err || t("err.unknown") }) };
  }
  return { ok: true, message: t("aed.installFixDone") };
}
async function runAedSafe(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const homeArgs = home ? ["--home", home] : [];
  let useNpx = false;
  if (!isDshFixInstalled()) {
    step(t("aed.checkFix"), 5);
    const inst = await installDshFix(exec, step);
    if (!inst.ok) {
      useNpx = true;
      step(t("aed.fallbackNpx"), 8);
    }
  }
  step(t("aed.doctor"), 40);
  const doctor = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "doctor", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["doctor", ...homeArgs], 6e4);
  step(t("aed.safeMode"), 70);
  const safe = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "safe", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["safe", ...homeArgs], 6e4);
  if (!safe.ok) {
    return { ok: false, message: t("aed.safeFail", { err: safe.err || t("err.unknown") }) };
  }
  const bundles = bundleUserPlugins(home);
  if (bundles.length > 0) {
    step(t("aed.disableBundles"), 85);
    try {
      appendBundleDisableBlocks(home, bundles);
    } catch (err) {
      return { ok: false, message: t("aed.disableBundlesFail", { err: err instanceof Error ? err.message : String(err) }) };
    }
  }
  const doctorLine = doctor.ok && doctor.out ? doctor.out.split("\n").slice(0, 3).join(" ") : "";
  const bundleNote = bundles.length > 0 ? t("aed.safeBundles", { list: bundles.join("\u3001") }) : "";
  return {
    ok: true,
    message: t("aed.safeDone", { diag: doctorLine || t("aed.doctorNoDetail") }) + bundleNote
  };
}
async function exitSafeMode(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const homeArgs = home ? ["--home", home] : [];
  let useNpx = false;
  if (!isDshFixInstalled()) {
    step(t("aed.checkFix"), 10);
    const inst = await installDshFix(exec, step);
    if (!inst.ok) {
      useNpx = true;
      step(t("aed.fallbackNpx"), 15);
    }
  }
  step(t("aed.exitSafeMode"), 60);
  const clear = useNpx ? await run3(exec, "npx", ["--yes", "dsh-fix", "clear", ...homeArgs], 12e4) : await run3(exec, "dsh-fix", ["clear", ...homeArgs], 6e4);
  if (!clear.ok) {
    return { ok: false, message: t("aed.exitSafeFail", { err: clear.err || t("err.unknown") }) };
  }
  try {
    removeBundleDisableBlocks(home);
  } catch (err) {
    return { ok: false, message: t("aed.exitBundleFail", { err: err instanceof Error ? err.message : String(err) }) };
  }
  return { ok: true, message: t("aed.exitSafeDone") };
}
async function aedRecovery(home, exec = import_node_child_process5.execFile, onStep) {
  const step = onStep != null ? onStep : () => void 0;
  const safeRes = await runAedSafe(home, exec, step);
  if (!safeRes.ok) {
    return safeRes;
  }
  step(t("aed.done"), 100);
  return { ok: true, message: safeRes.message };
}

// src/dsh-api.ts
var import_node_http = require("node:http");
var DEFAULT_TIMEOUT_MS = 8e3;
function newRpcId() {
  try {
    const c = window.crypto;
    if (c == null ? void 0 : c.randomUUID) {
      return c.randomUUID();
    }
  } catch (e) {
  }
  return `rpc-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function httpPost(port, path, body) {
  return new Promise((resolve, reject) => {
    const req = (0, import_node_http.request)(
      {
        host: "127.0.0.1",
        port,
        path,
        method: "POST",
        headers: {
          "content-type": "application/json",
          "content-length": Buffer.byteLength(body)
        },
        timeout: DEFAULT_TIMEOUT_MS
      },
      (res) => {
        const chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          var _a;
          resolve({ status: (_a = res.statusCode) != null ? _a : 0, text: Buffer.concat(chunks).toString("utf8") });
        });
      }
    );
    req.on("timeout", () => {
      req.destroy(new Error(t("api.timeout", { ms: DEFAULT_TIMEOUT_MS })));
    });
    req.on("error", (err) => reject(err instanceof Error ? err : new Error(String(err))));
    req.end(body);
  });
}
var defaultTransport = { post: httpPost };
async function dshRequest(port, method, payload, transport = defaultTransport) {
  var _a, _b, _c, _d;
  const body = JSON.stringify({ type: "client-request", rpcId: newRpcId(), method, payload });
  let res;
  try {
    res = await transport.post(port, `/api/${method}`, body);
  } catch (err) {
    const e = err;
    if ((e == null ? void 0 : e.code) === "ECONNREFUSED") {
      return { ok: false, error: t("api.notRunning", { port }) };
    }
    return { ok: false, error: t("api.connectFail", { err: (_a = e == null ? void 0 : e.message) != null ? _a : String(err) }) };
  }
  if (res.status !== 200) {
    return { ok: false, error: t("api.httpStatus", { code: res.status }) };
  }
  try {
    const parsed = JSON.parse(res.text);
    if (parsed.type !== "server-response" || !parsed.result) {
      return { ok: false, error: t("api.badFormat") };
    }
    if (parsed.result.ok) {
      return { ok: true, value: parsed.result.value };
    }
    return {
      ok: false,
      error: (_c = (_b = parsed.result.error) == null ? void 0 : _b.message) != null ? _c : t("api.rejected"),
      code: (_d = parsed.result.error) == null ? void 0 : _d.code
    };
  } catch (e) {
    return { ok: false, error: t("api.unparsable") };
  }
}
function pickRecentSession(items) {
  var _a;
  const usable = items.find((item) => !item.blank);
  return (_a = usable == null ? void 0 : usable.sessionId) != null ? _a : null;
}
async function resolveTargetSession(port, transport = defaultTransport) {
  const list = await dshRequest(port, "session.list", {}, transport);
  if (!list.ok) {
    return list;
  }
  const existing = pickRecentSession(list.value.items);
  if (existing) {
    return { ok: true, value: existing };
  }
  const created = await dshRequest(port, "session.create", {}, transport);
  if (!created.ok) {
    return created;
  }
  return { ok: true, value: created.value.sessionId };
}
async function sendTextToSession(port, sessionId, text, transport = defaultTransport) {
  return dshRequest(
    port,
    "session.prompt",
    {
      sessionId,
      mode: "queue",
      content: [{ type: "text", text }]
    },
    transport
  );
}

// src/source-tag.ts
var import_node_path6 = require("node:path");
function buildSourceTag(filePath, vaultBasePath) {
  if (filePath === "") {
    return "";
  }
  const full = vaultBasePath === "" ? filePath : (0, import_node_path6.join)(vaultBasePath, filePath);
  return `[\u6765\u6E90\uFF1AObsidian \u7B14\u8BB0 ${full}]

`;
}

// src/icon.ts
var DSH_LOGO_SVG = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path transform="translate(1.5726 2.9422) scale(0.7805)" d="M26.5174 3.39471C26.235 3.2567 26.1137 3.52006 25.9487 3.65346C25.8923 3.69659 25.8446 3.75294 25.7969 3.80469C25.3846 4.24516 24.9027 4.53439 24.2737 4.49989C23.3536 4.44814 22.5682 4.73737 21.8735 5.44119C21.7258 4.57349 21.2353 4.0554 20.4889 3.72304C20.0985 3.55054 19.7034 3.37746 19.4297 3.00197C19.2388 2.73459 19.1865 2.43673 19.091 2.14289C19.0301 1.96579 18.9697 1.78466 18.7656 1.75418C18.5442 1.71968 18.4574 1.90541 18.3705 2.06067C18.0232 2.69549 17.8887 3.39471 17.9019 4.10313C17.9324 5.6965 18.6051 6.96556 19.9421 7.86834C20.0939 7.97184 20.133 8.07535 20.0852 8.22658C19.9938 8.53766 19.8857 8.83955 19.7903 9.15063C19.7293 9.34901 19.6384 9.39271 19.4257 9.30588C18.692 8.9994 18.0583 8.54571 17.4982 7.99772C16.5477 7.07827 15.6881 6.06336 14.6162 5.26869C14.3644 5.08296 14.1125 4.91045 13.8521 4.746C12.7584 3.68394 13.9952 2.81164 14.2816 2.70814C14.5812 2.60003 14.3857 2.22857 13.4179 2.23317C12.4502 2.2372 11.5646 2.56151 10.4359 2.99335C10.2708 3.05832 10.0972 3.10547 9.91951 3.14457C8.8954 2.95022 7.83162 2.90709 6.72069 3.03245C4.62877 3.26533 2.95777 4.25436 1.72954 5.94261C0.254043 7.97184 -0.0932678 10.2777 0.33167 12.6824C0.778458 15.2171 2.07225 17.3153 4.06008 18.9558C6.12152 20.6567 8.49577 21.4905 11.2047 21.3306C12.8498 21.2358 14.6812 21.0155 16.7473 19.2669C17.2682 19.5262 17.8151 19.6297 18.7219 19.7074C19.4205 19.7723 20.0933 19.6729 20.6143 19.5648C21.4302 19.3923 21.3739 18.6367 21.0789 18.4981C18.6874 17.3843 19.2124 17.8374 18.7351 17.4706C19.9501 16.033 21.8063 13.4776 22.379 9.99821C22.4353 9.61409 22.5072 9.073 22.4986 8.76192C22.494 8.57216 22.5377 8.49856 22.7545 8.47671C23.3536 8.40771 23.935 8.24383 24.4692 7.94999C26.0188 7.10357 26.6439 5.71318 26.7911 4.04678C26.8129 3.79204 26.7865 3.52869 26.5174 3.39471ZM13.0143 18.3946C10.6964 16.5724 9.5722 15.9726 9.10816 15.9985C8.67402 16.0244 8.75222 16.5212 8.84768 16.8449C8.94773 17.1646 9.07768 17.3849 9.25996 17.6655C9.38589 17.8512 9.47272 18.1272 9.13404 18.3348C8.38766 18.7965 7.08985 18.1796 7.0289 18.1491C5.51833 17.2595 4.25559 16.0853 3.36546 14.4793C2.50581 12.9337 2.0067 11.2753 1.92447 9.50542C1.90262 9.07818 2.02855 8.92695 2.45406 8.84932C3.01413 8.74582 3.59144 8.72397 4.15093 8.80619C6.51656 9.15178 8.53027 10.2092 10.2185 11.8848C11.1822 12.8388 11.9114 13.979 12.6623 15.0929C13.461 16.2757 14.3201 17.4027 15.4144 18.3268C15.8008 18.6505 16.109 18.8966 16.404 19.0783C15.5144 19.1778 14.0297 19.1991 13.0143 18.3958V18.3946ZM14.1252 11.2489C14.1252 11.0591 14.277 10.9079 14.4679 10.9079C14.511 10.9079 14.5501 10.9165 14.5852 10.9292C14.6329 10.9464 14.6766 10.9723 14.7111 11.0114C14.7721 11.0718 14.8066 11.158 14.8066 11.2489C14.8066 11.4386 14.6548 11.5899 14.4639 11.5899C14.273 11.5899 14.1252 11.4386 14.1252 11.2489ZM17.5759 13.0188C17.3545 13.1096 17.1331 13.1873 16.9203 13.1959C16.5903 13.2131 16.2303 13.0791 16.0348 12.9153C15.7312 12.6605 15.5139 12.5179 15.423 12.0734C15.3839 11.8837 15.4057 11.5899 15.4402 11.4214C15.5185 11.0585 15.4316 10.8257 15.1757 10.614C14.9676 10.4415 14.7025 10.3938 14.4115 10.3938C14.3029 10.3938 14.2034 10.3461 14.1292 10.3076C14.0079 10.2472 13.9078 10.096 14.0033 9.91023C14.0338 9.84985 14.1815 9.70322 14.216 9.67734C14.6111 9.45251 15.0665 9.52612 15.488 9.6946C15.8784 9.85445 16.174 10.1477 16.5989 10.5623C17.033 11.0631 17.1112 11.2011 17.3585 11.5772C17.554 11.871 17.7317 12.1729 17.8536 12.5185C17.9272 12.7341 17.8317 12.9107 17.5759 13.0188Z"/></svg>';

// src/main.ts
var ConfirmModal = class extends import_obsidian3.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: this.opts.title });
    contentEl.createEl("p", { text: this.opts.body });
    const s = new import_obsidian3.Setting(contentEl);
    s.addButton((b) => b.setButtonText(t("modal.cancel")).onClick(() => this.close()));
    if (this.opts.viewLink) {
      s.addButton(
        (b) => b.setButtonText(this.opts.viewLink.text).onClick(() => void window.open(this.opts.viewLink.url, "_blank"))
      );
    }
    s.addButton((b) => b.setButtonText(this.opts.confirmText).setCta().onClick(async () => {
      this.close();
      await this.opts.onConfirm();
    }));
  }
  onClose() {
    this.contentEl.empty();
  }
};
var InstallPathModal = class extends import_obsidian3.Modal {
  constructor(app, opts) {
    super(app);
    this.opts = opts;
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h3", { text: this.opts.title });
    contentEl.createEl("p", { text: t("modal.installDesc") });
    const input = contentEl.createEl("input", { type: "text", value: this.opts.defaultPath, cls: "dsh-path-input" });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.close();
        this.opts.onConfirm(input.value);
      }
    });
    new import_obsidian3.Setting(contentEl).addButton(
      (b) => b.setButtonText(t("modal.cancel")).onClick(() => {
        this.close();
        this.opts.onCancel();
      })
    ).addButton(
      (b) => b.setButtonText(t("modal.installStart")).setCta().onClick(() => {
        this.close();
        this.opts.onConfirm(input.value);
      })
    );
  }
  onClose() {
    this.contentEl.empty();
  }
};
var DshHarnessPlugin = class extends import_obsidian3.Plugin {
  constructor() {
    super(...arguments);
    this.settings = DEFAULT_SETTINGS;
    /** 框选文字后的「发送到 DSH」浮动按钮。 */
    this.selectionBtn = null;
    /** 最近一次刷新时的选区文本（避免 selectionchange 高频事件下重复定位）。 */
    this.lastSelectionText = "";
    /** 当前待发送的选区文本（按钮点击时读取，防止选区变化后按钮文本过期）。 */
    this.pendingSendText = "";
    /** DSH 前端桥接是否已就绪（注入脚本回报 ready 后置真）。 */
    this.bridgeReady = false;
  }
  async onload() {
    await this.loadSettings();
    applyLocale(this.settings.language, this.settings.language === "auto" ? this.detectSystemLanguage() : void 0);
    this.buildService();
    (0, import_obsidian3.addIcon)("dsh-logo", DSH_LOGO_SVG);
    this.registerView(DSH_VIEW_TYPE, (leaf) => new DshView(leaf, this));
    this.addRibbonIcon("dsh-logo", t("cmd.ribbon"), () => void this.openView());
    this.addCommand({
      id: "open-dsh",
      name: t("cmd.openPanel"),
      callback: () => void this.openView()
    });
    this.addCommand({
      id: "send-selection-to-dsh",
      name: t("cmd.sendSelection"),
      editorCallback: (editor) => void this.sendSelectionToDsh(editor.getSelection())
    });
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, editor) => {
        menu.addItem(
          (item) => item.setTitle(t("menu.sendSelection")).setIcon("send").onClick(() => void this.sendSelectionToDsh(editor.getSelection()))
        );
      })
    );
    const onSelectionEvent = () => this.onSelectionEvent(true);
    this.registerDomEvent(document, "mouseup", onSelectionEvent);
    this.registerDomEvent(document, "keyup", onSelectionEvent);
    this.registerDomEvent(document, "selectionchange", () => this.onSelectionEvent(false));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.onSelectionEvent(true)));
    this.registerDomEvent(window, "message", (event) => {
      var _a;
      const frame = this.currentFrame();
      if (!frame || event.source !== frame.contentWindow) {
        return;
      }
      const data = (_a = event.data) != null ? _a : {};
      if (data.type === "dsh-bridge-ready") {
        this.bridgeReady = true;
        this.postToFrame(frame, { type: "dsh-open-cfg", vaultRoot: this.vaultRoot() });
      }
      if (data.type === "dsh-open-in-obsidian" && typeof data.path === "string" && data.path !== "") {
        this.openInBrowser(`obsidian://open?path=${encodeURIComponent(data.path)}`);
      }
    });
    this.addSettingTab(new DshSettingTab(this.app, this));
    void this.installBridge();
    this.ensureNoOpenAdaptive();
  }
  /** 写入桥接文件；变更时提示需重启 DSH 服务生效。 */
  installBridge() {
    const result = writeBridgeFiles();
    if (result.error) {
      console.warn("[dsh-harness] \u6865\u63A5\u5B89\u88C5\u5931\u8D25:", result.error);
      return;
    }
    if (result.changed) {
      new import_obsidian3.Notice(t("notice.bridgeInstalled"), 1e4);
    }
  }
  /** 依据当前设置构造 ServiceManager。 */
  buildService() {
    var _a, _b, _c;
    const basePath = (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
    const startupCommand = this.settings.startupCommand || detectStartupCommand() || "pnpm dsh web --port {port}";
    const startupCwd = this.settings.startupCwd || basePath;
    this.service = new DshServiceManager({
      port: this.settings.port,
      startupCommand,
      startupCwd,
      autoStart: this.settings.autoStart,
      detached: this.settings.detached,
      readyTimeoutMs: this.settings.readyTimeoutSec * 1e3
    });
  }
  /**
   * DSH 版本自适应（后台、非阻塞）：`dsh web --help` 实测约 8 秒，放到定时器里异步执行；
   * 若当前 dsh 不支持 `--no-open` 而启动命令仍含该 flag，自动移除并保存（避免 unknown option 启动失败）。
   * 探测结果在 service-manager 内缓存，后续 `dshSupportsNoOpen()` 直接命中缓存、零开销。
   */
  ensureNoOpenAdaptive() {
    window.setTimeout(() => {
      probeNoOpenSupportAsync((supported) => {
        if (supported) return;
        const cmd = this.settings.startupCommand || "";
        if (cmd.includes("--no-open")) {
          const cleaned = cmd.replace(/\s*--no-open\b/g, "").trim();
          this.settings.startupCommand = cleaned;
          void this.saveSettings();
          new import_obsidian3.Notice(t("notice.noOpenRemoved"), 8e3);
        }
      });
    }, 500);
  }
  /** 设置变更后重建 ServiceManager，使新配置立即生效。 */
  reconfigureService() {
    var _a;
    (_a = this.service) == null ? void 0 : _a.dispose();
    this.buildService();
  }
  onunload() {
    var _a;
    this.hideSelectionButton();
    (_a = this.service) == null ? void 0 : _a.dispose();
  }
  async openView() {
    const existing = this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE);
    if (existing.length > 0) {
      await this.app.workspace.revealLeaf(existing[0]);
    } else {
      const leaf = this.app.workspace.getRightLeaf(false);
      if (!leaf) return;
      await leaf.setViewState({ type: DSH_VIEW_TYPE, active: true });
      await this.app.workspace.revealLeaf(leaf);
    }
    void this.checkUpdatesOnOpen();
  }
  /** 刷新已打开的面板视图（用于设置变更后重载界面）。 */
  async refreshView() {
    for (const leaf of this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE)) {
      const view = leaf.view;
      if (view instanceof DshView) {
        await view.refresh();
      }
    }
  }
  /** 一键检测本机 DSH 并应用启动配置。 */
  async detectAndApplyConfig() {
    const result = detectDshConfig({ cwd: this.settings.startupCwd });
    if (result.found) {
      this.settings.startupCommand = result.startupCommand;
      this.settings.startupCwd = result.startupCwd;
      await this.saveSettings();
      this.reconfigureService();
      new import_obsidian3.Notice(result.message);
    } else {
      new import_obsidian3.Notice(result.message, 8e3);
    }
  }
  /** 用系统默认浏览器打开任意 URL（electron shell.openExternal，失败降级新标签页）。 */
  openInBrowser(url) {
    try {
      const requireFn = window.require;
      if (requireFn) {
        const electron = requireFn("electron");
        if (electron.shell) {
          void electron.shell.openExternal(url);
          return;
        }
      }
    } catch (e) {
    }
    window.open(url, "_blank");
  }
  /** 在系统默认浏览器中打开 DSH Web GUI。 */
  openDshInBrowser() {
    this.openInBrowser(`http://127.0.0.1:${String(this.settings.port)}/`);
  }
  /** 重连 DSH 服务：刷新所有已打开面板（重新探活并渲染）。 */
  async reconnectDsh() {
    await this.refreshView();
    const online = this.isDshInstalled() ? await this.service.probe() : false;
    new import_obsidian3.Notice(online ? t("notice.reconnected") : t("notice.notRunning"), 6e3);
  }
  // ---- 框选文字发送到 DSH（Claudian 式交互：选中 → 发送 → 智能体自动处理）----
  /**
   * 选区事件统一入口：读取活动编辑器的选中文字，有则显示浮动按钮（必要时重定位），
   * 无则隐藏。Obsidian 1.7.x 无选区工作区事件，由 document 级 mouseup/keyup/selectionchange 驱动。
   * @param reposition - 是否强制重定位（鼠标/键盘事件传 true；selectionchange 仅在文本变化时重定位）
   */
  onSelectionEvent(reposition) {
    var _a;
    if (!this.settings.selectionButton) {
      this.hideSelectionButton();
      return;
    }
    const view = this.app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
    const editor = view == null ? void 0 : view.editor;
    const text = (_a = editor == null ? void 0 : editor.getSelection().trim()) != null ? _a : "";
    if (text === "") {
      if (this.selectionBtn) {
        this.hideSelectionButton();
      }
      return;
    }
    const changed = text !== this.lastSelectionText;
    this.lastSelectionText = text;
    this.pendingSendText = text;
    if (!this.selectionBtn) {
      const btn = (0, import_obsidian3.createEl)("button", { cls: "dsh-send-btn", text: t("floating.send") });
      btn.addEventListener("click", () => {
        const send = this.pendingSendText;
        this.hideSelectionButton();
        void this.sendSelectionToDsh(send);
      });
      document.body.appendChild(btn);
      this.selectionBtn = btn;
    }
    if ((changed || reposition) && editor) {
      this.positionSelectionButton(editor);
    }
  }
  /** 将浮动按钮定位到选区起点附近；定位失败时靠编辑器右上角。 */
  positionSelectionButton(editor) {
    var _a;
    if (!this.selectionBtn) {
      return;
    }
    try {
      const editorEl = editor.containerEl;
      if (!editorEl) {
        return;
      }
      const rect = editorEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return;
      }
      let left = rect.right - 8;
      let top = rect.top + 8;
      const runtime = editor;
      const coords = (_a = runtime.coordsAtPos) == null ? void 0 : _a.call(runtime, editor.getCursor("from"));
      if (coords) {
        left = rect.left + coords.left;
        top = rect.top + coords.top - 8;
      }
      this.selectionBtn.style.left = `${Math.round(left)}px`;
      this.selectionBtn.style.top = `${Math.round(top)}px`;
    } catch (e) {
    }
  }
  /** 隐藏并移除浮动按钮。 */
  hideSelectionButton() {
    var _a;
    (_a = this.selectionBtn) == null ? void 0 : _a.remove();
    this.selectionBtn = null;
    this.lastSelectionText = "";
    this.pendingSendText = "";
  }
  /** 当前笔记的来源标签（设置开启时附加）。 */
  sourceTag() {
    var _a, _b, _c;
    try {
      const file = this.app.workspace.getActiveFile();
      if (!file) {
        return "";
      }
      const base = (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
      return buildSourceTag(file.path, base);
    } catch (e) {
      return "";
    }
  }
  /**
   * 把选中文字送进 DSH：桥接就绪时填入输入框（可编辑后手动发送，不自动发送）；
   * 桥接未就绪时降级为直接发送（现状行为）。可选附带来源路径标签。
   */
  /**
   * 把选中文字送进 DSH：桥接就绪时填入输入框（可编辑后手动发送，不自动发送）；
   * 桥接未就绪时降级为直接发送（现状行为）。可选附带来源路径标签。
   * @param opts.noSourceTag - 为 true 时跳过来源标签（如自动发送报错诊断，与当前笔记无关）
   */
  async sendSelectionToDsh(raw, opts) {
    const text = raw.trim();
    if (text === "") {
      new import_obsidian3.Notice(t("notice.selectFirst"));
      return;
    }
    const tagged = this.settings.addSourceTag && !(opts == null ? void 0 : opts.noSourceTag) ? this.sourceTag() + text : text;
    const online = await this.service.probe();
    if (!online) {
      new import_obsidian3.Notice(t("notice.startingPanel"), 6e3);
      await this.openView();
      return;
    }
    await this.openView();
    const frame = this.currentFrame();
    if (frame && await this.ensureBridgeReady(frame)) {
      this.postToFrame(frame, { type: "dsh-fill-draft", text: tagged });
      new import_obsidian3.Notice(t("notice.filled"), 6e3);
      return;
    }
    if (isBridgeInstalled() && await this.reloadPanelAndWaitForBridge()) {
      const frame2 = this.currentFrame();
      if (frame2) {
        this.postToFrame(frame2, { type: "dsh-fill-draft", text: tagged });
        new import_obsidian3.Notice(t("notice.filled"), 6e3);
        return;
      }
    }
    const target = await resolveTargetSession(this.settings.port);
    if (!target.ok) {
      new import_obsidian3.Notice(t("notice.sendFailed", { err: target.error }), 8e3);
      return;
    }
    const sent = await sendTextToSession(this.settings.port, target.value, tagged);
    if (!sent.ok) {
      new import_obsidian3.Notice(t("notice.sendFailed", { err: sent.error }), 8e3);
      return;
    }
    new import_obsidian3.Notice(t("notice.bridgeFallback"), 8e3);
    if (this.settings.openPanelOnSend) {
      await this.openView();
    }
  }
  /** 当前 DSH 面板的 iframe（若面板打开且已渲染）。 */
  currentFrame() {
    for (const leaf of this.app.workspace.getLeavesOfType(DSH_VIEW_TYPE)) {
      const view = leaf.view;
      if (view instanceof DshView) {
        const frame = view.getFrame();
        if (frame) {
          return frame;
        }
      }
    }
    return null;
  }
  /** 向面板 iframe 发送消息（限定 targetOrigin 为本机 DSH 端口）。 */
  postToFrame(frame, payload) {
    const win = frame.contentWindow;
    if (!win) {
      return;
    }
    try {
      win.postMessage(payload, `http://127.0.0.1:${String(this.settings.port)}`);
    } catch (e) {
    }
  }
  /** 等待桥接就绪：先 ping，收到 ready 或超时返回。 */
  async ensureBridgeReady(frame, timeoutMs = 1500) {
    if (this.bridgeReady) {
      return true;
    }
    this.bridgeReady = false;
    this.postToFrame(frame, { type: "dsh-bridge-ping" });
    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline && !this.bridgeReady) {
      await new Promise((resolve) => window.setTimeout(resolve, 100));
    }
    return this.bridgeReady;
  }
  /** 桥接未就绪时重建面板 iframe（加载带桥接脚本的新页面）并轮询等待握手就绪。 */
  async reloadPanelAndWaitForBridge(totalMs = 6e3) {
    await this.refreshView();
    const deadline = Date.now() + totalMs;
    while (Date.now() < deadline) {
      const frame = this.currentFrame();
      if (frame && await this.ensureBridgeReady(frame, 800)) {
        return true;
      }
      await new Promise((resolve) => window.setTimeout(resolve, 400));
    }
    return false;
  }
  /** 桥接状态摘要（设置页展示用）。 */
  getBridgeStatus() {
    return {
      installed: isBridgeInstalled(),
      ready: this.bridgeReady
    };
  }
  /** 主动探测桥接是否已加载（设置页展示用）：向面板发 ping 并短暂等待 ready。 */
  async probeBridgeReady() {
    const frame = this.currentFrame();
    if (!frame) {
      return false;
    }
    return this.ensureBridgeReady(frame, 800);
  }
  /** DSH 主目录（传给 AED 工具的 $DSH_HOME 定位）。 */
  aedHomeDir() {
    var _a;
    return ((_a = process.env.DSH_HOME) != null ? _a : "").trim() || (0, import_node_path7.join)((0, import_node_os4.homedir)(), ".dsh");
  }
  /** 仅以安全模式启动（dsh-fix safe）；成功后重启 DSH。 */
  async runAedSafe(home) {
    var _a;
    const result = await runAedSafe(home);
    if (result.ok) {
      new import_obsidian3.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 退出安全模式（dsh-fix clear 恢复用户插件），成功后重启 DSH。 */
  async runExitSafeMode(home) {
    var _a;
    const result = await exitSafeMode(home);
    if (result.ok) {
      new import_obsidian3.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 执行 AED 抢救流水线（dsh-fix 安全模式），成功后重启 DSH。 */
  async runAedRecovery(home, onStep) {
    var _a;
    const result = await aedRecovery(home, void 0, onStep);
    if (result.ok) {
      new import_obsidian3.Notice(t("notice.restarting"), 6e3);
      this.killPortProcess();
      (_a = this.service) == null ? void 0 : _a.dispose();
      this.buildService();
      const state = await this.service.ensureOnline();
      await this.refreshView();
      if (state.kind === "online") {
        return { ok: true, message: result.message + " " + t("notice.restarted") };
      }
      return { ok: false, message: result.message + " " + t("notice.restartFailed", { msg: state.message }) };
    }
    return result;
  }
  /** 重启 DSH 服务（结束占用端口的进程——含常驻进程——后重新启动），用于加载桥接补丁。 */
  async restartDshService() {
    var _a;
    new import_obsidian3.Notice(t("notice.restarting"), 6e3);
    this.killPortProcess();
    (_a = this.service) == null ? void 0 : _a.dispose();
    this.buildService();
    const state = await this.service.ensureOnline();
    new import_obsidian3.Notice(
      state.kind === "online" ? t("notice.restarted") : t("notice.restartFailed", { msg: state.message }),
      state.kind === "online" ? 6e3 : 1e4
    );
  }
  /** 结束监听 DSH 端口的进程（netstat/lsof 找 PID 后终止）。 */
  killPortProcess() {
    try {
      if (process.platform === "win32") {
        const out = (0, import_node_child_process6.execFileSync)("netstat", ["-ano"], { encoding: "utf8" });
        const pids = /* @__PURE__ */ new Set();
        for (const line of out.split(/\r?\n/)) {
          if (line.includes(`:${String(this.settings.port)}`) && line.toUpperCase().includes("LISTENING")) {
            const parts = line.trim().split(/\s+/);
            const pid = parts[parts.length - 1];
            if (pid && pid !== "0") {
              pids.add(pid);
            }
          }
        }
        for (const pid of pids) {
          try {
            (0, import_node_child_process6.execFileSync)("taskkill", ["/F", "/PID", pid], { stdio: "ignore" });
          } catch (e) {
          }
        }
      } else {
        const out = (0, import_node_child_process6.execFileSync)("lsof", ["-ti", `:${String(this.settings.port)}`], { encoding: "utf8" });
        for (const pid of out.split(/\s+/).filter(Boolean)) {
          try {
            process.kill(Number(pid), "SIGTERM");
          } catch (e) {
          }
        }
      }
    } catch (e) {
    }
  }
  /** 一键安装 DSH 本体到指定目录并自动配置启动项；onStep 回调安装进度（step + 可选 percent）；返回是否成功。 */
  async installAndConfigure(dir, onStep) {
    new import_obsidian3.Notice(t("notice.installing"));
    const r = await installDsh(dir, {
      cloneUrl: this.settings.installUrl || DEFAULT_DSH_REPO_URL,
      onStep
    });
    if (r.ok && r.dir) {
      this.settings.installDir = r.dir;
      this.settings.startupCwd = r.dir;
      this.settings.startupCommand = "pnpm dsh web --port {port}";
      await this.saveSettings();
      this.reconfigureService();
      new import_obsidian3.Notice(r.message, 8e3);
      return true;
    }
    new import_obsidian3.Notice(r.message, 1e4);
    return false;
  }
  /** 一键安装：先询问用户意向的安装路径（默认已检测目录/当前设置/用户目录），确认后执行。 */
  async installWithPathPrompt(onStep) {
    const detected = locateDshRepoDir(defaultCandidates(this.settings.startupCwd));
    const def = this.settings.installDir || detected || (0, import_node_path7.join)((0, import_node_os4.homedir)(), "deepseek-harness");
    return new Promise((resolve) => {
      new InstallPathModal(this.app, {
        title: t("modal.installTitle"),
        defaultPath: def,
        onConfirm: (dir) => {
          const d = dir.trim();
          if (!d) {
            new import_obsidian3.Notice(t("notice.installDirEmpty"), 6e3);
            resolve(false);
            return;
          }
          this.settings.installDir = d;
          void this.saveSettings().then(() => {
            void this.installAndConfigure(d, onStep).then(resolve);
          });
        },
        onCancel: () => resolve(false)
      }).open();
    });
  }
  /** DSH 是否已安装（PATH 有 dsh 或检测到仓库目录）。 */
  isDshInstalled() {
    if (detectStartupCommand()) {
      return true;
    }
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os4.homedir)());
    return locateDshRepoDir(candidates) !== null;
  }
  /** DSH 状态摘要（设置页横幅/面板提示用）。 */
  async getDshStatus() {
    var _a;
    const installed = this.isDshInstalled();
    const online = installed ? await this.service.probe() : false;
    let version = t("up.unknown");
    if (installed) {
      const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os4.homedir)());
      const dir = (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
      if (dir) version = await getLocalDshVersion(dir);
    }
    return { installed, version, online };
  }
  /** 读取当前 DSH 版本（本地 HEAD 短哈希）。 */
  async getDshVersion() {
    var _a;
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os4.homedir)());
    const dir = (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
    if (!dir) return t("up.unknown");
    return getLocalDshVersion(dir);
  }
  /** 检查 DSH 仓库更新；发现新版本时询问用户是否更新。 */
  async checkUpdates() {
    var _a;
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os4.homedir)());
    const dir = (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
    const result = await checkDshUpdates(dir, void 0, { mirrorUrl: this.updateMirrorUrl() });
    if (result.state === "behind") {
      this.askUpdate(dir, result);
    } else {
      new import_obsidian3.Notice(result.message, 8e3);
    }
  }
  /** 打开面板/启动服务时自动检测更新：仅当设置开启且发现新版本才弹窗提示（保持静默，避免每次打开都打扰）。 */
  async checkUpdatesOnOpen() {
    var _a;
    if (!this.settings.autoCheckUpdates) return;
    if (!this.isDshInstalled()) return;
    const candidates = defaultCandidates(this.settings.startupCwd, (0, import_node_os4.homedir)());
    const dir = (_a = locateDshRepoDir(candidates)) != null ? _a : this.settings.startupCwd;
    if (!dir) return;
    const result = await checkDshUpdates(dir, void 0, { mirrorUrl: this.updateMirrorUrl() });
    if (result.state === "behind") {
      this.askUpdate(dir, result);
    }
  }
  /** 弹出确认对话框，用户确认后执行 git pull --ff-only（官方源失败自动走只读镜像）；提供查看 GitHub 更新内容链接。 */
  askUpdate(repoDir, info) {
    new ConfirmModal(this.app, {
      title: t("modal.updateTitle"),
      body: t("modal.updateBody", { msg: info.message }),
      confirmText: t("modal.updateConfirm"),
      viewLink: { text: t("modal.updateViewChanges"), url: this.getDshReleasesUrl() },
      onConfirm: async () => {
        new import_obsidian3.Notice(t("notice.updating"), 6e3);
        const r = await pullDshUpdates(repoDir, void 0, { mirrorUrl: this.updateMirrorUrl() });
        const hint = r.ok && this.startupUsesGlobalCli() ? " " + t("up.repoOnlyHint") : "";
        new import_obsidian3.Notice(r.message + hint, r.ok ? 6e3 : 1e4);
      }
    }).open();
  }
  /** 启动命令是否走全局 CLI（而非仓库 pnpm/npm 源码）：决定「仓库更新 ≠ 运行版本更新」提示。 */
  startupUsesGlobalCli() {
    const cmd = (this.settings.startupCommand || detectStartupCommand()).trim().toLowerCase();
    return cmd.startsWith("dsh");
  }
  /** DSH GitHub releases 页面地址（供「查看更新内容/更新日志」使用）。 */
  getDshReleasesUrl() {
    const base = this.settings.installUrl || DEFAULT_DSH_REPO_URL;
    return base.replace(/\.git$/, "") + "/releases";
  }
  /** 更新用的只读镜像：设置项优先；留空时若安装地址来自 github.com 则自动包成 gh-proxy 镜像。 */
  updateMirrorUrl() {
    const configured = this.settings.updateMirrorUrl.trim();
    if (configured !== "") return configured;
    const base = this.settings.installUrl || DEFAULT_DSH_REPO_URL;
    if (base.includes("github.com/")) return `https://gh-proxy.com/${base}`;
    return void 0;
  }
  async loadSettings() {
    const data = await this.loadData();
    this.settings = { ...DEFAULT_SETTINGS, ...data };
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /** 检测 Obsidian 界面语言（getLanguage()，zh* → 中文，其余/不可用 → English）。 */
  detectSystemLanguage() {
    var _a, _b;
    try {
      const lang = (_b = (_a = import_obsidian3.getLanguage) == null ? void 0 : _a()) != null ? _b : "";
      if (lang && lang.toLowerCase().startsWith("zh")) return "zh";
    } catch (e) {
    }
    return "en";
  }
  /** Vault 根路径（DSH 工作区通常即此；用于路径点击的 Vault 内判定）。 */
  vaultRoot() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.app.vault.adapter).getBasePath) == null ? void 0 : _b.call(_a)) != null ? _c : "";
  }
};

/* nosourcemap */