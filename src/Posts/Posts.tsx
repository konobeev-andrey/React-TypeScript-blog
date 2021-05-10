import React, {useEffect} from "react";
import Post from "./../Post/Post";
import {connect} from "react-redux";
import {getPostsData, PostType} from "../redux/postsRedusers";
import Preloader from "../common/Preloader/Preloader";
import { StateType } from "../redux/state";

type MstpType = {
    posts: Array<PostType>
}
type MdtpType = {
    getPostsData: () => void
}
type PropsType = MdtpType & MstpType

const Posts:React.FC<PropsType> = (props)=> {
    useEffect(() => {
        props.getPostsData()
    }, [])

    let  postsRevers = [...props.posts].reverse()
    return (<div>
        {postsRevers.length === 0
            ? <Preloader/>
            : postsRevers.map(p => <Post
                key={p.id}
                id={p.id}
                title={p.title}
                body={p.body}/>)}
    </div>)
}

const mstp = (state:StateType):MstpType => ({
    posts: state.posts.data
})
export default connect<MstpType, MdtpType,null,StateType >(mstp, {getPostsData})(Posts)
