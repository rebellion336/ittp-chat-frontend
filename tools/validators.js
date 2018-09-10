import moment from 'moment'

export const validCitizenId = (rule, value, callback) => {
  let i = 0
  let sum = 0
  const id = value
  if (id !== undefined) {
    if (id.length < 13) callback('กรุณากรอกรหัสบัตรประชาชนให้ครบ 13 หลัก')
    for (i = 0, sum = 0; i < 12; i += 1)
      sum += parseFloat(id.charAt(i)) * (13 - i)
    if ((11 - (sum % 11)) % 10 !== parseFloat(id.charAt(12))) {
      callback('รหัสบัตรประชาชนไม่ถูกต้องกรุณากรอกใหม่อีกครั้ง')
    }
  }
  callback()
}
export const validDate = (rule, value, callback) => {
  // Not yet complete YYYY-MM-DD
  if (value === undefined) {
    callback()
  } else if (value.length < 10) {
    callback('กรุณากรอกวันที่เดือนปี เช่น 13-07-2526')
  } else {
    // Accept only YYYY-MM-DD
    const date = value.split('-')
    const year = (date[2] - 543) % 4
    const birthDate = moment(value, 'YYYY-MM-DD', true)
    if (!birthDate.isValid()) {
      // Our system will convert DD-MM-YYYY to YYYY-MM-DD
      if (date[0] > 0 && date[0] <= 29 && date[1] === '02' && year === 0) {
        callback()
      }
      callback('กรุณากรอกวันที่เดือนปี เช่น 13-07-2526')
    } else {
      const birthYear = birthDate.year()
      if (birthYear < 1900) {
        callback('กรุณากรอกปี พ.ศ.')
      }
      callback()
    }
  }
}
