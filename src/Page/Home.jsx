import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function Home() {
  return (
    <div id="home-page" className="d-flex flex-row">
      <Header></Header>
      <Main></Main>
    </div>
  );
}
