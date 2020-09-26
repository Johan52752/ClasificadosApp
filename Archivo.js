const nv = 3;

for (let i = 1; i <= nv; i++) {
    const val = 120000 * i;
    console.log(proceso(val));
}


function proceso(n) {
    const h = n;
    if (n >= 120000 && n < 200000) {
        n = h - (n * 0.10);
    } else if (n >= 200000 && n <= 500000) {
        n = h - (n * 0.08);
    } else if (n > 500000) {
        n = h - (n * 0.05);
    }
    return (n);
}