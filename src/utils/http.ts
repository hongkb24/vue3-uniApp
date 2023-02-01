// @ts-ignore
import buildURL from 'axios/lib/helpers/buildURL'
import type { AxiosRequestConfig } from 'axios'

type ParamsSerializer = AxiosRequestConfig['paramsSerializer']

export function getFullURL(
  baseURL: string,
  url: string,
  params: Record<string, any>,
  paramsSerializer?: ParamsSerializer
) {
  if (url.startsWith('http')) {
    return buildURL(url, params, paramsSerializer)
  }
  const newNaseURL = baseURL.endsWith('/') ? baseURL : `${baseURL}/`
  const newUrl = url.startsWith('/') ? url.slice(1) : url
  return buildURL(`${newNaseURL}${newUrl}`, params, paramsSerializer)
}
