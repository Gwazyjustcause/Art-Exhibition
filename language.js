
let language='pt';
const words={
en:{physical:'These are physical paintings on MDF. I am available to present them in an in-person exhibition.',exhibition:'A virtual exhibition',lead:'Three series. Eighteen paintings.',copy:'Follow the corridor. Discover the paintings.<br>Select a piece to read its story.',enter:'Enter the exhibition →',portfolio:'Artist portfolio ↗',all:'All artworks',end:'End of the exhibition',thanks:'Thank you<br>for looking.',endcopy:'These are physical paintings by Gabriela Vicente Ferreira.<br>Available for an in-person exhibition.',visit:'Visit the artist’s portfolio ↗',restart:'Return to the beginning ↑',collection:'The collection',count:'18 paintings · Three series',meta:'23 × 15 cm · Painted on 3 mm MDF',next:'Next painting →',alt:'painting on MDF',close:'Close artwork view',percent:'of the passage',begin:'Push the wheel forward to enter',back:'Pull the wheel back to revisit',select:'Select a painting · Scroll to continue',follow:'Follow the passage',original:'Original text in English',note:''},
pt:{physical:'Estas são pinturas físicas sobre MDF. Estou disponível para as apresentar numa exposição presencial.',exhibition:'Uma exposição virtual',lead:'Três séries. Dezoito pinturas.',copy:'Percorre o corredor e descobre as pinturas.<br>Seleciona uma obra para conhecer a sua história.',enter:'Entrar na exposição →',portfolio:'Portefólio da artista ↗',all:'Todas as obras',end:'Fim da exposição',thanks:'Obrigada<br>pela visita.',endcopy:'Pinturas físicas de Gabriela Vicente Ferreira.<br>Disponíveis para uma exposição presencial.',visit:'Visitar o portefólio da artista ↗',restart:'Voltar ao início ↑',collection:'A coleção',count:'18 pinturas · Três séries',meta:'23 × 15 cm · Pintura sobre MDF de 3 mm',next:'Próxima pintura →',alt:'pintura sobre MDF',close:'Fechar a obra',percent:'do percurso',begin:'Empurra a roda do rato para avançar',back:'Puxa a roda do rato para voltar',select:'Seleciona uma pintura · Continua a percorrer',follow:'Segue o corredor',original:'Texto original em inglês',note:'Estas obras foram concebidas para serem estudadas em inglês. As traduções em português servem de apoio à leitura; os títulos originais são preservados.'}};
const translations={
'What Remains Unsaid':['O que fica por dizer',''],
'When Did We Say Goodbye':['Quando nos despedimos?',''],
'Please Call Back':['Volta a ligar',''],
'Catharsis':['Catarse',''],
'il sacco':['O saco','Um saco esquecido repousa no chão sujo de terra. No seu interior permanece uma figura, viva ou morta.'],
'Crusoe':['Crusoe','Robinson Crusoe passa quase trinta anos sozinho numa ilha remota. O seu isolamento torna-se um reflexo da solidão que pode instalar-se nas nossas próprias vidas.'],
'Mianhaeyo':['Desculpa','As mãos escurecidas e os olhos quase demoníacos colocam a figura entre o humano e o monstruoso. O arrependimento preenche a cena.'],
'Breathing':['A respirar','Uma figura jaz no chão, sob um pé, com o rosto sem expressão.'],
'Adios':['Adeus','Um homem e um cavalo ocupam uma paisagem deserta. A cena admite duas leituras: a vida a confortar a morte, ou a aceitação daquilo que os espera.'],
'Miragem':['Miragem','Uma figura ergue-se da terra e incendeia a paisagem. À medida que cresce, o verde pálido nas margens desvanece-se e o mundo à sua volta perde a vida.'],
'Lorde':['Lorde','Uma reflexão sobre a Igreja cristã.'],
'Afternoon Noise':['Ruído da tarde','Um verde doentio e um amarelo intrusivo envolvem um homem sentado, que cobre o rosto. As cores tornam a cena inquieta e exaustiva.'],
'Solitudinem':['Solidão','«Nunca pedi conforto. Não me toques como se te importasses.» As figuras reúnem-se num espaço que continua vazio.'],
"We'ak":['Fraco','Figuras idênticas rodeiam uma única pessoa que se distingue das restantes. Por mais cópias que existam, nenhuma substitui o original.'],
'Late':['Tarde','Entre duas portas, ele espera.'],
'Night':['Noite','Agarrado ao telefone público, ele espera.'],
'Noite':['Noite','Debaixo do telefone público, ele espera.'],
'Tardía':['Tardia','Do lado de fora da cabine telefónica, ele espera.'],
'Sound':['Som','Uma figura branca permanece sentada em silêncio, sob duas luzes.'],
'Sense':['Sentido','Como um pássaro numa gaiola, a figura sente que alguém a observa. Incapaz de se libertar, observa em silêncio.'],
'Overload':['Sobrecarga','Sob uma parede rasgada, papéis espalhados rodeiam uma figura encolhida nos próprios braços. A morte está ao seu lado.'],
'Oath':['Juramento','A figura parece envolver todo o espaço à sua volta, enquanto se prepara para resistir.']};
export const t=key=>words[language][key]||key;
export const isPortuguese=()=>language==='pt';
export function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
export function titleTranslation(title){const value=translations[title]?.[0];return language==='pt'&&value&&value!==title?'<span class="title-translation" lang="pt-PT">'+escapeHTML(value)+'</span>':'';}
export function setCaption(name){return escapeHTML(name)+titleTranslation(name);}
export function percentage(value){return Math.round(value)+'% '+t('percent');}
function note(){return language==='pt'?'<p class="language-note">'+t('note')+'</p>':'';}
export function detailHTML(a){const description=language==='pt'?(translations[a.title]?.[1]||a.description):a.description;return '<div class="detail"><img src="'+a.src+'" alt="'+escapeHTML(a.title)+', '+t('alt')+'"><div><span class="eyebrow">'+setCaption(a.set)+'</span><h2 id="modalTitle" lang="en">'+escapeHTML(a.title)+'</h2>'+titleTranslation(a.title)+'<p class="art-meta">Gabriela Vicente Ferreira<br>'+t('meta')+'</p><p class="art-story">'+escapeHTML(description)+'</p>'+(language==='pt'?'<details class="english-original"><summary>'+t('original')+'</summary><p lang="en">'+escapeHTML(a.description)+'</p></details>':'')+'<button id="next">'+t('next')+'</button></div></div>';}
export function catalogHTML(artworks,groups){return '<div class="catalog"><span class="eyebrow">'+t('count')+'</span><h2 id="modalTitle">'+t('collection')+'</h2>'+groups.map((g,group)=>'<section class="catalog-set"><h3>'+setCaption(g.name)+'</h3><div class="grid">'+artworks.map((a,i)=>a.group!==group?'':'<button class="tile" data-index="'+i+'"><img src="'+a.src+'" alt="'+escapeHTML(a.title)+', '+t('alt')+'"><span>'+escapeHTML(a.title)+'</span>'+titleTranslation(a.title)+'</button>').join('')+'</div></section>').join('')+'</div>';}
function applyLanguage(){document.documentElement.lang=language==='pt'?'pt-PT':'en';document.querySelectorAll('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});document.querySelector('#exhibition-translation').innerHTML=titleTranslation('What Remains Unsaid');document.querySelector('#language-note').innerHTML=t('note');document.querySelector('#language-note').hidden=language!=='pt';document.querySelector('#close').setAttribute('aria-label',t('close'));document.querySelector('#scene').setAttribute('aria-label',language==='pt'?'Galeria virtual. Percorre o corredor ou usa Todas as obras para explorar a coleção.':'Virtual gallery. Travel through the corridor or use All artworks to explore the collection.');document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));document.dispatchEvent(new CustomEvent('exhibition-language-change'));}
document.querySelectorAll('[data-language]').forEach(b=>b.onclick=()=>{language=b.dataset.language;applyLanguage();});applyLanguage();
