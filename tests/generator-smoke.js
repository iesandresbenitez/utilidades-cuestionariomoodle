import {questionTypes} from "../js/data/question-types.js";
import {generatePrompt} from "../js/generators/index.js";
const results=document.querySelector("#results"),checks=[];
const assert=(name,condition,detail="")=>checks.push({name,ok:Boolean(condition),detail});
assert("Catálogo con 15 formatos",questionTypes.length===15,"Encontrados: "+questionTypes.length);
const prompts=[];
for(const type of questionTypes){const specific={};type.fields.forEach(f=>{specific[f.id]=f.kind==="checkbox"?true:f.id==="svg"?"Sí":"dato de prueba"});const data={typeId:type.id,subject:"Tecnología",level:"1.º Bachillerato",topic:"Prueba automática",difficulty:"Media",quantity:2,category:"Pruebas",statement:"Enunciado de prueba",curriculumEnabled:true,competencies:"CE de prueba",criteria:"Criterio de prueba",knowledge:"Saber de prueba",xmlOutput:"complete",specificText:"Comprobación",specific};const prompt=generatePrompt(data);prompts.push(prompt);assert("Generador "+type.id,prompt.includes(type.id)&&prompt.includes("Tecnología")&&prompt.includes("Criterio de prueba"),"Longitud: "+prompt.length);assert("Campos específicos "+type.id,type.fields.every(f=>prompt.includes(f.label)),"Todos los campos del catálogo aparecen en el prompt");}
assert("STACK incluye Maxima y PRT",prompts[14].includes("stackunits")&&prompts[14].includes("UnitsRelative")&&prompts[14].includes("NumRelative"));
assert("STACK incluye semillas y QTest",prompts[14].includes("<deployedseed>")&&prompts[14].includes("<qtest>")&&prompts[14].includes("&#937;"));
assert("Numérica advierte sobre unidades",prompts[4].includes("no valida automáticamente unidades físicas"));
assert("Cloze comprueba sintaxis",prompts[8].includes("delimitadores #")&&prompts[8].includes("porcentajes"));
assert("Plugins no inventan XML",prompts[9].includes("no inventes XML")&&prompts[13].includes("documentación"));
checks.forEach(c=>{const row=document.createElement("article");row.className="saved-item";const info=document.createElement("div"),h=document.createElement("h3"),p=document.createElement("p");h.textContent=(c.ok?"✓ ":"✗ ")+c.name;p.textContent=c.detail;info.append(h,p);row.append(info);results.append(row);row.style.borderColor=c.ok?"#8BA889":"#B65A5A";});
const summary=document.createElement("h2");summary.textContent=checks.filter(c=>c.ok).length+" / "+checks.length+" comprobaciones superadas";results.prepend(summary);
if(checks.some(c=>!c.ok))document.title="ERROR · "+document.title;else document.title="OK · "+document.title;