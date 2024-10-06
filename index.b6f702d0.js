var t=document.querySelectorAll(".list .population"),e=document.querySelector(".total-population"),o=document.querySelector(".average-population"),n=Array.from(t).reduce(function(t,e){return t+Number(e.textContent.replace(/,/g,""))},0),r=Math.round(n/t.length);e.textContent=n.toLocaleString(),o.textContent=r.toLocaleString();
//# sourceMappingURL=index.b6f702d0.js.map
