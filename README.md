# WASM Prime Checker

This project demonstrates how to use AssemblyScript to compile WebAssembly (WASM) and interact with JavaScript in the browser. It includes a simple prime number checker that determines whether a given number is prime.

See it in action: [https://jordojordo.github.io/wasm-prime](https://jordojordo.github.io/wasm-prime)

## Prerequisites
Ensure you have the following installed:
- [Node.js (v22+)](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

---

## Running Locally
1. Install the dependencies, compile, and serve:
   ```sh
   pnpm install
   pnpm asbuild
   pnpm start
   ```
2. Open in browser
  Navigate to `http://localhost:3000`

## Test
Run unit tests for the WebAssembly module:
```sh
pnpm test
```
