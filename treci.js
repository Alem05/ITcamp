// let n;

// for (let i = 0; i < n; i++) {
//   let n = parseInt(prompt("unesi pozitivan broj:"));
//   if (n < 0) break;
//   console.log(n * n);
// }

// let n;
// do {
//   n = parseInt(prompt("unesi broj"));
//   if (n < 0) break;
//   console.log(n * n);
// } while (true);
// let n;
// let a = "";
// // do {
// //   n = parseInt(prompt("unesi broj:"));
// //   let a += n;
// //   if (n === 0 || n === 100) break;
// //   console.log(a);
// // } while (true);

// for (let i = 0; i < 100; i++) {
//   n = parseInt(prompt("unesi broj:"));
//   if (n === 0) break;
//   a += `${n},`;
// }
// console.log(a);

// for (let i = 1; i <= 500; i++) {
//   if (i % 3 === 0 && i % 4 === 0 && i % 5 === 0 && i % 7 === 0) {
//     console.log(i);
//     break;
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   let j = 2;
//   for (; j < i; j++) {
//     if (i % j === 0) break;
//   }
//   if (i === j) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 != 0) continue;
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0) continue;
//   console.log(i);
// }

// let n = 0;
// let suma = 0;

// for (let i = 0; true; i++) {
//   n = parseInt(prompt("unesi pozitivan broj:"));
//   if (n < 0) continue;
//   if (n === 0) break;
//   suma += 1 / (n * n);
// }
// console.log(suma);

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

// let n = parseInt(prompt("unesi prvi broj"));
// let a = parseInt(prompt("unesi drugi broj"));
// let znak = prompt("unesi operaciju");

// switch (znak) {
//   case "+":
//     console.log(n + a);
//     break;
//   case "-":
//     console.log(n - a);
//     break;
//   case "*":
//     console.log(n * a);
//     break;
//   case "/":
//     console.log(n / a);
//     break;
//   default:
//     console.log("unesi operaciju");
// }

let m = parseInt(prompt("unesi broj"));
let g = parseInt(prompt("unesi godinu"));
switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(31);
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30);
    break;
  case 2:
    if ((g % 4 === 0 && g % 100 != 0) || g % 400 === 0) {
      console.log(29);
    } else console.log(28);
    break;
  default:
    console.log("broj je van opsega");
    break;
}
