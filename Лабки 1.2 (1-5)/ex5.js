'Use strict';

const contacts = [
{
    name: 'John Doe',
    phone: '123-456-7890'
},
{
    name: 'Jane Doe',
    phone: '098-765-4321'
},
{name: 'Thomas Time', phone: '555-555-5555'}
]

const findContactByName = (name) => {
for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === name) {
        return contacts[i].phone;
    }
}
}

console.log(findContactByName('Jane Doe'));

const contactsHash = {
    'John Doe': '+380501112233',
    'Jane Doe': '+380674445566',
    'Thomas Time': '555-555-5555',
};
 const findPhoneByNameHash = (name) => {
 return contactsHash[name];
 }

 console.log(findPhoneByNameHash('Thomas Time'));