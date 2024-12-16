// const number = +prompt("Raqam kiriting:");

// for (let i = 1; i <= 10; i = i + 1) {
//   console.log(`${i} x ${number} = ${number * i}`);
// }

// const text = "Hello World. How are you ? Good Night. Nice to meet you";

// for (let i = 0; i < text.length; i++) {
//   if (text[i] == "e") {
//     console.log(1);
//   }
// }

// HOMEWORK

// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

const k = 3;
const n = 4;

if (n > 0) {
  for (let i = 0; i < n; i++) {
    console.log(k);
  }
} else {
  console.log("Xato");
}

// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

const kgKonfet = 10000;
for (let i = 0.1; i <= 1; i += 0.1) {
  let kg = i.toFixed(1);
  let narx = (kgKonfet * i).toFixed();
  console.log(`${kg} kg konfet narxi ${narx} so'm`);
}

// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... +(2*n)^2

const number = 5;

if (n > 0) {
  let s = 0;
  for (i = number; i <= 2 * number; i++) {
    s += i ** 2;
  }
  console.log(`S: ${s}`);
}

// For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

const raqam = 5;

let S = 0;
for (let i = 1; i <= raqam; i++) {
  S += i ** (raqam - i + 1);
}
console.log(`S: ${S}`);

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

const A = 1;
const B = 9;

for (let i = A; i <= B; i++) {
  let box = "";
  for (let j = 1; j <= i; j++) {
    box += i + " ";
  }
  console.log(box);
}

// For6. Sonning bo’luvchilarini topish;

// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// while 1

let N = 20;
let K = 5;

let butun = 0;
let qoldiq = N;

while (qoldiq >= K) {
  qoldiq -= K;
  butun++;
}

console.log(`Butun sonlar: ${butun}`);
console.log(`Qoldiq: ${qoldiq}`);

// while 2

let son = 128;
let daraja = 0;
let darajaniXisoblash = 1;

while (darajaniXisoblash < son) {
  darajaniXisoblash *= 2;
  daraja++;
}

if (darajaniXisoblash === son) {
  console.log(`n = 2 ning ${daraja}-darajasi`);
} else {
  console.log("Xato");
}
