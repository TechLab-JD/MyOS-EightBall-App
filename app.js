const $=id=>document.getElementById(id);
const A=["It's looking good.","Signs point to yes.","Count on it.","Most likely.","Yes, in time.",
"Hard to say right now.","Ask again later.","Better not to say yet.","Keep your options open.","The outlook is cloudy.",
"I wouldn't count on it.","Probably not.","Doesn't look likely.","My sources say no.","Don't bet on it."];
function ask(){const el=$('eb-ball');el.style.transform='scale(.9)';
  setTimeout(()=>{el.textContent=A[Math.floor(Math.random()*A.length)];el.style.transform='scale(1)';},150);}
$('eb-go').onclick=ask;$('eb-q').addEventListener('keydown',e=>{if(e.key==='Enter')ask();});
