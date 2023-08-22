
//question no 1

const studentnames = ['alice', 'bob', 'charlie' ,'david', 'eve'];
console.log(studentnames);
const index = studentnames.indexOf('charlie')
console.log(index);
studentnames.splice( 2 , 1 , 'frank');
console.log(studentnames);
studentnames.splice(3,1);
console.log(studentnames);
studentnames.push('grace' , 'helen');
console.log(studentnames);
studentnames.splice(1,1,'john');
console.log(studentnames);
const slice = studentnames.slice(5 , 6);
console.log(slice);

const studennames = ['alice', 'bob', 'charlie' ,'david', 'eve'];
studennames.unshift('frank');
console.log(studennames);
studennames.slice(1,1,'frank')
console.log(studennames);