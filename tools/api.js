import 'es6-promise'
import 'isomorphic-fetch'
import Cookies from 'universal-cookie'

export const createHeader = customHeaders => {
    const cookies = new Cookies()
    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
    const headers = customHeaders || defaultHeaders
    const token = cookies.get('token')
    if (typeof token !== 'undefined') {
      headers.Authorization = `Bearer ${token}`
    }
    return headers
  }
const mode = 'cors'

const handleError = async response => {
    let errorMessage = ''
    let json
    try {
      json = await response.json()
      errorMessage = json.message
    } catch (error) {
      // api does not return error object use default statusText
      errorMessage = `
        Cannot parse response.body as json, statusText is ${response.statusText}`
    }
    if (!response.ok) {
      const error = new Error(errorMessage)
      if (json) {
        error.code = json.code
      }
      error.code = error.code || response.status
      error.response = response
      throw error
    }
    return json
  }

export const { API_SERVER } = process.env

export const postJSON = async (url, jsonBody) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: createHeader(),
        mode,
        body: JSON.stringify(jsonBody)
      })
      const json = await handleError(response)
      return json
    } catch (error) {
      // error is Error object of shape
      // { code: <http code>, message: <error message>, response: <response obj> }
      throw error
    }
  }

  export const getJSON = async url => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: createHeader(),
        mode
      })
      const json = await handleError(response)
      return json
    } catch (error) {
      // error is Error object of shape
      // { code: <http code>, message: <error message>, response: <response obj> }
      throw error
    }
  }

  export const patchJSON = async (url, jsonBody) => {
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: createHeader(),
        mode,
        body: JSON.stringify(jsonBody)
      })
      const json = await handleError(response)
      return json
    } catch (error) {
      // error is Error object of shape
      // { code: <http code>, message: <error message>, response: <response obj> }
      throw error
    }
  }
  
  export const deleteJSON = async url => {
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: createHeader(),
        mode
      })
      const json = await handleError(response)
      return json
    } catch (error) {
      // error is Error object of shape
      // { code: <http code>, message: <error message>, response: <response obj> }
      throw error
    }
  }