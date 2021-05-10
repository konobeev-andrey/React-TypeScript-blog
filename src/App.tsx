import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Posts } from "./Posts/Posts";
import { getCommentsPost, getPostOpen } from "./redux/postRedusers";
import { getPostsData } from "./redux/postsRedusers";

/**
 * @param callback - thunk
 * @param props - props for thunk
 *
 * @returns memoCallback - memoize callback function
 */
export function useThunkCallback(callback: (props: any) => void, props: any) {
  const dispatch = useDispatch();
  const memoCallback = useCallback(() => dispatch(callback(props)), [
    callback,
    dispatch,
    props,
  ]);
  return memoCallback;
}

type AppPropsType = {};
export const App: React.FC<AppPropsType> = () => {
  const postsData = useThunkCallback(getPostsData, null);
  const postOpen = useThunkCallback(getPostOpen, 1);
  const commentsPost = useThunkCallback(getCommentsPost, 1);

  useEffect(() => {
    postsData();
    postOpen();
    commentsPost();
  }, [postsData, commentsPost, postOpen]);

  return <Posts />;
};
