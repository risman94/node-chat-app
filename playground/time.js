var moment = require('moment');

// ====>>> TEST MOMENT.JS <<<==== \\
// var date = new Date();
// var months = ['jan', 'feb'];

// console.log(date.getMonth());

// var date = moment();
// date.add(-3, 'year').subtract(7, 'month');

// console.log(date.format('MMM do, YYYY'));
// console.log(date.format('h:mm a'));

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));