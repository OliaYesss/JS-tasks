/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
  const fib = [0, 1]
  while (true) {
      fib.push(fib[0] + fib[1])
      yield fib.shift()
  }
};

/**
* const gen = fibGenerator();
* gen.next().value; // 0
* gen.next().value; // 1
*/