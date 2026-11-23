function seq(...args) {
    const chain = (...next) => {
        if (typeof next[0] === 'number') {
            let result = next[0];
            for (let i = args.length - 1; i >= 0; i--) {
                const fn = args[i];
                result = fn(result);
            }
            return result;
        }
        args.push(...next);
        return chain;
    };
    return chain;
}


console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)); 