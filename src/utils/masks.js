import { conformToMask } from 'text-mask-core'

export const nameMask = value => {
  return conformToMask(
    value.replace(/\//, '-'),
    () => {
      let mask = new Array()
      for (let i = 0; i < 30; i++) {
        mask.push(/[A-Za-z\-\s]/)
      }
      return mask
    },
    { guide: false },
  ).conformedValue
}

export const phoneMask = value => {
  return conformToMask(
    value,
    ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    { guide: false },
  ).conformedValue
}

export const postalCodeMask = value => {
  return conformToMask(
    value,
    [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/],
    { guide: false },
  ).conformedValue.toUpperCase()
}

export const dateMask = value => {
  return conformToMask(
    value,
    [
      /\d/, /\d/, /\d/, /\d/, '-',
      /\d/, /\d/, '-',
      /\d/, /\d/,
    ],
    { guide: false },
  ).conformedValue
}

