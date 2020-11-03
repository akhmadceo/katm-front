import axios from "axios";


export const setAuthToken = (token) => {
    if (token) {
      //applying token
      instance.defaults.headers.common["Authorization"] = token;
    } else {
      //deleting the token from header
      delete instance.defaults.headers.common["Authorization"];
    }
  };
  

const instance = axios.create({
 
  baseURL: "/api/v1/",
  withCredentials: true,
  headers: {
    'X-Device-Type': 'Web',
  }


});

export const authAPI = {
    login(username, password) {
        return instance.post(`auth/login`, {"username": username,"password": password})
    },

    logout() {
        return instance.delete(`auth/login`)
    }
}

export const langListAPI = {
    getLangList() {
        return instance.get(`info/lang/list`)
    },
}
