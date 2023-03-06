let sumPrimes = (num) => {
    let isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    };

    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) sum += i;
    }
    return sum;
};

console.log(sumPrimes(10));

//? second solution usinf every and reduce

// let sumPrimes = (num) => {
//     let primes = [];
//     for (let i = 2; i <= num; i++) {
//         if (primes.every((prime) => i % prime !== 0)) primes.push(i);
//     }
//     return primes.reduce((sum, prime) => sum + prime, 0);
// };
