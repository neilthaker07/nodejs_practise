/**
 * Created by neil on 4/9/17.
 */
console.log('oooohapp');

var person = {
    name: 'Nei',
    no: 11
};
console.log(person);
console.log(addNum(1,2));
function addNum(a,b)
{
    return a+b;
}

placeOrder(11);
placeOrder(12);
placeOrder(13);

function placeOrder(orderNo) {
    console.log("customer order",orderNo);
    cookAndDeliver(function () {
        console.log('delivered food order ', orderNo);
    });
}

function cookAndDeliver(callback) {
    setTimeout(callback, 5000); // call me back when 5000 are over means work done, main program further executes
    // this isnot for the pausing a program for 5 seconds.
}

var asd = {
  food : '1qqq',
  money : "11"
};

var tes2 = asd;
tes2.food = 'updatedfood';
console.log(asd.food);
console.log(15 == '15')
console.log(15 === '15')

// this
var fun1 =  {
    funn : function () {
        console.log(this == fun1);
    }
}
fun1.funn();

// prototype : add properties to classes
function User() {
    this.name = '';
    this.no = 5;
    this.give = function abc(t) {
        t.no += 1;
        console.log(this.name+' 1 life added '+t.name);
    }
}

var n = new User();
var m = new User();

n.name= 'n1';
m.name = 'm1';

n.give(m);
console.log(n.no);
console.log(m.no);

User.prototype.uppercut = function uppercut(t) {
    t.no -= 2;
    console.log(this.name+' uppercut '+t.name);
}

m.uppercut(n);
console.log(n.no);
console.log(m.no);
// property to the object
User.prototype.magic = 40;
console.log(n.magic);
console.log(m.magic);

// modules
var movies = require('./movies');
require('./plays');
require('./play2');
//movies.avatarPrint();


var fs = require('fs');
//fs.writeFileSync('corn.txt', 'hello corn');


// setinterval runs repeatedly after period of time.
setInterval(function () {
    console.log('abc');
}, 200);

console.log(__dirname);
console.log(__filename);







