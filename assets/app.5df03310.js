import{Q as o,a5 as i,a6 as c,a7 as u,a8 as l,a9 as d,aa as f,ab as m,ac as h,ad as A,ae as g,M as v,d as P,u as y,p as w,k as C,af as R,ag as _,ah as b,ai as E}from"./chunks/framework.7ae304b1.js";import{t as r}from"./chunks/theme.c16685be.js";const D={...r,enhanceApp(e){r.enhanceApp(e)}};function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=p(D),T=P({name:"VitePressApp",setup(){const{site:e}=y();return w(()=>{C(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),R(),_(),b(),n.setup&&n.setup(),()=>E(n.Layout)}});async function x(){const e=S(),a=O();a.provide(c,e);const t=u(e.route);return a.provide(l,t),a.component("Content",d),a.component("ClientOnly",f),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function O(){return h(T)}function S(){let e=o,a;return A(t=>{let s=g(t);return e&&(a=s),(e||a===s)&&(s=s.replace(/\.js$/,".lean.js")),o&&(e=!1),v(()=>import(s),[])},n.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{x as createApp};
