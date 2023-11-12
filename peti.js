// function fakt(n) {
//   console.log("dobiej je broj" + n);
//   if (n === 1) return 1;
//   return n * fakt(n - 1);
// }
// fakt(5);

//////////////////////////////// 9.30

// function stepen(a, b) {
//   if (b === 0) return true;
//   return a * stepen(a, b - 1);
// }
// stepen(5, 4);
// console.log(stepen(5, 4));

/////////////////////////////// 9.31

// function suma(n) {
//   if (n === 1) return true;
//   return n + suma(n - 1);
// }
// console.log(suma(6));

//////////////////////////////////////////////////////////9.32

// function brojevi(n) {
//   if (n === 0) return true;
//   console.log(n);
//   return brojevi(n - 1);
// }
// brojevi(9);

//////////////////////////////9.34

// function suma(n) {
//   if (n === 0) return 0;
//   return (n % 10) + suma(Math.floor(n / 10));
// }
// console.log(suma(333));

// /////////////////9.35

// let niz=[1,1]
// let clanovi=7
// for(i=2;i<=clanovi;i++){
//     niz.push(niz[i-1]+niz[i-2])
// }

function fibo(n) {
  let niz = [1, 1];
  for (i = 2; i <= n; i++) {
    niz.push(niz[i - 1] + niz[i - 2]);
  }
  return niz;
}
fibo(7);
