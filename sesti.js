////////////////////////////////////8.5
// let n = prompt("unesi recenicu");

// console.log(n.split(" ").length);

//////////////////////////////////////8.6
// let samoglasnik = ["a", "i", "e", "o", "u", "A", "I", "E", "O", "U"];

// while (true) {
//   let brsamoglasnik = 0;
//   let suglasnik = 0;
//   let n = prompt("unesi rec");
//   if(n==="0")break
//   for(let i=0;i<n.length;i++)
// //   if(samoglasnik.includes(n[i]))
// if(n[i]==="a"|| n[i]==="e"|| n[i]==="i" || n[i]==="u" || n[i]==="o"){
//     brsamoglasnik++
// }
// else{suglasnik++}
// i++
// }

//////////////////8.7
// while (true) {
//   let c = prompt("unesi nesto:");
//   let veliko = 0;
//   let malo = 0;

//   if (c[i]===c[i].toUpperCase) veliko++;
//   else malo++;
//    con
// }

//////////////////////////8.8
// let n = prompt("unesi reecenicu");
// let a = 0;
// for (let i = 0; i < n.length; i++) {
//   if (n[i] === "a" || n[i] === "A") {
//     a++;
//   }
// }
// console.log(n.trim().length);
// console.log(a);
// console.log(Math.floor((a / n.length) * 100));

////////////////////////////////8.9
// let a = prompt("unesi recenicu");
// let n = 0;
// let p = 0;
// for (let i = 0; i < a.length; i++) {
//   switch (a[i]) {
//     case " ":
//       p++;
//       break;
//     case ",":
//     case ".":
//     case ";":
//     case ":":
//       n++;
//       break;
//     default:
//       break;
//   }
//   if (a === 0) break;
// }
// console.log(n);
// console.log(p);

///////////////////////////// 8.12
// let n = prompt("unesi tekst:");
// let zagrade = 0;
// let otvorena = 0;
// let zatvorena = 0;

// for (let karakter of n){
//  if(karakter==="("){
//     otvorena++
//  }else if(karakter===")"){
//     zatvorena++
//  }
// }
// if(zatvorena===otvorena)console.log
//////////////////////////////////////////////8.13

// let n = prompt("unesi tekst:");
// console.log(n.toLowerCase());

///////////////////

// let n = prompt("uneti tekst");
// let a = "";
// for (let i = 0; i < n.length; i++) {
//   if (i === 0) {
//     a += n[i].toUpperCase();
//   } else {
//     a += n[i].toLowerCase();
//   }
// }
// console.log(a);
// 8.16////

// let n = prompt("unesite tekst");
// let a = " ";
// for (let i = 0; i < n.length; i++) {
//   if (n[i] === " ") {
//     if (a[a.length - 1] !== " ") a += n[i];
//   } else a += n[i];
// }
// console.log(a);

// //////////8.17
// let n = prompt("unesite tekst:");
// let a = n.split(" ");
// for (let word of a) {
//   console.log(word);
// }

///////////////////////
/// \n, prelazak u red
// console.log("nesto \n nesto vise")

///// \t odreduje jednaku udaljenost izmedju reci
// console.log("nesto \t jos nesto \t jos nesto");

// let niz = parseInt(prompt("unesi"));
// let niz2 = [];
// for (let i = 0; i < niz; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz2.push(broj);
// }
// console.log(niz2);

// let niz = parseInt(prompt("unesi"));
// let niz2 = [];
// for (let i = 0; i < niz; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz2.push(broj);
// }
// console.log(niz2.reverse());

// let niz = parseInt(prompt("unesi"));
// let niz2 = [];
// let suma = 0;
// for (let i = 0; i < niz; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz2.push(broj);
// }
// suma = niz2.reduce((a, b) => a + b);
// let sredina = suma / niz;
// console.log(suma);
// console.log(sredina);
