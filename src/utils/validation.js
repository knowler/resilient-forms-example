export const validateEmail = value => {
  let reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,24})$/
  return !reg.test(value) ? 'enter a valid email address.' : null
}
