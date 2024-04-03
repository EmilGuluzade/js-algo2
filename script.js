//! 1.verilmish ededin 3-un quvveti olub, olmadigini tapan alqoritm yazin.

// let num = parseInt(prompt("Ədədi daxil edin:"));

// let quvvetdeyil = true;
// for (let i = 3; i <= num; i *= 3) {
//     if (num == i) {
//         console.log(num + " ədədi 3-ün quvvətidir.");
//         quvvetdeyil = false;

//     }
// }

// if (quvvetdeyil) {
//     console.log(num + " 3-ün quvvəti deyil.");
// }

//! 2.verilmish ededin Polidrom olub olmadigini yoxlayin. Polidrom ededlere numune:11 121 888 9119.

// let eded = prompt("Ədədi daxil edin:");

// let uzunluq = eded.length;
// let check = true;

// for (let i = 0; i < parseInt(uzunluq) / 2; i++) {
//   if (eded[i] !== eded[uzunluq - 1 - i]) {
//     check = false;
//   }
// }

// if (check) {
//   console.log(eded + " polidrom ededdir.");
// } else {
//   console.log(eded + " polidrom deyil.");
// }

//! 3. Verilmis ededin en yaxin asagi kokalti deyerini tapan alqoritm (imisalcun eded 20-dirse 4 qaytarmalidi, 25-dise 5 qaytarmalidi, 16-drisa 4 ve s.)

// let num = parseInt(prompt( 'Ədəd daxil edin: '));
// let a , b = num/ 2;

// do {
//    a = b;
//    b = (a + (num / a)) / 2;
// } while (a !== b);

// console.log(a |0);

//! 4.Verilmis array-deki reqemlerinin cemi 10-dan kicik olan ededlerin sayini tapan alqoritm


// let a = [155, 23, 445, 6, 8, 99];
// let count = 0;

// for (let i = 0; i < a.length; i++) {
//   let num = a[i];
//   let sumOfDigits = 0;

//   for (; num > 0; num = (num / 10) | 0) {
//     sumOfDigits += num % 10;
//   }

//   if (sumOfDigits < 10) {
//     count++;
//   }
// }

// console.log(count);
