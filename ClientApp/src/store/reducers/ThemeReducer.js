import * as ActionTypes from '../actions/ActionTypes'

const initialState = {
    theme:'light'
}

const setTheme = (state,action) =>{
    return{
        ...state,
        theme: state.theme =='light' ? 'dark' : 'light'
    }
}

const ThemeReducer = (state = initialState, action) =>{
    switch(action.type){
        case (ActionTypes.SET_THEME): return setTheme(state, action);
        default: return state;
    }
}

export default ThemeReducer;