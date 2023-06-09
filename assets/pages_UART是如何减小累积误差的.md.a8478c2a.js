import{_ as a,o as e,c as t,O as r}from"./chunks/framework.4afe7240.js";const A=JSON.parse('{"title":"UART是如何减小累积误差的","description":"","frontmatter":{"tags":"待成文","title":"UART是如何减小累积误差的","sidebar":false,"date":"2023-06-08T00:00:00.000Z"},"headers":[],"relativePath":"pages/UART是如何减小累积误差的.md","filePath":"pages/UART是如何减小累积误差的.md","lastUpdated":1686281074000}'),_={name:"pages/UART是如何减小累积误差的.md"},o=r('<h1 id="uart是如何减小累积误差的" tabindex="-1">UART是如何减小累积误差的 <a class="header-anchor" href="#uart是如何减小累积误差的" aria-label="Permalink to &quot;UART是如何减小累积误差的&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p><a href="./UART.html">UART</a> 是异步通信由于收发双方的时钟不同，会产生 <a href="./时钟漂移.html">累积误差</a></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>1.波特率误差校正：在UART通信中，发送方和接收方约定一个波特率，通过波特率误差校正技术，可以使发送方和接收方的时钟同步，并减小时钟漂移。具体的实现方式是，在发送方和接收方之间插入一个特定的校验位，通过校验位的变化来调整发送方和接收方的时钟，从而实现波特率的同步。</p><p>2.流控制：在UART通信中，为了避免数据的丢失或重复，通常采用流控制技术。流控制可以通过发送方和接收方之间的握手信号来控制数据的发送和接收，从而减小时钟漂移。具体的实现方式是，在发送方和接收方之间插入一个特定的握手信号，当接收方准备好接收数据时，发送一个握手信号通知发送方，发送方才开始发送数据。这样可以保证数据的正确传输，减小时钟漂移。</p><p>总之，为了减小UART通信中的时钟漂移，通常采用波特率误差校正和流控制技术，从而保证数据的正确传输。</p><p>UART数据帧中的流控制位是可选的，通常是第9位，也就是在标准的8位数据位、1位停止位和可选的奇偶校验位之后，再添加一位流控制位。这个流控制位有时也被称为“空闲位”、“保留位”或“扩展位”。如果在通信中不需要使用流控制，这个位可以被忽略，或者设置为固定的值。</p>',8),s=[o];function i(n,d,l,c,h,p){return e(),t("div",null,s)}const R=a(_,[["render",i]]);export{A as __pageData,R as default};
