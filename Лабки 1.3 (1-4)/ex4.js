'Use strict'

const job = (iface) => {
 let res = [];
for (const thing in iface) {
    const fn = iface[thing];
    if (typeof iface[thing] === 'function') {
        res.push([thing, fn.length]);
    }
}
return res;
}

const iface = {
 m1: x => [x],
    m2: function (x, y) {return[x, y];},
    m3(x, y, z) {return[x, y, z];}
};

console.log(job(iface));

//ви казали на лекції, що завдання 3 не обов'язкове, тому в мене зразу четверте