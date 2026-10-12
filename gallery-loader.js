const canvas=document.querySelector('#scene');
let supportsWebGL=false;try{supportsWebGL=!!document.createElement('canvas').getContext('webgl2');}catch{}
if(supportsWebGL){try{await import('./gallery.js?v=all-collection-2');}catch(error){console.error(error);await useFallback();}}else await useFallback();
async function useFallback(){canvas.replaceWith(canvas.cloneNode());await import('./gallery-fallback.js?v=all-collection-2');}
