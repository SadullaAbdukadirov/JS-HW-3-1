do {
    var num = prompt('Введите число')
} while (isNaN(num) || num == 0);
do {
    var power = prompt('Введите степнь')
} while (isNaN(power) || num == 0);
 var answer = 1;
 for (let i = 0; i < power; i++) {
   
    answer = answer * num
 }
 console.log(answer);


