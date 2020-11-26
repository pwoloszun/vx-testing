import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MyCounter from '../MyCounter.vue';

describe('MyCounter.vue', () => {
  function renderMyCounter() {
    return render(MyCounter);
  }

  it('should render 0 as default value', () => {
    const { getByText } = renderMyCounter();
    getByText('0');
  });

  describe('increment btn clicked', () => {
    it('should render incremented value', async () => {
      const { getByText, getByTestId } = renderMyCounter();

      const incrementBtnEl = getByText(/Increment/);

      await userEvent.click(incrementBtnEl);

      const valueEl = getByTestId('counter-value')
      expect(valueEl.textContent).toContain('1');
    });
  });

});
