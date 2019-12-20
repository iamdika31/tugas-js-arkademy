const contoh_object = {
    motor:["merah","kuning"],
    mobil : {
        ban :4,
        warna : "hitam" , 
        transmisi : {
            manual : "6-kecepatan",
            automatic : "4- kecepatan"
        }
    }
}

//menampilkan nilai array dari object motor
console.log(contoh_object.motor)

//menampilkan 3 level nested object mobil
console.log(contoh_object.mobil.transmisi.manual)