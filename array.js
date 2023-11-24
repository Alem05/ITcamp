// niz = [1,2,3,4,5,6,7,8,9]

// console.log(niz.splice(3, 2, -10))

/////////////////////////////////nizovi 2. cas/////////////////////////////////////////
// niz = [0, 5, 4, 3, 7, 8, 9, 1, 6];

// niz.sort((a, b) => a-b)
// console.log(niz);

// niz.reverse()
// console.log(niz)

// console.log(Math.max(...niz))  (tri tacke znaci da otvori ceo navedeni niz)
// console.log(Math.max(...niz))
// console.log(Math.min(...niz))

// let object = {
//     "ime" : "Amela",
//     "prezime" : "Zupic"
// }
// console.log(object);

// let object = {
//     "ime" : "Amela",
//     "prezime" : "Zupic",
//     "broj godina": 16,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// console.log(object);

// let object2 = {...object, "mestostanovanja" : {...object.mestostanovanja}}
// object2["broj godina"] = "17";
// object2["mestostanovanja"]["brojulice"] = "10";
// console.log(object2);

// let niz = [object, object,object]
// console.log(niz)

// let object = {
//     "ime" : "Amela1",
//     "prezime" : "Zupic",
//     "brojgodina": 16,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let object2 = {
//     "ime" : "Amela2",
//     "prezime" : "Zupic",
//     "brojgodina": 17,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let object3 = {
//     "ime" : "Amela3",
//     "prezime" : "Zupic",
//     "brojgodina": 18,
//     "projekti": [1,2,3,4,5],
//     "function": function nesto(){
//         return true
//     },
//     "mestostanovanja" : {
//         "grad" :"Novi Pazar",
//         "ulica" : "Pozega",
//         "brojulice" : "BB"
//     }
// }

// let niz = [object, object2, object3]
// console.log(niz)

// niz2.sort ((a,b) => a.brojgodina + b.brojgodina)
// console.log(niz2)

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let niz3 = [...niz];

// niz3.push(10)

// console.log(niz3);
// console.log(niz);

// let niz = [3, 4, 9, 5, 0, 1, 7]
// let niz3 = [...niz].sort((a, b) => a-b)
// console.log(niz);
// console.log(niz3);

// let niz = [3, 4, 9, 5, 0, 1, 7, 0]
// for(let i = 0; i<niz.length; i++){      prvi nacin
// console.log(niz[i])
// }

// for(let clan of niz){              drugi nacin
//     console.log(clan)
// }

// niz.forEach((clan, i, array)  => {           treci nacin
//     if(clan % 2 === 0){
//         console.log(i + " " + clan);
//     }
//     else {
//         console.log("neparni brojevi" + clan + " " + i);
//     }
//     console.log(array);
// })

// let niz = [3, 4, 9, 5, 0, 1, 7, 0]
// let niz2 = niz.map((clan) => {
//     return clan*2
// })
// console.log(niz)
// console.log(niz2)

// let niz = [3, 4, 9, 5, 0, 1, 7, 0, 8]
// let niz2 = niz.filter((clan, i) =>{
// if(clan % 2 === 0){
//     return clan
// }
// })
// console.log("niz je:" + niz2);

// let niz = [3, 4, 9, 5, 0, 1, 7, 0, 8]
// niz2 = niz.flatMap((clan) => clan + 2)
//     console.log(niz2)

// let niz = [3, 4, 9, 5, 0, 1, 7]
// let suma = niz.reduce((a,b) =>{
//     return a + b
// })
// console.log(suma);

// let niz = [3, 9, 5, 1, 7]
// let res = niz.every(clan => {
//     if(clan % 2 === 0){
//         return true
//     }
// })
// console.log(res);

// let resSome = niz.some(clan =>{
//     if(clan % 3 === 0){
//         return true
//     }
// })

// console.log(resSome)

// let niz = [3, 9, 4, 5, 1, 7]
// let res = niz.find(clan =>{
//     if(clan % 2 === 0){
//         return clan
//     }
// })

// console.log(res)

// let niz = [3, 9, 4, 5, 1, 7]
// let res = niz.find(clan =>{
//     if(clan % 3 === 0){
//         return clan
//     }
// })

// console.log(res)

///////////////////////////////10.4.//////////////////////////////////////////
// let niz = [];

// for(let i = 0; i <= 5; i++){
// let clan = (n = parseInt(prompt("unesi broj n")))
// niz.push(clan)
// }
// console.log(niz);

/////////////////////////////////////////10.5.//////////////////////////////////
// let niz = []

// for(let i = 0; i<=5; i++){
//     let clan = (n = parseInt(prompt("unesi broj n")))
// niz.push(clan)
// }
// niz.reverse()
// console.log(niz)

/////////////////////////////////////////10.7.//////////////////////////////// 10.8 i 10.9
// let brojClanova = parseInt(prompt("Unesite zeljeni broj clanova: "));
// let niz = []

// for(let i = 0; i < brojClanova; i++){
//     let broj = parseFloat(prompt("Unesite broj:"))
//     niz.push(broj)
// }

// let suma = niz.reduce((a, b) => {
//     return a + b
// })

// console.log(`Aritmeticka sredina je: ${suma/brojClanova}`)
//////////////////////////////////////////////////////////////////////////////////

