import { render } from '@testing-library/vue';

import HelloWorld from '../HelloWorld.vue';

describe('HelloWorld.vue', () => {
  function renderHelloWorld() {
    return render(HelloWorld);
  }

  it('should render greeting', () => {
    const { getByText } = renderHelloWorld();
    const el = getByText('Hello Vue!');
    expect(el).toBeDefined();
  });
});
