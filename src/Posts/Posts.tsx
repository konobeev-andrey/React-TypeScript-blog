import React, { useEffect } from "react";
import Post from "./../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPostsData, PostType } from "../redux/postsRedusers";
import Preloader from "../common/Preloader/Preloader";
import { StateType } from "../redux/state";

export const Posts: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector<StateType, Array<PostType>>(
    (state) => state.posts.data
  );

  useEffect(() => {
    dispatch(getPostsData());
  }, []);

  let postsRevers = [...posts].reverse();
  return (
    <div>
      {Boolean(postsRevers.length) ? (
        <Preloader />
      ) : (
        postsRevers.map(({ id, title, body }) => (
          <Post key={id} id={id} title={title} body={body} />
        ))
      )}
    </div>
  );
};
