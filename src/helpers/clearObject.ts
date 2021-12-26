export const clearObject = (object: Record<string, any>): void => {
  const keys = Object.keys(object);

  keys.forEach(key => {
    delete object[key]
  })
} 