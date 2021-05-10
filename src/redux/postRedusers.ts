import {commentsApi, postsApi} from "../api/api";
import {PostType} from "./postsRedusers";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./state";

const SET_COMMENTS_POST = "post/SET_COMMENTS_POST"
const SET_POST_OPEN = "post/SET_POST_OPEN"


type CommentType = {
    postId: number,
    id:number,
    name:string,
    email:string,
    body:string,
}
type initialStateType = {
    comments:Array<CommentType>
    post: PostType | null
}
let initialState:initialStateType = {
    comments: [],
    post: null
}
type ActionsTypes = setCommentsPostActionType | setPostOpenActionType

const postReducer = (state = initialState, action:ActionsTypes) => {
    switch (action.type) {
        case SET_COMMENTS_POST:
            return {
                ...state,
                comments: action.payload
            }
        case SET_POST_OPEN:
            return {
                ...state,
                post: action.payload
            }

        default:
            return state
    }
}

type setCommentsPostActionType = {
    type: typeof SET_COMMENTS_POST,
    payload: Array<CommentType>
}
export const setCommentsPost = (comments:Array<CommentType>):setCommentsPostActionType => ({
    type: SET_COMMENTS_POST,
    payload: comments
})

type setPostOpenActionType = {
    type: typeof SET_POST_OPEN,
    payload: PostType
}
export const setPostOpen = (post:PostType):setPostOpenActionType => ({
    type: SET_POST_OPEN,
    payload: post
})

export type ThunkPostType = ThunkAction<Promise<void>, StateType, unknown, ActionsTypes>


export const getCommentsPost = (postId:number):ThunkPostType => {
    return async (dispatch:any) => {
        let response = await commentsApi.getCommentPost(postId)
        if (response.status === 200) {
            dispatch(setCommentsPost(response.data));
        }
        if (response.status === 404) {
            console.log('error')
        }

    }
}
export const getPostOpen = (postId:number): ThunkPostType => {
    return async (dispatch:any) => {
        let response = await postsApi.getPost(postId)
        if (response.status === 200) {
            dispatch(setPostOpen(response.data));
        }

    }
}


export default postReducer