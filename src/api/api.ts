import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL:`https://jsonplaceholder.typicode.com/`
})
export const postsApi = {
    getPosts(){
        return instance.get('posts')
    },
    getPost(postId: any){
        return instance.get('posts/' + postId)
    },
    setPost({title, body, id, userId}:any){
        return instance.post('posts',{title, body, id, userId})
    }

}

export const commentsApi = {
    getCommentPost(postId:any) {
        return instance.get('posts/' + postId + '/comments')
    }
}