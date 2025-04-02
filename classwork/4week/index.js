// let gun = parseInt(prompt("1-7 arasında bir rəqəm daxil edin:"));

// switch (gun) {
//     case 1:
//         console.log("Bazar ertəsi");
//         break;
//     case 2:
//         console.log("Çərşənbə axşamı");
//         break;
//     case 3:
//         console.log("Çərşənbə");
//         break;
//     case 4:
//         console.log("Cümə axşamı");
//         break;
//     case 5:
//         console.log("Cümə");
//         break;
//     case 6:
//         console.log("Şənbə");
//         break;
//     case 7:
//         console.log("Bazar");
//         break;
//     default:
//         console.log("1-7 arasi rəqəm daxil edin");
// }




// let gun = parseInt(prompt("1-7 arasında bir rəqəm daxil edin:"));

// if (gun === 1) {
//     console.log("Bazar ertəsi");
// } else if (gun === 2) {
//     console.log("Çərşənbə axşamı");
// } else if (gun === 3) {
//     console.log("Çərşənbə");
// } else if (gun === 4) {
//     console.log("Cümə axşamı");
// } else if (gun === 5) {
//     console.log("Cümə");
// } else if (gun === 6) {
//     console.log("Şənbə");
// } else if (gun === 7) {
//     console.log("Bazar");
// } else {
//     console.log("1-7 arasi rəqəm daxil edin");
// }








// let bal = parseInt(prompt("Bal daxil edin (0-100):"));

// switch (true) {
//     case (bal >= 90 && bal <= 100):
//         console.log("A");
//         break;
//     case (bal >= 80 && bal < 90):
//         console.log("B");
//         break;
//     case (bal >= 70 && bal < 80):
//         console.log("C");
//         break;
//     case (bal >= 60 && bal < 70):
//         console.log("D");
//         break;
//     case (bal >= 50 && bal < 60):
//         console.log("F");
//         break;
//     case (bal < 50 && bal >= 0):
//         console.log("Kəsildi!");
//         break;
//     default:
//         console.log("0-100 arası bal daxil edin!");
// }



// let bal = parseInt(prompt("Bal daxil edin (0-100):"));

// if (bal >= 90 && bal <= 100) {
//     console.log("A");
// } else if (bal >= 80 && bal < 90) {
//     console.log("B");
// } else if (bal >= 70 && bal < 80) {
//     console.log("C");
// } else if (bal >= 60 && bal < 70) {
//     console.log("D");
// } else if (bal >= 50 && bal < 60) {
//     console.log("F");
// } else if (bal < 50 && bal >= 0) {
//     console.log("Kəsildi!");
// } else {
//     console.log("0-100 arası bal daxil edin!");
// }


// let role = prompt("Rolu daxil edin (admin/editor/user):");
// let giris = true;
// if (giris) {

//     if (role === "admin") {
//         console.log("admine icaze verildi");
//     } else if (role === "editor") {
//         console.log(" redakte icazesi verildi");
//     } else if (role === "user") {
//         console.log("icaze verildi");
//     } else {
//         console.log("girise icaze yoxdur");
//     }

// } else {
//     console.log("Giris olmadi ");
// }









// let yas = prompt("Yaşınızı daxil edin:");

// console.log(yas >= 18 ? "Səs verə bilər" : "Səs verə bilməz");


// let password = prompt("Parolu daxil edin");

// console.log(password.length >= 8 ? "Güclü parol" : "Zəif parol");


// let a = parseInt(prompt("Birinci ədədi daxil edin:"));
// let b = parseInt(prompt("İkinci ədədi daxil edin:"));

// console.log(a > b ? "Birinci ədəd böyükdür" : a < b ? "İkinci ədəd böyükdür" : "Bərabərdir");


// let bal = parseInt(prompt("Balı daxil edin"));

// let netice = bal >= 90 ? "A" 
//             : bal >= 80 ? "B" 
//             : bal >= 70 ? "C" 
//             : bal >= 60 ? "D" 
//             : bal >= 50 ? "F" 
//             : "Kəsildi";

// console.log("nəticə: " + netice);



// let password = prompt("Yeni şifrənizi daxil edin:");
// let confirmPassword = prompt("Şifrənizi təsdiq edin:");

// console.log(password === confirmPassword ? "Şifrə yeniləndi" : "Şifrələr uyğun deyil");


let likes = parseInt(prompt("Bəyənmə sayı:"));

let cavab = likes === 0 ? "Heç kim bəyənməyib" :
              likes === 1 ? "1 nəfər bəyəndi" :
              likes === 2 ? "2 nəfər bəyəndi" :
              `${likes} nəfər bəyəndi`;

console.log(cavab);
