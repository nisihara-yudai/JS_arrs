// 練習問題
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twice_numbers = numbers.map(function (number) {
  if (number % 2 == 0) {
    return number * 2;
  }
  console.log(number);
});

console.log(twice_numbers);