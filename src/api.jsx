export const API_URL = "http://localhost:8080";




export function USER_CADASTRO(body) {
    return {
      url: API_URL + "/usuarios/cadastrar",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  }
  
  export function USER_LOGIN(body) {
    return {
      url: API_URL + "/usuarios/login",
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  }

export function USER_GET(body) {
    return {
      url: API_URL + "/usuarios",
      options: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    };
  }

