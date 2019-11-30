export function assert(condition: boolean, message?: string) {
  if (!condition) {
    console.error('Assertion failed:', message)
  }
}