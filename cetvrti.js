// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }
////////////////////////////////// 7.11

/////////////////////////////////////
// let n = prompt("unesi slovo");
// switch (n) {
//   case "a":
//     console.log("slovo je samoglasnik");
//     break;
//   case "e":
//     console.log("slovo je samoglasnik");
//     break;
//   case "i":
//     console.log("slovo je samoglasnik");
//     break;
//   case "o":
//     console.log("slovo je samoglasnik");
//     break;
//   case "u":
//     console.log("slovo je samoglasnik");
//     break;
//   case "A":
//     console.log("slovo je samoglasnik");
//     break;
//   case "E":
//     console.log("slovo je samoglasnik");
//     break;
//   case "I":
//     console.log("slovo je samoglasnik");
//     break;
//   case "O":
//     console.log("slovo je samoglasnik");
//     break;
//   case "U":
//     console.log("slovo je samoglasnik");
//     break;
//   default:
//     console.log("slovo je suglasnik");
// }
///////////////////////////////////////////// 7.20

///////////////////////////////////////////////// 7.24
// let m = parseInt(prompt("unesi broj"));
// let g = parseInt(prompt("unesi godinu"));
// switch (m) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 2:
//     if ((g % 4 === 0 && g % 100 != 0) || g % 400 === 0) {
//       console.log(29);
//     } else console.log(28

//       );
//     break;
//   default:
//     console.log("broj je van opsega");
//     break;
// }
////////////////////////////////////////////////

// let m = parseInt(prompt("unesi broj"));
// let g = parseInt(prompt("unesi godinu"));

// switch (m) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   case 2:
//     if ((g % 4 === 0 && g % 100 != 0) || g % 400 === 0) {
//       console.log(29);
//     } else console.log(28);
//   }

/////////////////////////////////////////////////
// let dan = parseInt(prompt("unesi dan"));
// let m = parseInt(prompt("unesi broj"));
// let g = parseInt(prompt("unesi godinu"));
// switch (m) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     d = 31;
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     d = 31;

//     break;
//   case 2:
//     if ((g % 4 === 0 && g % 100 != 0) || g % 400 === 0) {
//       d = 29;
//     } else d = 28;
//     break;
// }
// if (dan >= d) {
//   dan = 1;
//   m++;
// } else dan++;
// if (m > 12) {
//   m = 1;
//   g++;
// }
// console.log(dan, m, g);
///////////////////////////////////////////////////////////////////

// function max(a, b) {
//   if (a === b) return a;
//   else if (a > b) return a;
//   else if (b > a) return b;
// }
// let broj1 = parseInt(prompt("unesi broj"));
// let broj2 = parseInt(prompt("unesi broj"));
// let broj3 = parseInt(prompt("unesi broj"));
// let broj4 = parseInt(prompt("unesi broj"));

// let max1 = max(broj1, broj2);
// let max2 = max(broj3, broj4);
// console.log = max(max1, max2);
/////////////////////////////////////////////

// let r = parseFloat(prompt("unesi poluprecnik:"));

// function povrsina() {
//   let broj1 = 4 * r * r * 3.14;
//   console.log(broj1);
// }
// function zapremina() {
//   let broj = (4 / 3) * r * r * r * 3.14;
//   console.log(broj);
// }
// zapremina();
// povrsina();
// ///////////////////////////////////////

// let a = parseInt(prompt("unesi A"));
// let b = parseInt(prompt("unesi B"));
// let suma = 0;

// function parni() {
//   for (let i = a; i <= b; i++) {
//     if (i % 2 !== 0) continue;
//     suma += i * i;
//   }
//   return suma;
// }

// function neparni() {
//   for (let i = a; i <= b; i++) {
//     if (i % 2 === 0) continue;
//     suma += i * i;
//   }
//   return suma;
// }
// function svi() {
//   for (let i = a; i <= b; i++) {
//     suma += i * i;
//   }
//   return suma;
// }
// let parnii = parni(suma);
// let neparnii = neparni(suma);
// let svii = svi(suma);
// console.log(svii);
////////////////////////////////////////////////// 9.7

////////////////////////////////////////////////////9.11
// let n = parseInt(prompt("unesi broj"));
// let p = 1;
// function faktorije(n) {
//   for (let i = 1; i <= n; i++) {
//     p *= i;
//   }
//   return p;
// }

// console.log(faktorije(n));

// function sumaF(n) {
//   let suma = 0;
//   for (let i = 1; i <= n; i++) {
//     suma += faktorije(i);
//   }
//   return suma;
// }
// console.log(sumaF(n));
////////////////////////////////////////// 9.12

// function faktorije(n) {
//   let p = 1;
//   for (let i = 1; i <= n; i++) {
//     p *= i;
//   }
//   return p;
// }
// for (a = 1; a <= 9; a++) {
//   for (b = 0; b <= 9; b++)
//     for (c = 0; c <= 9; c++)
//       if (a * 100 + b * 10 + c == faktorije(a) + faktorije(b) + faktorije(c)) {
//         console.log(a, b, c);
//       }
// }

/////////////////////////////////////////////////9.15

// function prost(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }

// for (let i = 1; i < 500; i++) {
//   if (prost(i)) console.log(i);
// }

// //////////////////////////////// 9.17

// function kub(n) {
//   let broj = 0;
//   for (let i = 1; i <= n; i++) {
//     broj = i * i * i;
//   }
//   return broj;
// }
// for (a = 1; a <= 9; a++)
//   for (b = 0; b <= 9; b++)
//     for (c = 0; c <= 9; c++)
//       if (a * 100 + b * 10 + c === kub(a) + kub(b) + kub(c)) {
//         console.log(a, b, c);
//       }
// function sumaKubova(n){

// }

///////////////////////////////////////////////9.18

// function suma(n) {
//   return (n % 10) + (Math.floor(n / 10) % 10) + (Math.floor(n / 100) % 10);
// }
// function nivenov(n) {
//   if (n % suma(n
//     ) === 0) return true;
//   return false;
// }

// for (let i = 101; i < 200; i++) {
//   if (nivenov(i)) {
//     console.log(i);
//   }
// }
///////////////////////////////////9.27


