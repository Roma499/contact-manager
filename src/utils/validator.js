const regExps = {
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
}

export const validators = {
  requaired: (data) => !!data,
  phone: (data) => regExps.phone.test(data),
  email: (data) => regExps.email.test(data),

}
const validateField = (data, fieldValidators) => {
  let message
  if (fieldValidators && fieldValidators.length) {
    fieldValidators.every(item => {
      const isValid = item.validator(data);
      if (!isValid) {
        message = item.message;
      }
      return isValid;
    })
  }
  return message
}

export const validateForm = (fields, values) => {
  return Object.keys(fields).reduce((acc, key, index) => {
    const errorMessage = fields[key] ? validateField(values[key], fields[key]) : null
    if (errorMessage) {
      acc[key] = errorMessage
    }
    return acc
  }, {})
}