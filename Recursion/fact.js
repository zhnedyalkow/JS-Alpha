const fact = (n) => {
    if (fact === 0 || fact === 1) {
        return 1;
    }

    return n * fact(n-1);
}

// 5