


//let firstName = 'saidalwymna'

//let result = firstName.split("").reverse("").join("")

//console.log(result, "==> Ini Hasilnya");

//atau

//let firstName = "saidalwymna"

//let result1 = firstName.split("")

//let result2 = result1.reverse("")

//let result3 = result2.join("")

//console.log(result1, "==> step 1");
//console.log(result2, "==> step 2");
//console.log(result3, "==> step 3 Final");


//arrow function

//let agregateScoreMUAndLiverpool = (scoreMU, scoreLiverpool) => {
//    return `Score MU ${scoreMU} vs Score Liverpool ${scoreLiverpool}`
//}

//atau

//let agregateScoreMUAndLiverpool = (scoreMU, scoreLiverpool) => `Score MU ${scoreMU} vs Score Liverpool ${scoreLiverpool}`

//let finalScore = agregateScoreMUAndLiverpool(0,7)

//console.log(finalScore);


// Latihan Soal

 /* Soal latihan logic dan Function

 * 

 * 1. Buatlah sebuah function yang mengembalikan jumlah huruf yang terkandung dalam parameter function

 * febri => 5

 * 

 * 2. Buatlah sebuah function untuk menghitung jumlah kata yyang terkanudng dari parameter function. 

 * Funtion tersebut akan mengembalikan angka dari jumlah kata tersebut

 * saya makan sop buntut => 4

 * 

 * 3. Buatlah sebuah function untuk membuat sistem kalkulator sederhana yang dimana akan mengembalikan hasil operasi yang diinput user. 

 * Function ini mempunyai 3 parameter, paramter 1 dan 2 value input user, dan parameter 3 input operator (+, -, *, /)

* 4. Buatlah sebuah function yang menerima sebuah string dan mengembalikan true jika string tersebut palindrome.

 * Palindrome adalah string yang sama jika dibaca dari depan ataupun belakang, contoh:

 * kodok = true

 * kasur rusak = true

 * mie ayam = false

 * 

 * 5. Kalian harus buat function untuk menghitung total belanja, parameternya ada 2: parameter diskonya, parameter nominal belanja. 

 * kalian harus mengembalikan value jumlah total belanjanya berapa
 */
 

//1

function namaPeserta (nickname) {
    let result1 = nickname.length
    return result1
}

let cekNamaPeserta = namaPeserta("Febri")
    console.log(cekNamaPeserta, "==> Jumlah Huruf");

//2

function taglinePeserta (motto) {
    let result2 = motto.split(" ").length;
    return result2
    }
    
let cekTaglinePeserta = taglinePeserta("I Love You But Im Letting Go")
    console.log(cekTaglinePeserta, "==> Jumlah Kata");

//3

//function kalkulator (nilai1, operator, nilai2){
//    let result3 = nilai1 operator nilai2
    

//let cekKalkulator = kalkulator (1,"+", 3)
//    console.log(cekKalkulator, "==> hasil kalkulator sederhana");

//4

//function kalimat (palindrome)
//    let result4 = 

// function to check palindrome
function checkPalindrome(str) {
    
// applying split, revere and join
let reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
}

result = checkPalindrome("KODOK")

if(result == true){
	console.log("TRUE");
}
else{
  	console.log("FALSE");
}

//atau

function kataPalindrome (kata) {
    let cekPalindrome = kata.toLowerCase()
    let reverseTxt = cekPalindrome.split("").reverse().join("")
    return cekPalindrome == reverseTxt
}

let cekKataPalindrome = kataPalindrome("kodok ")
    console.log(cekKataPalindrome);


//5

function hargaSetelahDiskon(hargaBarang, diskonBarang) {
    let result5 = hargaBarang - (hargaBarang * diskonBarang)/ 100
    return result5
}

let cekHargaBaru = hargaSetelahDiskon (500000, 25)
    console.log("Harga bararng setelah mendapat diskon yaitu sebesar " + cekHargaBaru)

//atau 

function priceAfterDisc (itemPrice, itemDisc) {
    let valueDisc = (itemPrice * itemDisc)/100
    let totalPrice = itemPrice - valueDisc
    return totalPrice
}

let checkPriceAfterDisc = priceAfterDisc (20000,50)
    console.log(checkPriceAfterDisc);

/*
step by step soal no 3

1. rubah string jadi array,  method split
2. balikin array pakai methode reverse
3. rubah array jadi string pakai join



 
*/ 