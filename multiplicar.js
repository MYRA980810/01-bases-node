const fs = require('fs');
const colors = require('colors');

const crearTabla = async(base = 5, listar = false, hasta = 10) =>  {
    try {
        let salida = '';
        let consola = '';
        for(i = 1;i <= hasta; i++){
            salida  += `${base} X ${i} = ${base * i}\n`;
            consola += `${base} ${'X'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if(listar == true){
            console.log('======================='.green);
            console.log("  Tabla del: ".green, colors.blue(base));
            console.log('======================='.green);
            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/tabla-del-${base}.txt`,salida);
    
        return `tabla-del-${base}.txt`.rainbow;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearTabla
}