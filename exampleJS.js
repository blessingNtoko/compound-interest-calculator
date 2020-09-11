let a1 = Array.from({length: 5}, (x, i) => i);
console.log(a1);

let a2 = [...Array(5).keys()];
console.log(a2);

// Custom array with custom start, end, and step
const range = (start, end, step) => Array.from({length: (end - start) / step + 1}, (x, i) => start + (i * step));

// Longer form of top ^
const range2 = (start, end, step) => {
    return Array.from({length: (end - start) / step + 1}, (x, i) => {
        return start + (i * step);
    });
}

let a3 = range2(10, 50, 10);
console.log(a3);

let a4 = Array.from({length: 5}, (x, i) => {
    return i * i;
});
console.log(a4);