# WASM Prime Checker

This project demonstrates how to use AssemblyScript to compile WebAssembly (WASM) and interact with JavaScript in the browser. It includes a simple prime number checker that determines whether a given number is prime.

See it in action: (https://jordojordo.github.io/wasm-prime)[https://jordojordo.github.io/wasm-prime]

## Prerequisites
Ensure you have the following installed:
- [Node.js (v22+)](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

---

## Running Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/jordojordo/wasm-prime.git
   cd wasm-prime
   ```
2. Install dependencies:
   ```sh
   pnpm install
   ```
3. Open in browser
  Navigate to `http://localhost:8080`

## Build
Compile the AssemblyScript into a WASM module:
```sh
pnpm asbuild
```
This generates:
```console
build/release.wasm
```

## Test
Run unit tests for the WebAssembly module:
```sh
pnpm test
```
