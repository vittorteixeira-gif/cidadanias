// DARK MODE
document.getElementById("darkModeBtn").onclick = () => {
document.body.classList.toggle("dark");
};

// QUIZ
function quiz(correto){
const res = document.getElementById("res");

if(correto){
res.innerHTML = "✔ Correto!";
}else{
res.innerHTML = "✖ Errado!";
}
}

// DETECTOR
document.getElementById("check").onclick = () => {

let text = document.getElementById("input").value;
let out = document.getElementById("out");

if(text.includes("URGENTE") || text.includes("!!!")){
out.innerHTML = "🔴 Alto risco de fake news";
}else{
out.innerHTML = "🟢 Baixo risco";
}

};

// CONTADORES
let c = 0;
setInterval(()=>{
c++;
if(c<=5000) document.getElementById("c1").innerText = c;
},10);

// TOP BUTTON
document.getElementById("top").onclick = () => {
window.scrollTo({top:0,behavior:"smooth"});
};
