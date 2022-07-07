const fs = require('fs');

// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         let salida = "";

//         salida += '================== \n';
//         salida +=  `   Tabla del ${base} \n`;
//         salida += '================== \n';

//         for (let i=1; i<11; i++) {
//             salida += (`${base} x ${i} = ${base*i} \n`);
//         }

//         console.log(salida)

//         fs.writeFileSync(`tabla-${ base }.txt`, salida);

//         resolve(`tabla-${ base }.txt`);
//     });
// }

const crearArchivo = async (base = 5, listar) => {
    try {
        let salida = "";

        salida += '================== \n';
        salida += `   Tabla del ${base} \n`;
        salida += '================== \n';

        for (let i = 1; i < 11; i++) {
            salida += (`${base} x ${i} = ${base * i} \n`);
        }

        if (listar) {
            console.log(salida)
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}