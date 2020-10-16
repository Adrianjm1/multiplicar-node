const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('----------- TABLA  ---------'.red);
    for (let i = 0; i < limite; i++) {

        base1 = base * (i + 1);
        console.log(`${base} x ${i+1} = ${base1}\n`);


    }

}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de ${base} no es un numero mano`)
            return;
        }
        let data = '';

        const fs = require('fs');

        for (let i = 0; i < limite; i++) {

            base1 = base * (i + 1);
            data += (`${base} x ${i+1} = ${base1}\n`);


        }


        fs.writeFile(`tablas/tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla${base}.txt`)
            console.log('The file has been saved');

            console.log(`El archivo` +
                ` tabla-${base}.txt ha sido creado`.green);
        });

    })
}

module.exports = {

    crearArchivo,
    listarTabla


}