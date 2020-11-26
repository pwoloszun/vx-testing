import { merge } from 'lodash';
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MyDataTable from '../MyDataTable.vue';

function generateDataTableInputs(inputs = {}): any {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

function renderMyDataTable({ metaData = [], selectedItem = null, items = [] }) {
  return render(MyDataTable, {
    props: {
      metaData,
      selectedItem,
      items,
    },
  });
}

describe('MyDataTable', () => {


  describe('props', () => {
    it('should render row for each item', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();
      const { getAllByTestId } = renderMyDataTable({
        metaData,
        items,
        selectedItem,
      });
      const itemRows = getAllByTestId('item-row');
      expect(itemRows.length).toEqual(items.length);
    });

    it('should sort cells in metaData order', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();
      const { getAllByTestId } = renderMyDataTable({
        metaData,
        items,
        selectedItem,
      });

      const itemRows = getAllByTestId('item-row');
      const actualTexts = itemRows.map((row) => {
        const { textContent } = row;
        if (textContent === null) {
          return '';
        } else {
          return textContent.replace(/\s+/g, ' ').trim()
        }
      });
      const expectedTexts = items.map((item) => {
        const sortedValues = metaData.map(({ value }) => item[value]);
        return sortedValues.join(' ');
      });

      expect(actualTexts).toEqual(expectedTexts);
    });

    it('should highlight selected item', async () => {
      const { metaData, items } = generateDataTableInputs();
      const index = 1;
      const selectedItem = items[index];

      const { getAllByTestId } = renderMyDataTable({
        metaData,
        items,
        selectedItem,
      });

      const selectedRow = getAllByTestId('item-row')[index];

      expect(selectedRow.className).toMatch(/highlighted/);
    });

    it('should highlight nothing if selectedItem undefined', async () => {
      const { metaData, items } = generateDataTableInputs();
      const selectedItem = null;

      const { getAllByTestId } = renderMyDataTable({
        metaData,
        items,
        selectedItem,
      });

      const itemRows = getAllByTestId('item-row');
      const rowCssClasses = itemRows.map((row) => row.className).join(' ');

      expect(rowCssClasses).not.toMatch(/highlighted/);
    });
  });

  describe('events', () => {
    it('should emit item linked with clicked row', async () => {
      const { metaData, items, selectedItem } = generateDataTableInputs();
      const index = 1;

      const { getAllByTestId, emitted } = renderMyDataTable({
        metaData,
        items,
        selectedItem,
      });

      const selectedRow = getAllByTestId('item-row')[index];
      userEvent.click(selectedRow);

      const itemClickEventInfo = emitted().itemClick;
      expect(itemClickEventInfo.length).toEqual(1);

      const itemClickArg = itemClickEventInfo[0][0];
      expect(itemClickArg).toEqual(items[index]);
    });
  });
});

