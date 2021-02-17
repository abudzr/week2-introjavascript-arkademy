// Soal
// Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya

// method pada array
var arr = ['abu','dzar','al-ghifari','dwi','ghozi','al-khoiri'];
// 1. join : untuk menggabungkan seluruh isi array dan mengubahnya menjadi sebuah string
// contoh :
// console.log(arr.join());

// 2. pop : untuk menghilangkan elemen terakhir pada sebuah array
// contoh :
// arr.pop();
// console.log(arr);

// 3. unshift : untuk menambahkan elemen baru di awal pada sebuah array
// Contoh:
// arr.unshift('saya');
// console.log(arr);

// 4. shift : untuk menghilangkan elemen pertama pada sebuah array
// contoh:
// arr.shift();
// console.log(arr);

// 5. splice : untuk menambahkan elemen baru sambil menghapus elemen lama pada sebuah array.
// splice (index awal, mau dihapus berapa,elemen baru1)
// contoh:
// arr.splice(2,0,'zaid','dwi');
// console.log(arr);

// 6. slice: untuk mengambil beberapa bagian pada sebuah array dan menjadikannya sebuah array yang baru
// slice(indexawal, indexakhir)
// contoh:
// var arr2 = arr.slice(0,3);
// console.log(arr2);

// 7. find : Untuk mencari elemen pada array dan mengembalikan hanya satu nilai
// contoh :
// var number = [1,2,6,7,8,9,4,9,10,8]
// var number2 = number.find(function (e) {
//     return e == 8;
// });
// console.log(number2);

// 8. concat : untuk menggabungkan 2 array menjadi 1 array.
// contoh:
// const animal = ['cat','dog']
// const fruits = ['apel', 'banana', 'mango']

// const newArray = animal.concat(fruits);
// console.log(newArray);

// 9. reverse : untuk membalikkan urutan dari elemen di dalam array.
// contoh:
// arr.reverse();
// console.log(arr);
// 
// 10. length : untuk mengetahui berapa banyak/panjang elemen 
// // contoh:
// const arr2 = arr.length;
// console.log(arr2);



