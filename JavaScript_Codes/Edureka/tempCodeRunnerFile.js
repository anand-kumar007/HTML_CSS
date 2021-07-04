var a = 3;
var b = 'Rome';
var c = false;

var o = { a, b, c };

console.log('Object \'o\':', o);

var p = {
    a: 3,
    b: 'Rome',
    c: false
};

console.log('Object \'p\':', p);

var q = {};
console.log('Object \'q\' (Initial):', q);
q.a = a;
q.b = b;
q.c = c;
console.log('Object \'q\' (Updated):', q);