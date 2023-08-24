// Inicializar estado 
const initialState = {
    showProjects: [{
        title: "",
        description: "",
        imgUrl: "",
    }]
}

export default (state = initialState, action) => {
    //validar el tipo de `action` de acuerdo a cada identificador
    switch (action.type) {
        case 'SHOW_PROJECTS':
            return {
                ...state, //Retorna el store
                showProjects: action.payload //showProjects toma el nuevo valor
            }
            break;
        default:
            return state;
            break;
    }

}

//Retorna lista de projectos
export const getProjects = state => state.resultadoReducer.showProjects;
