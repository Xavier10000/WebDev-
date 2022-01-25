let n=7;
// 1
let str = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    str += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
// 2
let str2 = "";
for (let i = n; i >= 1; i--) {
  for (let j = n-i; j > 0; j--) {
    str2 += " ";
  }
  for (let k = 0; k < i; k++) {
    str2 += "*";
  }
  str2 += "\n";
}
console.log(str2);
// 3
let str3 = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    str3 += j;
  }
  str3 += "\n";
}
console.log(str3);
// 4

const Number = parseInt(prompt('Enter number: '));

for (let i = 0; i <= Number; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
// 5
const loNumber = parseInt(prompt('Enter low number: '));
const HiNumber = parseInt(prompt('Enter high number: '));

for(i=loNumber; i<=HiNumber; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}
// 6
for(i=loNumber; i<=HiNumber; i++){
  if(i % 2 != 0){
    console.log(i);
  }
}