// let niz = parseInt(prompt("unesi"));
// let niz2 = [];
// let suma = 0;
// for (let i = 0; i < niz; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   if (broj % 3 === 0) niz2.push(broj);
// }
// suma = niz2.reduce((a, b) => a + b);
// let sredina = suma / niz2.length;
// console.log(suma);
// console.log(sredina);
///////////////////////10.8

///////////////10.9
// let elementa = parseInt(prompt("unesi"));
// let niz2 = [];
// let niz3 = [];
// let suma = 0;
// let sumaN = 0;
// for (let i = 0; i < elementa; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   if (broj % 2 === 0) niz2.push(broj);
//   else niz3.push(broj);
// }
// suma = niz2.reduce((a, b) => a + b);
// sumaN = niz3.reduce((a, b) => a + b);
// console.log(suma);
// console.log(sumaN);

// let rezP = 0;
// let rezN = 0;
// niz.forEach((clan) => {
//   clan % 2 === 0 ? (rezP += clan) : (rezN += clan);
// });
// console.log(rezP);
// console.log(rezN);

// B)
// let niz = parseInt(prompt("unesi"));
// let niz2 = [];
// for (let i = 0; i < niz; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz2.push(broj);
// }
// let rezP = 0;
// let rezN = 0;
// niz.forEach((clan, i) => {
//   i % 2 === 0 ? (rezP += clan) : (rezN += clan);
// });
// console.log(rezP);
// console.log(rezN);

//////////10.11

// let elementi = parseInt(prompt("unesi"));
// let niz1 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz1.push(broj);
// }
// let elementi2 = parseInt(prompt("unesi Druge"));
// let niz2 = [];
// for (let i = 0; i < elementi2; i++) {
//   let broj = parseInt(prompt("uensi druge brojeve"));
//   niz2.push(broj);
// }
// console.log(niz1);
// console.log(niz2);

// console.log(niz2.concat(niz1));

/////////////////////////

// let elementi = parseInt(prompt("unesi"));
// let niz1 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz1.push(broj);
// }
// let niz2 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi druge brojeve"));
//   niz2.push(broj);
// }
// console.log(niz1);
// console.log(niz2);

// let niz3 = niz1.map((clan, i) => {
//   return clan + niz2[i];
// });
//  let suma = [];
// niz1.forEach((clan, i) => {
//   suma.push(clan + niz2[i]);
// });
// console.log(suma);
////////////////////10.14

// let elementi = parseInt(prompt("unesi"));
// let niz1 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz1.push(broj);
// }
// let niz2 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi druge brojeve"));
//   niz2.push(broj);
// }
// console.log(niz1);
// console.log(niz2);
// let niz3 = niz2.reverse();

// let suma = [];
// niz1.forEach((clan, i) => {
//   suma.push(clan + niz3[i]);
// });
// console.log(suma);

////////////////10,15
// let elementi = parseInt(prompt("unesi"));
// let niz1 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("uensi broj"));
//   niz1.push(broj);
// }
// let elementi2 = parseInt(prompt("unesi Druge"));
// let niz2 = [];
// for (let i = 0; i < elementi2; i++) {
//   let broj = parseInt(prompt("uensi druge brojeve"));
//   niz2.push(broj);
// }
// console.log(niz1);
// console.log(niz2);
// let niz3 = [];

// niz3 = niz1.concat(niz2).filter((clan) => {
//   if (clan % 2 === 0) {
//     return clan;
//   }
// });
// console.log(niz3);
///////////////////////////////10.16 

// let elementi = parseInt(prompt("unesi"));
// let niz1 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("unesi broj"));
//   niz1.push(broj);
// }
// let niz2 = [];
// for (let i = 0; i < elementi; i++) {
//   let broj = parseInt(prompt("unesi druge brojeve"));
//   niz2.push(broj);
// }

// let niz3 = [];

// for (let i = 0; i < elementi; i++) {
//   if (niz1[i] < niz2[i]) {
//     niz3.push(niz1[i]);
//   } else if (niz1[i] > niz2[i]) {
//     niz3.push(niz2[i]);
//   } else niz3.push(0);
// }
//  console.log(niz3)

///////////////////////10.17

// let n = parseInt(prompt("unesi duzinu n"));
// let a = [];
// let b = [];
// let c = [];
// for (let i = 0; i < n; i++) {
//   let broj = parseInt(prompt("unesi A"));
//   a.push(broj);
// }
// for (let i = 0; i < n; i++) {
//   if (a[i] >= 0) {
//     c.push(a[i]);
//   } else b.push(a[i]);
// }
// console.log(a);
// console.log(b);
// console.log(c);

///////////////10.18

// let n = parseFloat(prompt("unesi n"));
// let a = [];
// let b = [];
// let suma = 0;
// for (let i = 0; i < n; i++) {
//   let broj = parseFloat(prompt("unesi broj a"));
//   a.push(broj);
// }

// for (let i = 0; i < n; i++) {
//   suma += a[i];
// }
// for (let i = 0; i < n; i++) {
//   if (a[i] > Math.round(suma / n)) {
//     b.push(a[i]);
//   }
// }
// console.log(a);
// console.log(Math.round(suma / n));
// console.log(suma);
// console.log(b);

//////////////////10.19
// let n = parseInt(prompt("unesi n"));
// let a = [];
// let b = [];
// let c = 0;
// for (let i = 0; i < n; i++) {
//   let broj = parseFloat(prompt("unesi broj a"));
//   a.push(broj);
// }

// for (let i = 0; i < n; i++) {
//   c += a[i];
//   b.push(c);
// }
// console.log(a);
// console.log(b);
