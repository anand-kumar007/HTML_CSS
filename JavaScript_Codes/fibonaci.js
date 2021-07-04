function fibonacci(n) {
    if (n > 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else if (n < 1) {
        return 0;
    }
    // else, return 1
    return 1;
}

console.log(fibonacci(10));