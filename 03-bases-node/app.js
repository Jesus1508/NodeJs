const fs = require('fs');

//Tablas de multiplicar
let salida = "";

const base = 2;

console.clear();
salida += '================== \n';
salida +=  `   Tabla del ${base} \n`;
salida += '================== \n';

for (let i=1; i<11; i++) {
    salida += (`${base} x ${i} = ${base*i} \n`);
}

console.log(salida)

fs.writeFileSync(`tabla-${ base }.txt`, salida);

console.log(`tabla-${base}.txt creada`)

// fs.writeFile(`tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creada`)
// });


