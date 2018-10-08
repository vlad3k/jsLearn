// task 1
function getRandom() {
	console.log(Math.floor(Math.random() * (1000 - 100) + 100));
}

// task 2
function isNumSameFromAllSides(num) {  

	return String(num) === String(num).split('').reverse('').join('');

	/*var arrNum = String(num).split('');
	for(var i = 1; i <= arrNum.length; i += 1) {
		if(arrNum[i - 1] == arrNum[arrNum.length - i]) {
			if(i == arrNum.length) {
				return true;
			}
			continue;
		} else {
			return false;
		}
	} */
}

// task 3
function exchangeVar(a, b) {
	console.log('Переменная a = ' + a + ', Переменная b = ' + b);
	a = [b, b=a][0];
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

// task 5
function echangeDiagonalOfMatrix() {
	var matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
}

// task 6
function simpleNums() {
	var nums = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var simpleNums = [];
	for(var i = 0; i < nums.length; i += 1) {
	  if(nums[i] % 2 == 0) {
		continue;
	  } else {
			simpleNums.push(nums[i]);
	  }
	}
	return simpleNums.length;
}

// task 7
function sumBetweenMinMaxNums() {
	var arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var result = 0;
	for(var i = 1; i < arr.length - 1; i += 1) {
		result += arr[i];
	}
	return result;
}

// task 8
function mathTwoNums() {

	do {
		var num1 = prompt('Введите первое число:', '');
		var num2 = prompt('Введите второе число:', '');
		
		do {
			var oper = prompt('Введите операцию либо "0" для выхода:', '');
			switch (oper) {
			case '+':
				alert( parseFloat(num1) + parseFloat(num2) );
				break;
			case '-':
				alert( parseFloat(num1) - parseFloat(num2) );
				break;
			case '/':
				if(num2 == 0) {
				alert('На ноль делить нельзя');
				break
				} else {
				alert( parseFloat(num1) / parseFloat(num2) );
				break;
				}
			case '*':
				alert( parseFloat(num1) + ' * ' +  parseFloat(num2) + ' = ' + parseFloat(num1) * parseFloat(num2) );
				break;
			case '0':
				alert('Вы вышли из программы');
				break;
			default:
				alert('Нет такой операции');
			}
		}
		while(oper != '+' && oper != '-' && oper != '*' && oper != '/' && oper != '0');
		}
		while(oper != '0');

	
	
}
