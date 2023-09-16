/// Написать код функции 'findUnique', которая за один проход вернет все уникальные числа (Не использовать Set).
const firstArray = [1, 2, 5, 7, 7, 11, 12, 11, 1, 12];

function findUnique(arr) {
  let unique = [];
  let count = {};

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count[num] = count[num] ? count[num] + 1 : 1;
  }

  for (let num in count) {
    if (count[num] === 1) {
      unique.push(parseInt(num));
    }
  }

  return unique;
}

console.log(findUnique(firstArray));

/// В последовательности записаны целые числа от 1 до N в произвольном порядке, но одно из чисел пропущено, остальные встречаются ровно по одному разу.  N заранее неизвестно. Определить пропущенное число.
const secondArray = [2, 1, 3, 5];
function findMissing(arr) {
  const n = arr.length + 1;
  const sum = ((1 + n) * n) / 2;
  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum = arrSum + arr[i];
  }
  return sum - arrSum;
}

console.log(findMissing(secondArray));

/// Напишите код функции reversePrint(), которая выведет значения переданного ей односвязного списка в обратном порядке (4, 3, 2, 1). Для вывода значений используйте функцию console.log().

function reversePrint(linkedList) {
  if (linkedList.next) {
    reversePrint(linkedList.next);
  }
  console.log(linkedList.value);
}

const someList = {
  value: 1,
  next: { value: 2, next: { value: 3, next: { value: 4, next: null } } },
};

reversePrint(someList);
