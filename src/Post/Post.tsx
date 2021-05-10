import React from "react";
import { NavLink } from "react-router-dom";

type PostPropsType = {
  id: string;
  title: string;
  body: string;
};

export const Post: React.FC<PostPropsType> = (props) => (
  <NavLink to={"/post/" + props.id} className="post">
    <h2 className="post__title">{props.title}</h2>
    <p className="post__subtitle">{props.body}</p>
  </NavLink>
);
