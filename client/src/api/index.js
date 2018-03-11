import { log } from '../lib/ke-utils'

export const rejectErrors = (res) => {
  const { status } = res;
  if (status >= 200 && status < 300) {
    return res;
  }
  return Promise.reject({
    message: res.statusText
  });
};

export const fetchJson = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
  .then(rejectErrors)
  .then((res) => {
    return res.json()
  })
};

export default {
  users: {
    register(user) {
      log('api.users.register: user', user, 'orange')
      return fetchJson(
        '/users/register',
        {
          method: 'POST',
          body: JSON.stringify({ user })
        }
      ).catch((err) => {
        log('api.users.register: err', err, 'red')
      })
    },
    signin(user) {
      // log('api.users.signin: user', '', 'orange')
      return fetchJson(
        '/users/signin',
        {
          method: 'POST',
          body: JSON.stringify({ user })
        }
      ).catch((err) => {
        log('api.users.signin: err', err, 'red')
      })
    },
    logout() {
      return fetchJson(
        '/users/logout',
        {
          method: 'GET'
        }
      ).catch((err) => {
        log('api.users.logout: err', err, 'red')
      })
    }
  }
}
