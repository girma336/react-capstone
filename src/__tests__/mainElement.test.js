import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../Redux/configurStore';
import SearchElement from '../component/SearchElement';

describe('Test the main element of avater char', () => {
  it('Test using SnapShoot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <SearchElement />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
