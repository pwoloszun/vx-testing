import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import CustomCunter from '../CustomCounter.vue';

function renderCustomCunter(initialValue = 0) {
  return render(CustomCunter, {
    props: {
      initialValue,
    },
  });
}

describe('CustomCunter', () => {
  it('should render passed props', async () => {
    const { getByText } = renderCustomCunter(47);

    getByText(/47/);
  });

  it('should emit @increment event when "Increment" button clicked', async () => {
    const { getByText, emitted } = renderCustomCunter(47);

    const incrementBtn = getByText('Increment');
    await userEvent.click(incrementBtn);

    const incrementCallsInfo = emitted().increment;
    expect(incrementCallsInfo.length).toEqual(1);

    const incrementCallArg = incrementCallsInfo[0][0];
    expect(incrementCallArg).not.toBeDefined();

    getByText(/47/);
  });

  it('should emit @decrement event when "Decrement" button clicked', async () => {
    const { getByText, emitted } = renderCustomCunter(31);

    const decrementBtn = getByText('Decrement');
    await userEvent.click(decrementBtn);

    const decrementCallsInfo = emitted().decrement;
    expect(decrementCallsInfo.length).toEqual(1);

    const decrementCallArg = decrementCallsInfo[0][0];
    expect(decrementCallArg).not.toBeDefined();

    getByText(/31/);
  });
});
