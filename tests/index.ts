import assert from "assert";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { WASI } from "wasi";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const wasmPath = path.resolve(__dirname, "../build/release.wasm");

async function loadWasm(): Promise<WebAssembly.Exports> {
  const wasi = new WASI({ version: "preview1" });
  const wasmBuffer = fs.readFileSync(wasmPath);
  const wasmModule = await WebAssembly.instantiate(wasmBuffer, {
    wasi_snapshot_preview1: wasi.wasiImport,
  });
  return wasmModule.instance.exports;
}

async function runTests() {
  const wasmExports = await loadWasm();
  const isPrime = wasmExports.isPrime as (n: number) => boolean;

  assert.strictEqual(Boolean(isPrime(1)), false, "1 is not a prime number");
  assert.strictEqual(Boolean(isPrime(2)), true, "2 is a prime number");
  assert.strictEqual(Boolean(isPrime(3)), true, "3 is a prime number");
  assert.strictEqual(Boolean(isPrime(4)), false, "4 is not a prime number");
  assert.strictEqual(Boolean(isPrime(5)), true, "5 is a prime number");
  assert.strictEqual(Boolean(isPrime(10)), false, "10 is not a prime number");
  assert.strictEqual(Boolean(isPrime(11)), true, "11 is a prime number");
  assert.strictEqual(Boolean(isPrime(13)), true, "13 is a prime number");
  assert.strictEqual(Boolean(isPrime(17)), true, "17 is a prime number");
  assert.strictEqual(Boolean(isPrime(18)), false, "18 is not a prime number");
  assert.strictEqual(Boolean(isPrime(19)), true, "19 is a prime number");
  assert.strictEqual(Boolean(isPrime(20)), false, "20 is not a prime number");

  console.log("All tests passed!");
}

// Run tests
runTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
