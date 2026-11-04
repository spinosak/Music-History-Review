const app=document.getElementById('app');
let S={},shuffle=true;
const L='abcdefgh';
const sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const tot=D.reduce((n,d)=>n+d[2].length,0);
const K='mhWeak';
function ld(){try{return JSON.parse(localStorage.getItem(K))||{}}catch(e){return {}}}
function sv(w){try{localStorage.setItem(K,JSON.stringify(w))}catch(e){}}
function wk(){const n=Object.keys(ld()).length;return n?`<button class="q" onclick="weak()"><b>Practice my weak spots</b><br><span class="mut">${n} question${n>1?'s':''} to review · <span onclick="event.stopPropagation();clr()" style="text-decoration:underline">clear list</span></span></button>`:''}
function weak(){const w=ld();let qs=[];D.forEach(d=>d[2].forEach(q=>{if(w[q[0]])qs.push(q)}));S.id='weak';begin(qs)}
function clr(){if(confirm('Clear your weak-spots list?')){sv({});home()}}

function home(){
  app.innerHTML=`<h1>Music History Quiz Practice</h1>
  <p class="mut">Pick a quiz to practice. You get instant feedback after each question.</p>
  <label class="mut"><input type="checkbox" id="shf" ${shuffle?'checked':''}> Shuffle question order</label>
  ${wk()}<button class="q" onclick="go('all')"><b>All quizzes mixed</b><br><span class="mut">${tot} questions</span></button>`+
  D.map(d=>`<button class="q" onclick="go('${d[0]}')"><b>${d[1]}</b><br><span class="mut">${d[2].length} question${d[2].length>1?'s':''}</span></button>`).join('');
  document.getElementById('shf').onchange=e=>shuffle=e.target.checked;
}
function go(id){if(id=='weak')return weak();
  let qs=[];D.forEach(d=>{if(id=='all'||d[0]==id)qs.push(...d[2])});
  S.id=id;begin(qs);
}
function begin(qs){
  S.qs=shuffle?sh(qs):qs;S.i=0;S.score=0;S.missed=[];S.sel=[];S.done=false;show();
}
function show(){
  const q=S.qs[S.i],multi=Array.isArray(q[2]);
  S.sel=[];S.done=false;
  app.innerHTML=`<button class="mut" style="background:none;border:0;padding:0" onclick="home()">← All quizzes</button>
  <div class="bar" style="margin:8px 0"><i style="width:${S.i/S.qs.length*100}%"></i></div>
  <p class="mut">Question ${S.i+1} of ${S.qs.length} · Score ${S.score}</p>
  <div class="card"><b>${q[0]}</b>${multi?'<br><span class="mut">Select all that apply</span>':''}</div>
  <div id="opts">${q[1].map((o,k)=>`<button class="q" id="o${k}" onclick="pick(${k})">${L[k]}. ${o}</button>`).join('')}</div>
  <div id="fb"></div>
  ${multi?'<button class="go" id="chk" onclick="check()">Check answer</button>':''}`;
}
function pick(k){
  if(S.done)return;
  const q=S.qs[S.i];
  if(Array.isArray(q[2])){
    const p=S.sel.indexOf(k);p<0?S.sel.push(k):S.sel.splice(p,1);
    document.getElementById('o'+k).classList.toggle('sel');
  }else{S.sel=[k];check()}
}
function check(){
  if(S.done||!S.sel.length)return;S.done=true;
  const q=S.qs[S.i],ans=[].concat(q[2]);
  const right=S.sel.length==ans.length&&S.sel.every(x=>ans.includes(x));
  q[1].forEach((_,k)=>{const e=document.getElementById('o'+k);e.classList.remove('sel');
    if(ans.includes(k))e.classList.add('ok');else if(S.sel.includes(k))e.classList.add('no')});
  const w=ld();if(right){S.score++;delete w[q[0]]}else{S.missed.push(q);w[q[0]]=(w[q[0]]||0)+1}sv(w);
  const last=S.i==S.qs.length-1;
  document.getElementById('fb').innerHTML=`<p><b>${right?'Correct!':'Not quite.'}</b>${right?'':' The right answer is highlighted in green.'}</p><button class="go" onclick="next()">${last?'See results':'Next →'}</button>`;
  const c=document.getElementById('chk');if(c)c.remove();
}
function next(){S.i++;S.i<S.qs.length?show():results()}
function results(){
  const n=S.qs.length,pct=Math.round(S.score/n*100);
  app.innerHTML=`<h1>${S.score} / ${n} (${pct}%)</h1>
  ${S.missed.length?`<h3>Missed questions</h3>`+S.missed.map(q=>{const a=[].concat(q[2]).map(k=>q[1][k]).join('; ');return `<div class="card">${q[0]}<br><span style="color:var(--okb)">✓ ${a}</span></div>`}).join(''):'<p>Perfect score!</p>'}
  ${S.missed.length?'<button class="go" onclick="begin(S.missed.slice())">Retry missed questions</button> ':''}
  <button class="go" onclick="go(S.id)">Retake quiz</button>
  <button class="go" onclick="home()">All quizzes</button>`;
}
home();