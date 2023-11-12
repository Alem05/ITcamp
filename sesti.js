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
let a = prompt("unesi recenicu");
let n = 0;
let p = 0;
for (let i = 0; i < a.length; i++) {
  switch (a[i]) {
    case " ":
      p++;
      break;
    case ",":
    case ".":
    case ";":
    case ":":
      n++;
      break;
    default:
      break;
  }
  if (a === 0) break;
}
console.log(n);
console.log(p);
