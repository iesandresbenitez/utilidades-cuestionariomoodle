const read=k=>{try{return JSON.parse(localStorage.getItem(k)||"[]")}catch(e){console.warn("LocalStorage no disponible",e);return[]}};
const write=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));return true}catch(e){console.warn("No se pudo guardar",e);return false}};
export const getTemplates=()=>read("mpl.templates.v1");
export const saveTemplate=x=>write("mpl.templates.v1",[{...x,id:String(Date.now()),createdAt:new Date().toISOString()},...getTemplates()]);
export const deleteTemplate=id=>write("mpl.templates.v1",getTemplates().filter(x=>x.id!==id));
export const getHistory=()=>read("mpl.history.v1");
export const addHistory=x=>write("mpl.history.v1",[{...x,id:String(Date.now()),createdAt:new Date().toISOString()},...getHistory()].slice(0,30));