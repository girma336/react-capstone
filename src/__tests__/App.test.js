import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../Redux/configurStore';

describe('test App', () => {
  it('test snapshoot of app', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
