import "./App.css";
import React, { ReactElement, useEffect } from "react";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { StateType } from "./redux/state";
import { getPostsData, ThunkPostsType } from "./redux/postsRedusers";
import {
  getCommentsPost,
  getPostOpen,
  ThunkPostType,
} from "./redux/postRedusers";
import Posts from "./Posts/Posts";

type MdtpType = {
  getPostsData: () => ThunkPostsType;
  getCommentsPost: (postId: number) => ThunkPostType;
  getPostOpen: (postId: number) => ThunkPostType;
};
const App: React.FC<MdtpType> = (props): ReactElement<any, any> => {
  useEffect(() => {
    props.getPostsData();
    props.getCommentsPost(1);
    props.getPostOpen(1);
    // props.setMessageError('ерунда какая то')
  }, []);

  return (
    <>
      <Posts />
    </>
  );
};
console.log(App);
const AppContainer = compose<MdtpType & RouteComponentProps>(
  withRouter,
  connect<null, MdtpType, null, StateType>(null, {
    getPostsData,
    getCommentsPost,
    getPostOpen,
  })
)(App);
console.log(AppContainer);

export default <AppContainer />;
