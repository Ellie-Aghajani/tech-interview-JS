//swap variables
//1: declare another variable and use it as a backup
//2: put whatever we 're storing in 'a' in the backup variable
//3: copy 'b' to 'a'
//4: copy backup to 'b'

let a = 'red';
let b = 'blue';

let c = a;
a = b; //override a with b
b = c; //original value of 'a'


console.log(a); 
console.log(b);