import{_ as t,o as a,c as s,C as e,a as o}from"./chunks/framework.364d6ed5.js";const b=JSON.parse('{"title":"16倍采样","description":"","frontmatter":{"tags":"old","title":"16倍采样","sidebar":false,"date":"2023-06-08T00:00:00.000Z"},"headers":[],"relativePath":"pages/16倍采样.md","filePath":"pages/16倍采样.md","lastUpdated":1686486320000}'),n={name:"pages/16倍采样.md"},l=e("h1",{id:"_16倍采样",tabindex:"-1"},[o("16倍采样 "),e("a",{class:"header-anchor",href:"#_16倍采样","aria-label":'Permalink to "16倍采样"'},"​")],-1),_=e("ul",null,[e("li",null,"防止干扰 - 比如起始位，可能存在空闲的高电平变成低电平 - 多次检测起始位 - 1秒采 16位数据")],-1),d=e("p",null,"在USART通信中，16倍采样是一种传输数据的方式，它是指在每个时钟周期内采样16次来检测接收线上的数据电平，以确定接收到的数据位是0还是1。",-1),c=e("p",null,"在USART通信中，数据的传输速率由波特率控制，而波特率的设置需要根据具体的应用场景来确定。当波特率较高时，数据的传输速率也会相应地加快，这就需要在接收端对数据进行更精细的采样，以确保数据的准确性。",-1),r=e("p",null,"在16倍采样模式下，每个时钟周期内采样16次来检测接收线上的数据电平，这样可以更准确地确定数据位的值，从而提高数据传输的可靠性。当然，采样次数也可以根据具体的应用需求进行设置，不一定非要是16倍采样。",-1),i=e("p",null,"需要注意的是，在使用16倍采样模式时，需要在发送端和接收端同时设置，以保证数据的正确传输。",-1),p=[l,_,d,c,r,i];function h(u,f,m,g,x,T){return a(),s("div",null,p)}const k=t(n,[["render",h]]);export{b as __pageData,k as default};
