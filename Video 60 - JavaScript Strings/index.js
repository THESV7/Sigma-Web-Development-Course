console.log("This is strings tutorial");
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length);

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend);
console.log(`His name is ${real_name} and his friends name is ${friend}.`);
console.log("Ro\"han"); // Escape sequence

let b = "ShivamSh"
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(1,4));
console.log(b.slice(1)); // give string from index 1

console.log(b.replace("Sh","77")); // it replaces first occurence only
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"));

console.log(b.charAt(0));
console.log(b.indexOf("va"));
console.log(b.startsWith("Sh"));
console.log(b.endsWith("Sh"));