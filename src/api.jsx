export const API_URL = "http://26.9.143.137:8080";


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

export function USER_ATUALIZAR(token, idUsuario) {
    return {
      url: API_URL + `/usuarios/atualizar/${idUsuario}`,
      options: {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        },
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

  export function VALIDAR_EXERCICIO(token, layout, idExercicio, idFase) {
    return{
      url: API_URL + "/testes/js?funcao="+`${encodeURIComponent(layout)}&idExercicio=${idExercicio}&idFase=${idFase}`,
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    },
   };
  }
  
  
  export function BUSCAR_ITENS_LOJA(token) {
    return{
      url: API_URL + "/loja",
      options: {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    },
   };
  }

  export function COMPRAR_ITEM_LOJA(token, idItem) {
    return{
      url: API_URL + `/loja/comprar/${idItem}`,
      options: {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`
        },
    },
   };
  }

  export function EQUIPAR_ITEM_ADQUIRIDO(token, novaFoto) {
    return {
        url: API_URL + "/usuarios/foto",
        options: {
            method: "PATCH",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', 
            },
            body: novaFoto,
        },
    };
}

  export function SALVAR_NA_PILHA(token, funcao) {
    return {
        url: API_URL + "/exercicios/salvaDefazer",
        options: {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify(funcao),
        },
    };
}
  export function DESFAZER_PILHA(token) {
    return {
        url: API_URL + "/exercicios/desfazer",
        options: {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        },
    };
}
  export function REFAZER_PILHA(token) {
    return {
        url: API_URL + "/exercicios/refazer",
        options: {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        },
    };
}