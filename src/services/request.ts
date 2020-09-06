import querystring from 'querystring'

export type ApiOptions = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: Object
  query?: querystring.ParsedUrlQueryInput
}

const request = async (url: string, options: ApiOptions) => {
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: options.body && typeof options.body === 'object' ? JSON.stringify(options.body) : undefined
  }

  return fetch(url, config).then(async (response) => {
    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default request
