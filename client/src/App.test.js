import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import  SearchForm  from './components/SearchForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders app title", () => {

  const { getByText } = render(<App />); 

  const header = getByText(/Womens World Cup Players/i);

  expect(header).toBeInTheDocument();
  
});

test("search input is rendered", ()=> {

  const {getByLabelText} = render(<SearchForm />);
  getByLabelText(/Search/i);
})

test("search input is rendered", ()=> {

  const {getByLabelText} = render(<SearchForm />);
  const searchInput = getByLabelText(/Search/i);

  fireEvent.change(searchInput, { target: {value: "Megan Rapinoe"}})

  expect(searchInput.value).toBe("Megan Rapinoe");
})