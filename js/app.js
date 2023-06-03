//  1. Найдите числа в массиве которые делятся на 3 без остатка
const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
const devideArr = [];

for (let i of arr) {
    if (i % 3 == 0) {
        devideArr.push(i);
    }
}
console.log(devideArr);

//  2. Посчитайте финальную стоимость всех продуктов в корзине и выведите результат как переменную в консоль лог

const shoppingCart = [
  {
    name: 'Cheese',
    count: 4,
    pricePerItem: 100
    
  },
  {
    name: 'Water',
    count: 5,
    pricePerItem: 23
    
  },
  {
    name: 'Banana',
    count: 8,
    pricePerItem: 55
    
  },
  {
    name: 'Choccolate',
    count: 2,
    pricePerItem: 115
    
  }
];

let sumPrice = 0;
for (let w of shoppingCart) {
  sumPrice += w.pricePerItem * w.count;
}

console.log(`Total price: ${sumPrice}`)

//3. Посчитайте сумму всех чисел внутри массива массивов. Присвойте переменной и выведете в консоль.
const arr2 = [
  [100, 1230, 1293123, 1236478, 9816],
  [9932, 2123123, 1293123, 1203123, 1239],
  [12391, 1235, 1123994, 1203123, 5543243],
  [1203, 92346, 288, 12309, 5543243],
  [94324, 8236, 123, 86231, 8455322],
  [2340123, 172, 123, 321, 38421340],
]

let sum = 0;

for(let k of arr2) {
    for(let l of k) {
     sum += l;
    }
}

console.log(`Total score: ${sum}`)




//4. Добавить в массив uniqueArray только не повторяющиеся значения из arr
const arr3 = ["php", "php", "css", "css",
  "script", "script", "html", "html", "java", "java", "go", "Python", "Python"
];

  // вариант № 1
  const uniqueArray = arr3.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
    console.log(uniqueArray)

    // вариант № 2

    arr3.forEach((item) => {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  });
  console.log(uniqueArray)

  // вариант № 3
  for (let v of arr3 ) {
    if (!uniqueArray.includes(v)) {
      uniqueArray.push(arr3[v]);
    }
  }
  
  console.log(uniqueArray); 


//5. В объекте result должны быть свойства в которых ключ это элемент массива arr а значение - количество этих элементов в массиве arr
const arr4 = ['Jane','Bob','Bob','Luci','Jane','Bob','Peter','Felix','Felix','Bob','Andrew'];
const result = {};
for(let d of arr4) {
  if (Object.keys(result).includes(d)) {
  result[d]+=1;
  } else {
  result[d]=1;
  }
}
console.log(result)