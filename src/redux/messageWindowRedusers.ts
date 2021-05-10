const TOGGLE_WINDOW = 'messageWindow/TOGGLE_WINDOW'
const MESSAGE_ERROR = 'messageWindow/MESSAGE_ERROR'

type initialStateType ={
    OpenWindow: boolean,
    messageError: string | null
}
let initialState:initialStateType = {
    OpenWindow:false,
    messageError: null
}

const messageWindow = (state = initialState, action:any) => {
    switch (action.type) {
        case TOGGLE_WINDOW:
            return {
                ...state,
                OpenWindow: !state.OpenWindow
            }
        case MESSAGE_ERROR:
            return {
                ...state,
                messageError: !state.OpenWindow
            }

        default:
            return state
    }
}
type toggleWindowActionType ={type:typeof TOGGLE_WINDOW}
export const toggleWindow = ():toggleWindowActionType => ({type:TOGGLE_WINDOW})

type setMessageErrorActionType = {
    type: typeof MESSAGE_ERROR,
    payload: string
}
export const setMessageError = (error:string):setMessageErrorActionType => ({type: MESSAGE_ERROR, payload: error})

export default messageWindow;