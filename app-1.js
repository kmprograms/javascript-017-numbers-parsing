// KM Programs
// https://km-programs.pl/

// Jaka jest roznica pomiedzy parseFloat / parseInt oraz Number / +

console.log('----------------------------- 1 ----------------------------------');
// Kiedy parsowaniu poddajesz napis reprezentujacy standardowa liczbe
// to zachowanie tych funkcji / operatorow jest identyczne
console.log(parseFloat('10'));          // WYNIK: 10
console.log(Number('10'));              // WYNIK: 10
console.log(parseFloat('12.345'));      // WYNIK: 12.345
console.log(Number('12.345'));          // WYNIK: 12.345
console.log(parseFloat('11e10'));       // WYNIK: 110000000000
console.log(Number('11e10'));           // WYNIK: 110000000000

console.log('----------------------------- 2 ----------------------------------');
// Kiedy napis zaczyna sie od liczby a potem zawiera inne znaki wtedy
console.log(parseFloat('12.3xx'));      // WYNIK: 12.3 (parsuje dopoki jest w stanie)
console.log(Number('12.3xx'));          // WYNIK: NaN (nie dokonuje parsowania)

console.log('----------------------------- 3 ----------------------------------');
// Number potrafi dodatkowo parsowac napis zawierajacy liczbe szesnastkowo
console.log(parseFloat('0xaa'));        // WYNIK: 0
console.log(Number('0x1a'));            // WYNIK: 26

console.log('----------------------------- 4 ----------------------------------');
// Inne zachowanie rowniez podczas parsowania pustego napisu
console.log(parseFloat(''));            // WYNIK: NaN
console.log(Number(''));                // WYNIK: 0
console.log(parseFloat(' \r\n\t'));     // WYNIK: NaN
console.log(Number(' \r\n\t'));         // WYNIK: 0

console.log('----------------------------- 5 ----------------------------------');
// Uzywanie operatora + daje dokladnie takie same wyniki jak Number
console.log(Number('0x10'));            // WYNIK: 16
console.log(+'0x10');                        // WYNIK: 16
console.log(Number('10x'));             // WYNIK: NaN
console.log(+'10x');                         // WYNIK: NaN

console.log('----------------------------- 6 ----------------------------------');
const num1 = Number('11');              // przeksztalca napis do typu prymitywnego number
const num2 = new Number('11');          // opakowuje parsowana wartosc w obiekt Number

console.log(num1);
console.log(typeof num1);
console.log(num1 instanceof Number);

console.log(num2);
console.log(typeof num2);
console.log(num2 instanceof Number);
