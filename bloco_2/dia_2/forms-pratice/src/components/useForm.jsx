import { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })
  const [errors, setErros] = useState({})

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name]: value
    })
  }

  return { handleChange, values }
}

export default useForm;

