const parse = string => string.split(' -> ').slice(0, -1).reduceRight((a, b) => new Node(Number(b), a), null);
console.log(parse("1 -> 2 -> 3 -> null"))
