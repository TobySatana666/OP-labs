'use strict'

const fn = () => {
const some = {
 name: 'Herobrine',
}
let some1 = {
 name: 'Herobrine Bara Bara Bara',
}

some.name = "Not Herobrine";
some1.name = "Not Herobrine Bara Bara Bara";
return some.name + ', ' + some1.name;
}
// Змінна в цьому об'єкті можлива, тому що константою є посилання на об'єкт, а не сам об'єкт.
console.log(fn());

const createUser = (name, city) => {
    const user = {
        name: name,
        city: city,
    }
    return user;
}

console.log(createUser('Herobrine', 'Minecraft'));