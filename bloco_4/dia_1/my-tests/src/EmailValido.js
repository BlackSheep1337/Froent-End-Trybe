import React from 'react'

export default function EmailValido({ email }) {

  const verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  }
  return (
    <div>
      <h3>{(verifyEmail(email) ? 'Email Valido' : 'Email Invalido')}</h3>
    </div>
  )
}
