import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useThunkCallback } from "../App";
import { Preloader } from "../common/Preloader/Preloader";
import { getPostsData, PostType } from "../redux/postsRedusers";
import { StateType } from "../redux/state";
import { Post } from "./../Post/Post";

export const Posts: React.FC = () => {
  const posts = useSelector<StateType, Array<PostType>>(
    (state) => state.posts.data
  );

  const postsData = useThunkCallback(getPostsData, null);

  useEffect(() => {
    postsData();
  }, [postsData]);

  let postsRevers = [...posts].reverse();

  return (
    <div>
      {!postsRevers.length ? (
        <Preloader />
      ) : (
        postsRevers.map(({ id, title, body }) => (
          <Post key={id} id={id.toString()} title={title} body={body} />
        ))
      )}
    </div>
  );
};
