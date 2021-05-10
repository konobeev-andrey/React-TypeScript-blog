import React from "react";
import {NavLink} from "react-router-dom";



const Post = (props:any) => {

    return (
        <NavLink to={'/post/' + props.id} className="post">
            <h2 className="post__title">{props.title}</h2>
            <p className="post__subtitle">{props.body}</p>
        </NavLink>
    )
}

export default Post;