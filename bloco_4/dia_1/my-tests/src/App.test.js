import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

describe('Verifica tela de input', () => {
  it('verifica que ah um campo input de email na tela', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });

  it('verifica se existem dois butoes', () => {
    const { getAllByRole } = render(<App />);
    const button = getAllByRole('button');
    expect(button.length).toBe(2);
  });

  it('verifica se existem um butao enviar', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar');
    expect(button.type).toBe('submit');
  });

  it('verifica se existe um butao para voltar', () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-back');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Voltar');
    expect(button.type).toBe('button');
  })

  it('verifica se ao clickar aparece o email', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendBtn = getByTestId('id-send');
    const emailUser = getByTestId('id-email-user');

    fireEvent.change(emailInput, { target: { value: 'alexandre@gmail.com'}});
    fireEvent.click(sendBtn);
    expect(emailInput.value).toBe('');
    expect(emailUser.textContent).toBe('Email digitado: alexandre@gmail.com');
  })
})
//acessar os elementos da sua tela

//interagir com eles (se houver necessidade)

//Fazer seus its