
'use strict';
// Replace image with a relative file path (e.g. artworks/my-painting.jpg) to exhibit your own work.
const artworks = [
  {
    "title": "il sacco",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/il sacco.jpg",
    "description": "Within a brown dirtied ground there it is, the forgotten bag, he lays within, alive or dead.",
    "z": 8.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.51
  },
  {
    "title": "Crusoe",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Crusoe.jpg",
    "description": "Robinson Crusoe, the man that spends nearly 30 years stoke on a remote island, alone, at some point we become like him, sometimes it becomes our reality.",
    "z": 7.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.51
  },
  {
    "title": "Mianhaeyo",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Mianhaeyo.jpg",
    "description": "Hands darkened and eyes nearly demonic, within human and demonic presence, it regrets everything.",
    "z": 8.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.28
  },
  {
    "title": "Breathing",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Breathing.jpg",
    "description": "Laying against the floor stomped by a foot there they lay, without expression.",
    "z": 7.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.28
  },
  {
    "title": "Adios",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Adios.jpg",
    "description": "Man with a horse on a deserted area, either life comforting death or an acceptance of what's to become of them.",
    "z": 8.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.05
  },
  {
    "title": "Miragem",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Miragem.jpg",
    "description": "It comes from within the earth and sets ablaze the whole place, the light green in the edges turns faded, the place becomes less alive and it grows.",
    "z": 7.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.05
  },
  {
    "title": "Lorde",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Lorde.jpg",
    "description": "The Christian church.",
    "z": 8.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.8200000000000001
  },
  {
    "title": "Afternoon Noise",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Afternoon Noise.jpg",
    "description": "The tiring image of a sickened green and a obnoxious yellow where a man sit covering his face.",
    "z": 7.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.8200000000000001
  },
  {
    "title": "Solitudinem",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/Solitudinem.jpg",
    "description": "I never asked for comfort, don't touch me pretending like you care. Figures fill the place, a place of absolutely nothing.",
    "z": 8.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.5900000000000001
  },
  {
    "title": "We'ak",
    "set": "When Did We Say Goodbye",
    "group": 0,
    "image": "assets/1- November19/WDWSG - Nov19/We_ak.jpg",
    "description": "All the copies in the world couldn't beat the real image. They stand all the same around one single figure, he stand out within that crowd.",
    "z": 7.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.5900000000000001
  },
  {
    "title": "Late",
    "set": "Please Call Back",
    "group": 1,
    "image": "assets/1- November19/Please call back - Nov19/Late.jpg",
    "description": "Between two doors, he waits.",
    "z": 17.82,
    "side": -1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.165
  },
  {
    "title": "Night",
    "set": "Please Call Back",
    "group": 1,
    "image": "assets/1- November19/Please call back - Nov19/Night.jpg",
    "description": "Holding on to the payphone, he waits.",
    "z": 18.18,
    "side": -1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.065
  },
  {
    "title": "Noite",
    "set": "Please Call Back",
    "group": 1,
    "image": "assets/1- November19/Please call back - Nov19/Noite.jpg",
    "description": "Underneath the payphone, he waits.",
    "z": 17.82,
    "side": -1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.935
  },
  {
    "title": "Tardía",
    "set": "Please Call Back",
    "group": 1,
    "image": "assets/1- November19/Please call back - Nov19/Tardía.jpg",
    "description": "Outside the payphone, he waits.",
    "z": 18.18,
    "side": -1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.8350000000000001
  },
  {
    "title": "Sound",
    "set": "Catharsis",
    "group": 2,
    "image": "assets/1- November19/Catharsis - Nov19/Sound.png",
    "description": "A white figure stands silent beneath the two lights.",
    "z": 28.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.165
  },
  {
    "title": "Sense",
    "set": "Catharsis",
    "group": 2,
    "image": "assets/1- November19/Catharsis - Nov19/Sense.png",
    "description": "Like a jailed bird it sense the presence of someone watching, not being able to set himself free he observes quietly.",
    "z": 27.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 1.165
  },
  {
    "title": "Overload",
    "set": "Catharsis",
    "group": 2,
    "image": "assets/1- November19/Catharsis - Nov19/Overload.jpg",
    "description": "Underneath a ripped wall with papers surrounding him and death standing to him side there he remains tucked within his arms.",
    "z": 28.18,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.935
  },
  {
    "title": "Oath",
    "set": "Catharsis",
    "group": 2,
    "image": "assets/1- November19/Catharsis - Nov19/Oath.png",
    "description": "The figure engolfs the space where he stands, bracing himself.",
    "z": 27.82,
    "side": 1,
    "width": 0.23,
    "height": 0.15,
    "centerY": 0.935
  }
];
const journeyLength=32;
const setStops=[{name:'When Did We Say Goodbye',z:8,side:1},{name:'Please Call Back',z:18,side:-1},{name:'Catharsis',z:28,side:1}];
let cameraYaw=0,cameraZ=0;
const smoothstep=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
const canvas=document.querySelector('canvas'),ctx=canvas.getContext('2d'),modal=document.querySelector('dialog');let width,height,dpr,position=0,target=0,hits=[],last=0;
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
function placeholder(a,i){const c=document.createElement('canvas');c.width=480;c.height=620;const x=c.getContext('2d');x.fillStyle=a.colors[0];x.fillRect(0,0,480,620);x.fillStyle=a.colors[1];x.beginPath();x.ellipse(220+i%3*30,285,160,225,i*.22,0,Math.PI*2);x.fill();x.fillStyle=a.colors[2];x.beginPath();x.moveTo(0,510);x.bezierCurveTo(140,190,300,570,480,260);x.lineTo(480,620);x.lineTo(0,620);x.fill();x.strokeStyle=a.colors[0];x.lineWidth=3;x.beginPath();x.arc(260,255,100,i*.3,i*.3+4);x.stroke();return c.toDataURL();}
artworks.forEach((a,i)=>{a.src=encodeURI(a.image);a.texture=new Image();a.texture.src=a.src;});
function resize(){width=innerWidth;height=innerHeight;dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0)}addEventListener('resize',resize);resize();
// Camera at standing eye level, 1.7 units above the corridor floor.
const cameraHeight=1.05;
function project(x,y,z){const dz=z-cameraZ,depth=x*Math.sin(cameraYaw)+dz*Math.cos(cameraYaw);if(depth<=.15)return null;const horizontal=x*Math.cos(cameraYaw)-dz*Math.sin(cameraYaw);const f=Math.min(width*.82,height*.85);return {x:width/2+horizontal*f/depth,y:height*.49-(y-cameraHeight)*f/depth};}
function poly(points,fill){if(points.some(p=>!p))return;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.closePath();ctx.fillStyle=fill;ctx.fill();}
function plane(x1,y1,z1,x2,y2,z2,fill){poly([project(x1,y1,z1),project(x2,y1,z2),project(x2,y2,z2),project(x1,y2,z1)],fill)}
function drawArt(a,i){const z=a.z;if(Math.abs(z-cameraZ)>42)return;const x=a.side*1.2,top=a.centerY+a.height/2,bottom=a.centerY-a.height/2;const p=[project(x,top,z-a.width/2),project(x,top,z+a.width/2),project(x,bottom,z+a.width/2),project(x,bottom,z-a.width/2)];if(p.some(v=>!v))return;
ctx.save();ctx.shadowColor='rgba(12,14,15,.48)';ctx.shadowBlur=10;ctx.shadowOffsetX=3;ctx.shadowOffsetY=5;poly(p,'#181918');ctx.restore();ctx.save();ctx.beginPath();p.forEach((v,j)=>j?ctx.lineTo(v.x,v.y):ctx.moveTo(v.x,v.y));ctx.closePath();ctx.clip();
// Vertical image strips follow the wall's perspective, with no external rendering dependency.
const image=a.texture;if(image.complete&&image.naturalWidth){for(let s=0;s<100;s++){let u=s/100,v=(s+1)/100;const top={x:p[0].x+(p[1].x-p[0].x)*u,y:p[0].y+(p[1].y-p[0].y)*u},bottom={x:p[3].x+(p[2].x-p[3].x)*u,y:p[3].y+(p[2].y-p[3].y)*u};let nx=p[0].x+(p[1].x-p[0].x)*v;ctx.drawImage(image,(p[1].x<p[0].x?99-s:s)*image.naturalWidth/100,0,image.naturalWidth/100+1,image.naturalHeight,Math.min(top.x,nx),top.y,Math.abs(nx-top.x)+1,bottom.y-top.y);}}ctx.restore();ctx.strokeStyle='#766653';ctx.lineWidth=.7;ctx.beginPath();p.forEach((v,j)=>j?ctx.lineTo(v.x,v.y):ctx.moveTo(v.x,v.y));ctx.closePath();ctx.stroke();hits.push({points:p,index:i});
const label=project(x,a.centerY-a.height/2-.035,z);if(label && z-position<3.5 && a.group!==0){ctx.fillStyle=z>28?'#dad5cb':'#494743';ctx.font='10px Arial';ctx.textAlign='center';ctx.fillText(String(i+1).padStart(2,'0')+' / '+a.title,label.x,label.y);}}
function tick(time){let dt=Math.min((time-last)/1000,.05);last=time;if(!modal.open){target=scrollY/Math.max(1,document.documentElement.scrollHeight-height)*journeyLength;position=reduced?target:position+(target-position)*(1-Math.exp(-dt*7));}const stop=setStops.find(g=>position>=g.z-4&&position<=g.z+3);cameraZ=position;cameraYaw=0;if(stop){if(position<stop.z-1){const t=smoothstep((position-(stop.z-4))/3);cameraZ=position+(stop.z-position)*t;cameraYaw=stop.side*Math.PI/2*t;}else if(position<=stop.z+1){cameraZ=stop.z;cameraYaw=stop.side*Math.PI/2;}else{const t=smoothstep((position-(stop.z+1))/2);cameraZ=stop.z+(position-stop.z)*t;cameraYaw=stop.side*Math.PI/2*(1-t);}}let dark=Math.max(0,Math.min(1,position/journeyLength));let bg=stop&&Math.abs(cameraYaw)>1.5?Math.round(244-(stop.z<14?.12:stop.z<24?.5:.88)*204)-(stop.side===1?9:0):Math.round(237-dark*208);ctx.fillStyle=`rgb(${bg},${bg},${bg})`;ctx.fillRect(0,0,width,height);hits=[];
const near=cameraZ+.16,far=journeyLength+10;const floor=ctx.createLinearGradient(0,height*.49,0,height);floor.addColorStop(0,dark>.5?'#292a2b':'#b5b1a9');floor.addColorStop(1,dark>.5?'#17191c':'#ded8cc');poly([project(-1.2,-.65,near),project(1.2,-.65,near),project(1.2,-.65,far),project(-1.2,-.65,far)],floor);
for(let z=Math.ceil((journeyLength+8)/4)*4;z>=Math.floor(cameraZ/4)*4;z-=4){let n=Math.max(z,near),e=z+4;if(e<=near)continue;let t=(z<14?.12:z<24?.5:.88),g=Math.round(244-t*204);plane(-1.2,2.1,n,-1.2,-.65,e,`rgb(${g},${g},${g-2})`);plane(1.2,2.1,n,1.2,-.65,e,`rgb(${g-9},${g-9},${g-11})`);const l=project(-1.2,-.65,e),r=project(1.2,-.65,e);if(l&&r){ctx.strokeStyle=dark>.5?'#ffffff08':'#00000008';ctx.beginPath();ctx.moveTo(l.x,l.y);ctx.lineTo(r.x,r.y);ctx.stroke();}for(const side of [-1,1]){const p=project(side*.8,2.05,z+2);if(p){ctx.fillStyle=t>.5?'#c4b594':'#fffdf4';ctx.fillRect(p.x-10,p.y,20,2);}}}
for(const group of setStops){const p=project(group.side*1.2,group.z===8?1.68:1.45,group.z);if(p&&Math.abs(group.z-cameraZ)<8){ctx.fillStyle=group.z>20?'#e9e4db':'#393733';ctx.textAlign='center';ctx.font='14px Georgia';ctx.fillText(group.name,p.x,p.y);}}
for(let i=artworks.length-1;i>=0;i--)drawArt(artworks[i],i);
document.body.style.color=dark>.52?'#ece7df':'#242321';document.querySelector('#intro').style.opacity=Math.max(0,1-position/3);document.querySelector('#intro').style.visibility=position>3?'hidden':'visible';document.querySelector('#end').style.display=position>journeyLength-1.2?'block':'none';document.querySelector('#chapter').textContent=(artworks.filter(a=>a.z<=position+3).at(-1)||artworks[0]).set;document.querySelector('#bar').style.width=target/journeyLength*100+'%';document.querySelector('#percent').textContent=Math.round(target/journeyLength*100)+'% of the passage';document.querySelector('#hint').textContent=position<3?'Scroll to enter ↓':position>journeyLength-2?'Scroll back to revisit ↑':'Select a painting to look closer';requestAnimationFrame(tick);}requestAnimationFrame(tick);
function showArt(i){const a=artworks[i];document.querySelector('#content').innerHTML=`<div class="detail"><img src="${a.src}" alt="${a.title}, painting on MDF"><div><span class="eyebrow">${a.set}</span><h2 id="modalTitle">${a.title}</h2><p>23 × 15 cm · Painted on 3 mm MDF<br>November 2019</p><p>${a.description}</p><button id="next">Next artwork →</button></div></div>`;document.querySelector('#next').onclick=()=>showArt((i+1)%artworks.length);if(!modal.open)modal.showModal();}
function inside(x,y,p){let c=false;for(let i=0,j=p.length-1;i<p.length;j=i++){if((p[i].y>y)!=(p[j].y>y)&&x<(p[j].x-p[i].x)*(y-p[i].y)/(p[j].y-p[i].y)+p[i].x)c=!c;}return c;}
canvas.onclick=e=>{const hit=[...hits].reverse().find(h=>inside(e.clientX,e.clientY,h.points));if(hit)showArt(hit.index)};canvas.onpointermove=e=>{canvas.style.cursor=hits.some(h=>inside(e.clientX,e.clientY,h.points))?'pointer':'default'};
document.querySelector('#all').onclick=()=>{document.querySelector('#content').innerHTML='<div class="catalog"><span class="eyebrow">The collection · 18 paintings</span><h2 id="modalTitle">A closer look</h2>'+setStops.map((g,group)=>'<h3>'+g.name+'</h3><div class="grid">'+artworks.map((a,i)=>a.group!==group?'':`<button class="tile" data-index="${i}"><img src="${a.src}" alt="${a.title}, painting on MDF"><span>${a.set}<br>${String(i+1).padStart(2,'0')} — ${a.title}</span></button>`).join('')+'</div>').join('')+'</div>';document.querySelectorAll('.tile').forEach(b=>b.onclick=()=>showArt(+b.dataset.index));modal.showModal()};document.querySelector('#close').onclick=()=>modal.close();modal.onclick=e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close()}};
document.querySelector('#enter').onclick=()=>scrollTo({top:(document.documentElement.scrollHeight-height)*(8/journeyLength),behavior:reduced?'instant':'smooth'});document.querySelector('#restart').onclick=()=>scrollTo({top:0,behavior:reduced?'instant':'smooth'});
