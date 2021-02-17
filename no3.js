const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray)=>{
    if (typeof(nilaiAwal) === 'number' && typeof(nilaiAkhir) === 'number' && typeof(dataArray) === 'object' ) {
        const cari = dataArray.filter((x)=> {
            return x < nilaiAkhir;
            // nilai awal belum masuk
            // hasil belum disortir
        })
        if (nilaiAwal>nilaiAkhir) {
            console.log('Nilai akhir harus lebih besar dari nilai awal');
        }else if (dataArray.length < 5) {
            console.log('Jumlah angka dalam dataArray tidak ada');
        }else{
            console.log(cari);
        }
    }else{
        console.log("Masukkan Data yang benar");
    }
}
seleksiNilai(1,17,[1,2,4,6,9,10,15,19,20,90,54,3,4,5,6,7,8,9,10,13,16,17])

