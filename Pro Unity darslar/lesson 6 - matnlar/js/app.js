'use strict';

let firstname = 'Alexander',
    lastname = 'Volkanovski',
    str = 'hello world i am web developer',
    value;

value = 'hello';
value = "world";
value = `hello world`;

value = 'he says: "i am developer"';
// value = 'he says: "i'm developer"';
value = `he says: "i'm developer"`;

// value = `u dediki: "o'g'limga na`muna"`
value = 'he says: "i\'m developer"';
value = 'u dediki: "o\'g\'limga na`muna"';

// value = 'tasks:
// -task1
// -task2
// -task3';

// value = "tasks:
// -task1
// -task2
// -task3";

value = `tasks:
-task1
-task2
-task3`;

value = `tasks:
    -task1
    -task2
    -task3`;

value = 'tasks:\n\t-task1\n\t-task2\n\t-task3';

let age = 2025 - 2000;

value = 'i am age years old';
value = 'i am ' + age + ' years old';
value = `i am ${age} years old`
value = `i am ${2025 - 2000} years old`

firstname = 'Alexander';

value = firstname[0];
value = firstname[3];
value = firstname.length; // matndagi simvollar soni
value = firstname.length - 1; // matnning oxirgi indeksi
value = firstname[firstname.length - 1]; // matnni oxirgi belgisi olish
value = str[str.length - 1];
value = lastname[lastname.length - 1];

value = 'hello' + 'world'; // matnlarni qo'shish matnlarni "konkatenatsiya" qilish degani
value = firstname + lastname;
value = firstname + ' ' + lastname;
value = `${firstname} ${lastname}`;

// Metodlar
str = 'hello world i am web developer';

// indexOf - berilgan simvol/matn ni indeksini aniqlab beradi
value = str.indexOf('o');
value = str.indexOf('o', 5); // berilgan simvolni 5-indeksdan boshlab qidiradi
value = str.indexOf('o', 8);
value = str.indexOf('web');
value = str.lastIndexOf('o'); // berilgan simvolni matnni oxiridan boshlab qidiradi
value = str.indexOf('asd'); // -1 chunki bunday simvol\matn yo'q

// includes - berilgan simvol/matn bor yoki yo'qligini aniqlaydi
value = str.includes('web');
value = str.includes('x');

// concat - matnlarni qo'shish
value = 'hello'.concat('world');
value = 'hello'.concat(' ', 'world');
value = firstname.concat(' ', lastname);

// upperCase
value = str.toUpperCase();

// lowerCase
value = firstname.toLowerCase();

// slice - matn ichidan berilgan diapazon bo'yicha matnni ajratib olib yangi matn yaratadi
value = str.slice(0, 5); // [x:y)
value = str.slice(6);
value = str.slice(6, 11);
value = str.slice(6, -9);
value = str.slice(-9);

// replace
value = str.replace('web', 'frontend');

// replaceAll
value = str.replaceAll('o', '0');
value = str.replaceAll(' ', '_');

// repeat
value = firstname.repeat(3);

console.log(value);