const assert = require('assert');
const pierwiastkiRownania = require('./pierwiastki');

describe('pierwiastkiRownania', () => {
  it('zwraca pusty obiekt kiedy nie ma pierwiastków rzeczywistych', () => {
    const result = pierwiastkiRownania(1, 2, 3);
    assert.deepEqual(result, {});
  });

  it('zwraca jeden pierwiastek kiedy jest tylko jeden', () => {
    const result = pierwiastkiRownania(1, -2, 1);
    assert.deepEqual(result, { root1: 1 });
  });

  it('zwraca dwa pierwiastkiRownania kiedy są dwa', () => {
    const result = pierwiastkiRownania(1, -3, 2);
    assert.deepEqual(result, { root1: 2, root2: 1 });
  });

  it('zwraca "Błędne dane" dla równania o błędnym formacie', () => {
    const result = pierwiastkiRownania(1, 2, 'ab');
    assert.strictEqual(result, 'Błędne dane');
  });

  it('zwraca "To nie jest równanie kwadratowe" dla równania o błędnym formacie', () => {
    const result = pierwiastkiRownania(0, 1, 2);
    assert.strictEqual(result, 'To nie jest równanie kwadratowe');
  });
});
