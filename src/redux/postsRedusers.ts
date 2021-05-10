import {postsApi} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./state";

const SET_POSTS_DATA = "posts/SET_POSTS_DATA"
const SET_POST = "posts/SET_POST"

export type PostType = {
    userId: number,
    id:number,
    title:string,
    body:string,
}
type initialStateType ={
    data:Array<PostType>,
}
let initialState:initialStateType = {
    data: [{
        userId:1,
        id:1,
        title:"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body:"quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
    }],
}
type ActionsTypes = SetPostsDataActionType | SetPostActionType

const postsReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case SET_POSTS_DATA:
            return {
                ...state,
                data: action.payload
            }
        case SET_POST:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            return state
    }
}
type SetPostsDataActionType = {
    type: typeof SET_POSTS_DATA,
    payload: Array<PostType>
}
export const setPostsData = (data:Array<PostType>):SetPostsDataActionType => ({
    type: SET_POSTS_DATA,
    payload: data
})

type SetPostActionType = {
    type: typeof SET_POST,
    payload: PostType
}
export const setPost = (post:PostType):SetPostActionType => ({
    type: SET_POST,
    payload: post
})

export type ThunkPostsType = ThunkAction<Promise<void>, StateType, unknown, ActionsTypes>

export const getPostsData = (): ThunkPostsType => {
    return async (dispatch: any) => {
        let response = await postsApi.getPosts()
        if (response.status === 200) {
            dispatch(setPostsData(response.data));
        }

    }
}
export const setPostApi = ({title, body, id, userId = 11}: PostType): ThunkPostsType => {
    return async (dispatch:any) => {
        let response = await postsApi.setPost({title, body, id, userId})
        if (response.status === 201) {
            dispatch(setPost({title, body, id, userId}));
        }

    }
}

export default postsReducer