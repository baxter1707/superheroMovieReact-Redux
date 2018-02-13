import * as actionTypes from './actions'

const initialState = {
  userInput : []
}

const reducer = (state = initialState,action)=> {

  switch(action.type) {
    case actionTypes.ON_SAVE_TITLE:
      return{
        ...state,
        userInput : state.userInput.concat(action.payload)
      }
  }








  return state
}


export default reducer
