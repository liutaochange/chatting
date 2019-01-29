const userKey = '__USERINFO__'
export const saveUser = (value) => {
  if (Object.prototype.toString.call(value) === '[object Object]') {
    value = JSON.stringify(value)
    if (localStorage.getItem(userKey)) {
      localStorage.removeItem(userKey)
    }
    localStorage.setItem(userKey, value)
  } else {
    throw Error('localStorage params must be a object')
  }
}

export const getUser = () => localStorage.getItem(userKey)

export const removeUser = () => {
  localStorage.removeItem(userKey)
}

export const clear = () => {
  localStorage.clear()
}
