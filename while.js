// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// let i = 0;

// do {
//   i++;
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// } while (i < 10);
// let i = 0;

// do {
//   console.log(i);
//   i+=2
//  } while (i < 10);

/////////////////////////////////////////////////
// let i = 0;
// do {
//   i = parseFloat(prompt("unesi broj:"));
//   console.log(i);
// } while (i * i >= 100);

////////////////////////////////////////////////////

// let n = parseFloat(prompt("unesi broj:"));
// let i = 0;
// let broj = 2;
// do {
//   console.log(Math.pow(broj, i));
//   i++;
// } while (Math.pow(broj, i) <= n);

//////////////////////////////////////////////////

// let d = parseFloat(prompt("unesi donju granicu:"));
// let g = parseFloat(prompt("unesi gronju granicu:"));

// let x = d;
// do {
//   if (d < 0 || g > 100) {
//     d = parseFloat(prompt("unesi donju granicu:"));
//     g = parseFloat(prompt("unesi gronju granicu:"));
//     let x = d;
//   } else {
//     if (x % 4 === 0) {
//       console.log(x);
//     }
//     x++;
//   }
// } while (d < x && x < g);
///////////////////////////////////////////////////

// let x = 100;
// let suma = 0;
// do {
//   if (x % 64 === 0) {
//     suma += x;
//   }
//   x++;
// } while (x <= 999);
// console.log(suma);

let n = parseFloat(prompt("unesi broj n:"));
let broj = 0;
let brojac = 0;

if (n <= 0 || n >= 10)
  do {
    n = parseFloat(prompt("unesi broj n:"));
  } while (n <= 0 || n >= 10);
do {
  broj = parseInt(prompt("unesi broj;"));
  let pom = broj;
  while (broj > 10) {
    pom = Math.floor(pom / 10);
  }
  if (pom === n) {
    brojac++;
  }
} while (broj != 0);

console.log(brojac);
