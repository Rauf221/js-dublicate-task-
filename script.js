const a = [1, 5, 5, 6,7,4, 8];
const b= [1,2,3,6,7,3,3,4,5, ,3];
let c = 0;
let k = 0;

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] === a[j]) {
            console.log(a[i]);
            k = 10;
            break;
        }
    }
    if (k === 10) {
        break;
    }
}

for (let i = 0; i < b.length; i++) { 
    for (let p = i + 1; p < b.length; p++) {
       if (b[i] === b[p]) {
        console.log(b[i]);
        c = 10;
        break;
       }
    }
    if (c === 10) {
        break;
    }
}
