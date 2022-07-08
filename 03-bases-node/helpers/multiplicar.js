const fs = require('fs');

require('colors');

const crearArchivo = async (base = 5, listar, hasta = 10) => {
    try {
        let salida = "";
        let consola = "";

        consola += '================== \n';
        consola += `   Tabla del ${base} \n`;
        consola += '================== \n';

        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i} \n`);
            consola += (`${base} ${'x'.yellow} ${i} = ${base * i} \n`);
        }

        if (listar) {
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}