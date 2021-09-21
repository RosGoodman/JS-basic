# JS-basic

1. С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) 
от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

Для решения этой задачи используйте остаток от деления на 2, подробнее здесь 
https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Math#%D0%B0%D1%80%D0%B8%D1%84%D0%B
C%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1
%80%D1%8B 
и здесь https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

2. Выведите в консоль значения, указанные рядом с комментариями: 

const post = {
	author: "John", //вывести этот текст
	postId: 23, comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};

3. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить 
скидку 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :

const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];

4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:

	1. Получить все товары, у которых есть фотографии, можете использовать метод 
	filter https://mzl.la/2qROQkT
	2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort 
	https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь 
	https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.

const products = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg", 
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg" 
		]
	},
	{
		id: 8,
		price: 78,
	},
];

 В первом пункте у вас должен получиться такой массив из двух элементов:

(2) [{...}, {...}]
	0:
		id: 3
		photos: (2) ["1.jpg", "2.jpg"]
		price: 127
		__proto__: Object
	1:
		id: 10
		photos: ["3.jpg"]
		price: 26
		__proto__: Object
	length: 2
		__proto__: Array(0)

Во втором пункте массив должен стать таким:

(4) [{...}, {...}, {...}, {...}]
	0: {id: 10, price: 26, photos: Array(1)}
	1: {id: 8, price: 78}
	2: {id: 3, price: 127, photos: Array(2)}
	3: {id: 5, price: 499, photos: Array(0)}
	length: 4
	__proto__: Array(0)


5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа
 от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:

for(…){/* здесь пусто */}

Помните, что в первом, втором и третьем раздела цикла можно не только писать условия, или увеличивать
 счетчик например на 1, допустимы любые выражения, например вызовы функций.

6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx