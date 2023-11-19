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

  export function GET_MATERIA(token) {
    return {
      url: API_URL + "/materias",
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
        
      },
    };
  }

  export function GET_FASES_MATERIA(token,idMateriaSelecionada) {
    return {
      url: API_URL + "/fases/" + idMateriaSelecionada,
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
      },
    };
  }

  export function GET_EXERCICIOS_FASE(token,idFaseSelecionada) {

    return {
      
      url: API_URL + "/exercicios/" + idFaseSelecionada,
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
      },
    };
  }

  export function VALIDAR_EXERCICIO(token, layout) {
    return{

      url: API_URL + "/testes/js?funcao="+`${encodeURIComponent(layout)}`,
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    },
   };
  }
  
  
