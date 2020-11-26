import { render } from '@testing-library/vue';

import PersonalInfo from '../PersonalInfo.vue';

describe('PersonalInfo.vue', () => {
  function renderPersonalInfo() {
    return render(PersonalInfo);
  }

  it('should render personal info', () => {
    const { getByText, getByTestId } = renderPersonalInfo();

    const nameEl = getByText(/Name:/);
    expect(nameEl.textContent).toContain('Batman');

    const ageEl = getByText(/Age:/);
    expect(ageEl.textContent).toContain('43');

    const imgEl = getByTestId('person-img') as HTMLImageElement;

    const imgSrc = imgEl.src;
    expect(imgSrc).toBeDefined();
    expect(imgSrc.length).toBeGreaterThan(0);
  });
});
