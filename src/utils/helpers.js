export const buildQueryString = (params = {}) => {
  const query = new URLSearchParams()

  for (const key in params) {
    const value = params[key]

    if (Array.isArray(value)) {
      value.forEach(val => query.append(key, val))
    } else if (value !== undefined && value !== null) {
      query.append(key, value)
    }
  }

  return query.toString()
}

export const trimText = (text, length = 50) => {
    const words = text.split(' ');
    if (words.length <= length) {
        return words.join(' ');
    }
    
    return words.slice(0, length) + '...'
}