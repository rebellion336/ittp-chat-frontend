import Router from 'next/router'
import Cookies from 'universal-cookie'
import moment from 'moment'
import { message } from 'antd'

export const loadAllCookies = ({ req, isServer }) => {
  let cookies
  if (isServer) {
    cookies = new Cookies(req.headers.cookie)
  } else {
    cookies = new Cookies()
  }
  return cookies.getAll()
}
export const redirect = (url, options = { res: {}, isServer: false }) => {
  const { res, isServer } = options
  if (isServer) {
    res.writeHead(302, {
      Location: url
    })
    res.end()
    res.finished = true
  } else {
    Router.replace(url)
  }
  return {}
}
export const json2qs = json => {
  const qs = Object.keys(json)
    .filter(key => typeof json[key] !== 'undefined')
    .map(key => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(json[key])}`
    })
    .join('&')

  return qs === '' ? '' : `?${qs}`
}
export const showError = (error, clearError = () => {}) => {
  if (isClient()) {
    if (error.message) {
      message.error(error.message)
      clearError()
    }
  }
}
export const meta2pagination = meta => {
  let total = 0
  let current = 1
  let pageSize = parseInt(process.env.DEFAULT_PAGESIZE, 10)
  if (typeof meta !== 'undefined') {
    const { totalrecords, limit, offset } = meta
    total = totalrecords || total
    pageSize = limit || pageSize
    current = offset / limit + 1 || current
  }
  return {
    total: parseInt(total, 10),
    current: parseInt(current, 10),
    pageSize: parseInt(pageSize, 10)
  }
}
export const array2keyedObj = (arr, keyField = 'id') => {
  // If arr is not an array return empty object
  if (typeof arr === 'undefined' || arr.constructor !== Array) {
    return {}
  }
  const obj = {}
  arr.forEach(item => {
    obj[item[keyField]] = item
  })
  return obj
}
export const caseInsensitiveMatch = (inputValue, option) =>
  option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1

// YYYY is always in christ era
export const toYYYYMMDD = ddmmyyyy => {
  const dd = ddmmyyyy.substring(0, 2)
  const mm = ddmmyyyy.substring(3, 5)
  const yyyy = ddmmyyyy.substring(6)
  let christYear = yyyy
  if (yyyy > 2400) {
    christYear = Number(yyyy) - 543
  }
  const date = moment(`${christYear}-${mm}-${dd}`)
  if (!date.isValid()) {
    throw Error(`${ddmmyyyy} is not in mm-dd-yyyy format`)
  }
  const yyyymmdd = date.format('YYYY-MM-DD')
  return yyyymmdd
}
// YYYY is always in buddhist era
export const toDDMMYYYY = yyyymmdd => {
  const yyyy = yyyymmdd.substring(0, 4)
  const mm = yyyymmdd.substring(5, 7)
  const dd = yyyymmdd.substring(8, 10)
  let christYear = yyyy
  if (yyyy > 2400) {
    christYear = Number(yyyy) - 543
  }
  const date = moment(`${christYear}-${mm}-${dd}`)
  if (!date.isValid()) {
    throw Error(`${yyyymmdd} is not in yyyy-mm-dd format`)
  }
  const buddhistYear = Number(christYear) + 543

  return `${dd}-${mm}-${buddhistYear}`
}
export const iso8601ToLocalTime = dateStr => {
  return moment(dateStr).format('YYYY-MM-DD HH:mm:ss')
}
export const iso8601ToLocalDate = dateStr => {
  return moment(dateStr).format('YYYY-MM-DD')
}
export const ddmmyyyyDateDiff = (ddmmyyyy1, ddmmyyyy2) => {
  const yyyymmdd1 = toYYYYMMDD(ddmmyyyy1)
  const yyyymmdd2 = toYYYYMMDD(ddmmyyyy2)
  const d1 = moment(yyyymmdd1, ['YYYY-MM-DD'])
  const d2 = moment(yyyymmdd2, ['YYYY-MM-DD'])
  if (!d1.isValid() || !d2.isValid()) {
    throw Error(
      `Either ${ddmmyyyy1} or ${ddmmyyyy2} is not in dd-mm-yyyy format`
    )
  }
  return moment.duration(d2.diff(d1))
}
export const removeLinebreak = str => {
  if (typeof str !== 'string') {
    return str
  }
  return str.replace(/\r?\n|\r/g, '')
}
export const removeLinebreakFromFields = obj => {
  return Object.entries(obj)
    .map(([key, value]) => {
      return { [key]: removeLinebreak(value) }
    })
    .reduce((prev, current) => {
      return {
        ...prev,
        ...current
      }
    }, {})
}
/**
 * Return date difference calculated in timezone specified in config.defaultTimeZone (process.env.DEFAULT_TIMEZONE)
 * @param {string} d1 - A valid date string in ISO8601 format
 * @param {string} d2 - A valid date string in ISO8601 format
 * @return {number} Date difference between d1 and d2 return positve value if d1 occurred later than d2
 */
export function datediff(d1, d2) {
  // Use startOf to compare only date diff ignore time component
  // Use utcOffset to fix timezone to 7 so we only compare in Bangkok timezone no matter where actual server is located
  // For instance, duration between 2018-06-05T23:59:59+0000 and 2018-06-06T00:00:00+0000 can be 1 if compared in +0 GMT timezone
  // However, it will be 0 if compared in +7 GMT timezone because startOf date of both dates will become 2018-06-06
  const d1date = moment(d1)
    .utcOffset(process.env.DEFAULT_TIMEZONE)
    .startOf('day')
  const d2date = moment(d2)
    .utcOffset(process.env.DEFAULT_TIMEZONE)
    .startOf('day')
  return d1date.diff(d2date, 'days')
}
