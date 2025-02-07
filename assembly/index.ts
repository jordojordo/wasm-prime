export function isPrime(n: i32): bool {
  if (n < 2) {
    return false;
  };

  for (let i: i32 = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}