const a=[{name:"Tom",gender:"male"},{name:"Cruise",gender:"male"},{name:"Ajith",gender:"male"},{name:"Serena",gender:"female"},{name:"Williams",gender:"female"}];
console.log(a.filter((a)=>a.gender=="female").map((a)=>a.name));