const canvas=document.querySelector('#scene');
let supportsWebGL=false;
try {const probe=document.createElement('canvas');supportsWebGL=!!probe.getContext('webgl2');}catch{}
if(supportsWebGL){try{await import('./gallery.js?v=languages-1');}catch(error){console.error('3D gallery failed to initialise',error);await useFallback();}}else{await useFallback();}
async function useFallback(){const replacement=canvas.cloneNode();canvas.replaceWith(replacement);await import('./gallery-fallback.js?v=languages-1');}
