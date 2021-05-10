import "./App.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPostsData } from "./redux/postsRedusers";
import { getCommentsPost, getPostOpen } from "./redux/postRedusers";
import { Posts } from "./Posts/Posts";

type AppPropsType = {
  // getPostsData(): ThunkPostsType;
  // getCommentsPost(postId: number): ThunkPostType;
  // getPostOpen(postId: number): ThunkPostType;
};

export const App: React.FC<AppPropsType> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsData());
    dispatch(getCommentsPost(1));
    dispatch(getPostOpen(1));
    // props.setMessageError('ерунда какая то')
  }, []);

  return <Posts />;
};

// console.log(App);
// const AppContainer = compose<MdtpType & RouteComponentProps>(
//   withRouter,
//   connect<null, MdtpType, null, StateType>(null, {
//     getPostsData,
//     getCommentsPost,
//     getPostOpen,
//   })
// )(App);

// export default <AppContainer />;
