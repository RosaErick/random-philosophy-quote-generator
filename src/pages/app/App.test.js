import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';
import { rest } from 'msw';
import {setupServer} from 'msw/node';

const response = { speaker: 'sh...', quote: 'thinking' };



const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
        
        
        
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders  the app, with a button, a quote and a button', () => {
  render(<App />);
  const buttonEl = screen.getByRole('button');
  const textEl = screen.getByText('thinking');

  expect(buttonEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});


test('calss api on button click and updatee its text', async () => {
  render(<App />);

  const buttonEl = screen.getByRole('button');
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();

});