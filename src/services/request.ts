import querystring from 'querystring'

export type ApiOptions = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: Object
  query?: querystring.ParsedUrlQueryInput
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const request = async (path: string, options: ApiOptions) => {
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json'
    },
    body: options.body && typeof options.body === 'object' ? JSON.stringify(options.body) : undefined
  }

  let url = `${BASE_URL}/api/v1/${path}`
  if (options.query && typeof options.query === 'object') {
    url = `${url}?${querystring.stringify(options.query)}`
  }

  return fetch(url, config).then(async (response) => {
    if (response.status === 401) {
      // 認証エラーの処理
      return Promise.reject(new Error('Authenticatoin failed'))
    }

    const data = await response.json()
    if (response.ok) {
      return data
    } else {
      return Promise.reject(data)
    }
  })
}

export default request
