import reverse from '../reverse';

describe('reverse filter', () => {
  it('should return reversed string', () => {
    const str = 'abc';
    const actualValue = reverse(str);

    const expectedValue = 'cba';
    expect(actualValue).toEqual(expectedValue);
  });

  it('should retur empty string if called without args', () => {
    expect(reverse()).toEqual('');
  });
});
