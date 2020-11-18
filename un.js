const fs = require("fs")

fs.readFile('arquivo.txt',(err,data)=>{
    if(err) throw err;
    console.log(data);

    fs.unlink('arquivo.txt',(unlinkerr)=>{
        if(unlinkerr) throw unlinkerr;
        console.log("Arquivo excluido com sucesso!")
    })
})

//fs.unlinkSync('arquivo.txt');