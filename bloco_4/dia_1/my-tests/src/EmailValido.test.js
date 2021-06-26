import React from 'react';
import { render } from '@testing-library/react';
import EmailValido from './EmailValido';

test('Testando um component, caso um email seja valido', () => {
  const EMAIL_USER = 'alexandre@gmail.com';
  const { getByText } = render(<EmailValido email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
})

test('Testando um component, caso um email seja invalido', () => {
  const EMAIL_USER = 'alexdss@..';
  const { getByText } = render(<EmailValido email={EMAIL_USER} />);
  const isInvalid = getByText('Email Invalido');
  expect(isInvalid).toBeInTheDocument();
})