const fs = require("fs");

exports.prosesPost = (req, res, next) => {
    let nama = req.body.nama;
    let hobi = req.body.hobi;
    let img = req.files.gambar;
    let lokasi = "./public/images/" + img.name;

    img.mv(lokasi, (err)=>{
        if(err)console.log("Error: "+ err)
        else console.log("Gambar di upload")
    });  
    res.send(img.name);
}

exports.prosesGet = (req, res, next) => {
    let nama = req.query.nama;
    let hobi = req.query.hobi;
    
    res.send(nama);
}

exports.posesParams = (req, res, next) => {
    let nama = req.params.id;  
    res.send("GET "+nama);
}
