const a=[{name:"Tom",gender:"male"},{name:"Cruise",gender:"male"},{name:"Ajith",gender:"male"},{name:"Serena",gender:"female"},{name:"Williams",gender:"female"}];
const b=a.filter((a)=>a.gender=="male").map((a)=>a.name);
console.log(b.length);