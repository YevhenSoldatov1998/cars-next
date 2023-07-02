export function getSearchParamsByType(type: string, value: string) {
  const url = new URLSearchParams(window.location.search)
  url.set(type, value.toLowerCase())
  return window.location.pathname + '?' + url.toString();

}