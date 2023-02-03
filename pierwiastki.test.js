const assert = require('assert');
const pierwiastkiRownania = require('./pierwiastki');

// testy uruchamiamy wpisując do terminala npm run dev

describe('funkcjapierwiastkiRownania', () => {
  it('powinna zwrócić pusty obiekt kiedy nie ma pierwiastków rzeczywistych', () => {
    const result = pierwiastkiRownania(1, 2, 3);
    assert.deepEqual(result, {});
  });

  it('powinna zwrócić jeden pierwiastek kiedy jest tylko jeden', () => {
    const result = pierwiastkiRownania(1, -2, 1);
    assert.deepEqual(result, { root1: 1 });
  });

  it('powinna zwrócić dwa pierwiastkiRownania kiedy są dwa', () => {
    const result = pierwiastkiRownania(1, -3, 2);
    assert.deepEqual(result, { root1: 2, root2: 1 });
  });
});
