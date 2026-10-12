import {artworks,stops,journeyLength} from './collection.js?v=all-collection-2';
import {t,detailHTML,catalogHTML,setCaption,percentage} from './language.js?v=all-collection-2';

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js';


const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const canvas=document.querySelector('#scene'),modal=document.querySelector('#modal');
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.78;
const scene=new THREE.Scene();scene.background=new THREE.Color('#ddd8ce');scene.fog=new THREE.Fog('#bdb9b1',18,55);
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.03,70);camera.position.set(0,1.7,0);
scene.add(new THREE.HemisphereLight(0xfff6e4,0x555a61,.42));
function noiseTexture(base,amount){const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d'),im=x.createImageData(256,256),color=new THREE.Color(base);for(let i=0;i<im.data.length;i+=4){const noise=(Math.random()-.5)*amount;im.data[i]=Math.max(0,color.r*255+noise);im.data[i+1]=Math.max(0,color.g*255+noise);im.data[i+2]=Math.max(0,color.b*255+noise);im.data[i+3]=255;}x.putImageData(im,0,0);const tex=new THREE.CanvasTexture(c);tex.wrapS=tex.wrapT=THREE.RepeatWrapping;tex.repeat.set(5,5);return tex;}
const plaster=noiseTexture('#ffffff',14),stone=noiseTexture('#ffffff',22);
const floorMat=new THREE.MeshStandardMaterial({color:0xa9a396,roughness:.72,metalness:.06,bumpMap:stone,bumpScale:.004});
const edgeMat=new THREE.MeshStandardMaterial({color:0x796551,roughness:.92});
function box(w,h,d,material,x,y,z){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);mesh.position.set(x,y,z);mesh.receiveShadow=true;scene.add(mesh);return mesh;}
box(2.7,.12,journeyLength+4,floorMat,0,-.06,journeyLength/2);
const ceilingMat=new THREE.MeshStandardMaterial({color:0x373735,roughness:.94});
box(2.7,.08,journeyLength+4,ceilingMat,0,2.79,journeyLength/2);
for(let z=-4;z<journeyLength+2;z+=2){const shade=z<journeyLength/3?0xe8e2d6:z<journeyLength*2/3?0x888781:0x33383a;const wallMat=new THREE.MeshStandardMaterial({color:shade,roughness:.96,bumpMap:plaster,bumpScale:.002});for(const side of [-1,1]){box(.1,2.75,2.01,wallMat,side*1.25,1.375,z+1);box(.022,.065,2.01,new THREE.MeshStandardMaterial({color:z<journeyLength/3?0xb9b3a8:0x242a2b,roughness:.8}),side*1.188,.0325,z+1);} // subtle floor joints
box(2.4,.001,.004,new THREE.MeshStandardMaterial({color:0x827c72,roughness:1}),0,.0005,z);}
const trackMat=new THREE.MeshStandardMaterial({color:0x252829,roughness:.55,metalness:.5});
for(const side of [-1,1])box(.026,.026,journeyLength+2,trackMat,side*.68,2.7,journeyLength/2);
const loader=new THREE.TextureLoader(),paintingMeshes=[],raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
artworks.forEach((a,i)=>{a.src=encodeURI(a.image);const face=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.86,metalness:0});a.face=face;const mesh=new THREE.Mesh(new THREE.BoxGeometry(a.width,a.height,a.material==='canvas'?.018:.003),[edgeMat,edgeMat,edgeMat,edgeMat,face,edgeMat]);mesh.position.set(a.side*(a.material==='canvas'?1.189:1.1965),a.centerY+.65,a.z);mesh.rotation.y=-a.side*Math.PI/2;mesh.castShadow=true;mesh.receiveShadow=true;mesh.userData.index=i;scene.add(mesh);paintingMeshes.push(mesh);});
function wallText(group){const c=document.createElement('canvas');c.width=1600;c.height=400;const x=c.getContext('2d');const dark=group.z>=14;x.fillStyle=dark?'#ede7dc':'#403d35';x.textAlign='center';x.font='28px Arial';x.fillText('SERIES '+group.chapter+'  /  NOVEMBER 2019',800,75);x.font='72px Georgia';x.fillText(group.name,800,190);x.font='30px Arial';x.fillText(group.subtitle,800,275);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;const label=new THREE.Mesh(new THREE.PlaneGeometry(.9,.225),new THREE.MeshBasicMaterial({map:tex,transparent:true,depthWrite:false}));label.position.set(group.side*1.185,group.z===8?2.42:2.2,group.z);label.rotation.y=-group.side*Math.PI/2;scene.add(label);}
const spots=Array.from({length:4},()=>{const l=new THREE.SpotLight(0xffeed6,6,6,.65,.85,1.4);l.castShadow=true;l.shadow.mapSize.set(1024,1024);l.shadow.bias=-.00002;l.shadow.normalBias=.0005;scene.add(l,l.target);return l;});
const fills=Array.from({length:2},()=>{const l=new THREE.PointLight(0xffeed8,.7,6,2);scene.add(l);return l;});
stops.forEach(g=>{for(const offset of [-.35,.35])box(.08,.06,.1,trackMat,g.side*.65,2.65,g.z+offset);});
function updateDisplay(z){const nearest=[...stops].sort((a,b)=>Math.abs(a.z-z)-Math.abs(b.z-z)).slice(0,2);nearest.forEach((g,i)=>{fills[i].position.set(0,2.5,g.z);for(let j=0;j<2;j++){const l=spots[i*2+j],offset=j?.35:-.35;l.position.set(g.side*.65,2.62,g.z+offset);l.target.position.set(g.side*1.2,1.7,g.z);}});artworks.forEach(a=>{if(a.loaded&&a.face.map&&Math.abs(a.z-z)>9){a.face.map.dispose();a.face.map=null;a.face.needsUpdate=true;a.loaded=false;}if(!a.loaded&&Math.abs(a.z-z)<6){a.loaded=true;loader.load(a.src,texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);if(Math.abs(a.z-cameraZ)>9){texture.dispose();a.loaded=false;return;}a.face.map=texture;a.face.needsUpdate=true;});}});}
box(2.5,2.75,.12,new THREE.MeshStandardMaterial({color:0x33383a,roughness:.9}),0,1.375,journeyLength+1);
let progress=0,target=0,last=0,cameraZ=0,yaw=0;
const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};
function resize(){const viewWidth=canvas.clientWidth,viewHeight=canvas.clientHeight;camera.aspect=viewWidth/viewHeight;camera.updateProjectionMatrix();renderer.setSize(viewWidth,viewHeight,false);}addEventListener('resize',resize);resize();
function animate(time){const dt=Math.min((time-last)/1000,.05);last=time;if(!modal.open){target=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight)*journeyLength;progress=reduced?target:progress+(target-progress)*(1-Math.exp(-dt*6));}const stop=stops.find(g=>progress>=g.z-1&&progress<=g.z+.5);cameraZ=progress;yaw=0;
if(stop){if(progress<stop.z-1/3){const t=smooth((progress-stop.z+1)/(1-1/3));cameraZ=progress+(stop.z-progress)*t;yaw=stop.side*Math.PI/2*t;}else if(progress<=stop.z+1/3){cameraZ=stop.z;yaw=stop.side*Math.PI/2;}else{const t=smooth((progress-stop.z-1/3)/(.5-1/3));cameraZ=stop.z+(progress-stop.z)*t;yaw=stop.side*Math.PI/2*(1-t);}}
camera.position.set(0,1.7,cameraZ);camera.lookAt(Math.sin(yaw),1.7,cameraZ+Math.cos(yaw)); // fit the complete composition, including its title
const focusFov=stop?Math.max(12,Math.min(85,2*Math.atan(Math.max(stop.rise/.7,stop.span/(camera.aspect*.75))/2/1.2)*180/Math.PI)):48;camera.fov=48+(focusFov-48)*smooth(Math.abs(yaw)/(Math.PI/2));if(innerWidth<600)camera.setViewOffset(canvas.clientWidth,canvas.clientHeight,0,20,canvas.clientWidth,canvas.clientHeight);else camera.clearViewOffset();camera.updateProjectionMatrix();
const dark=progress/journeyLength;document.body.style.color=dark>.43?'#f4ede2':'#292823';document.body.classList.toggle('in-gallery',progress>=.25);document.querySelector('#intro').style.opacity=progress<.25?'1':'0';document.querySelector('#intro').style.visibility=progress>=.25?'hidden':'visible';document.querySelector('#end').style.display=progress>journeyLength-1.2?'block':'none';document.querySelector('#chapter').innerHTML=setCaption((stop||stops.reduce((a,b)=>Math.abs(a.z-progress)<Math.abs(b.z-progress)?a:b)).name);document.querySelector('#bar').style.width=target/journeyLength*100+'%';document.querySelector('#percent').textContent=percentage(target/journeyLength*100);document.querySelector('#hint').textContent=progress<3?t('begin'):progress>journeyLength-2?t('back'):Math.abs(yaw)>1.5?t('select'):t('follow');updateDisplay(cameraZ);renderer.render(scene,camera);requestAnimationFrame(animate);}requestAnimationFrame(animate);
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
let openArtwork=null,catalogOpen=false;
function showArt(i){openArtwork=i;catalogOpen=false;document.querySelector('#content').innerHTML=detailHTML(artworks[i]);const next=document.querySelector('#next');if(artworks[i+1]?.group===artworks[i].group){next.onclick=()=>showArt(i+1);}else{next.remove();}if(!modal.open)modal.showModal();}
function showCatalog(){openArtwork=null;catalogOpen=true;document.querySelector('#content').innerHTML=catalogHTML(artworks,stops);document.querySelectorAll('.tile').forEach(b=>b.onclick=()=>showArt(+b.dataset.index));if(!modal.open)modal.showModal();}
document.addEventListener('exhibition-language-change',()=>{if(modal.open){if(catalogOpen)showCatalog();else if(openArtwork!==null)showArt(openArtwork);}});
function hitAt(e){const r=canvas.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);return raycaster.intersectObjects(paintingMeshes)[0];}
canvas.onclick=e=>{const hit=hitAt(e);if(hit)showArt(hit.object.userData.index)};canvas.onpointermove=e=>{canvas.style.cursor=hitAt(e)?'pointer':'default'};
document.querySelector('#all').onclick=showCatalog;
document.querySelector('#close').onclick=()=>modal.close();modal.onclick=e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}};
document.querySelector('#enter').onclick=()=>scrollTo({top:(document.documentElement.scrollHeight-innerHeight)*stops[0].z/journeyLength,behavior:reduced?'instant':'smooth'});document.querySelector('#restart').onclick=()=>scrollTo({top:0,behavior:reduced?'instant':'smooth'});

// Wheel pushed away from the viewer advances through the exhibition.
addEventListener('wheel',event=>{if(modal.open||event.ctrlKey)return;event.preventDefault();const unit=event.deltaMode===1?16:event.deltaMode===2?innerHeight:1;scrollTo({top:Math.max(0,Math.min(document.documentElement.scrollHeight-innerHeight,scrollY-event.deltaY*unit)),behavior:'instant'});},{passive:false});

