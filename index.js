const { access } = require('fs/promises');
const readXlsxFile = require('read-excel-file/node');
readXlsxFile('./Alunos.xlsx').then((rows) => {




    for (let index = 0; index < rows.length; index++) {
        if (rows[0][index] != undefined) {
            console.log("Sequência dos dados: " + [index + 1] + " " + rows[0][index])
        }
    }

    var x = 0;
    do {

        for (let index = 0; index < rows.length; index++) { 
                console.log(rows[index][x])
        }
        x = x + 1
    } while (x<4);
});