// task 1
function getRandom() {
	console.log(Math.floor(Math.random() * (1000 - 100) + 100));
}

// task 2
function isNumSameFromAllSides(num) {  //Если число 17+ знаков начинает глючить
	var arrNum = String(num).split('');
	for(var i = 1; i <= arrNum.length; i += 1) {
		if(arrNum[i - 1] == arrNum[arrNum.length - i]) {
			if(i == arrNum.length) {
				return true;
			}
			continue;
		} else {
			return false;
		}
	} 
}

// task 3
function exchangeVar(a, b) {
	console.log('Переменная a = ' + a + ', Переменная b = ' + b);
	a = a + b;
	b = a - b;
	a = a - b;
	return console.log('Переменная a = ' + a + ', Переменная b = ' + b);
}

// task 4
function countSquare(a, b, c) {
	var pi = 3.14;
	if(arguments.length == 1) {
		return pi * a * a;
	} else if(arguments.length == 2) {
		return a * b;
	} else if (arguments.length == 3 && a + b > c && b + c > a && b + a > c) {
		var p = (a + b + c) / 2;
		return Math.sqrt(p * (p - a) * (p - b) * (p - c));
	} else {
		console.log('Либо аргументы не подходят, либо их нет');
	}
}

