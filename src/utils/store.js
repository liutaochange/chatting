import store from 'store'
const storage = {
  get: key => {
    store.get(key)
  },
  set: (key, value) => {
    store.set(key, value)
  },
  remove: key => {
    store.remove(key)
  },
  clearAll: () => {
    store.clearAll()
  }
}
export default storage
