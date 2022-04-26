import React, { useState } from "react";
export default function Login() {
  const [text, setText] = useState("");
  console.log(text);
  const handleClick = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("au"));
    localStorage.setItem("au", true);
    console.log(localStorage.getItem("au"));
    window.location.href = "/home";
  };

  return (
    <div id="login-form">
      <div className="login d-flex flex-column justify-content-between">
        <div></div>
        <div className="text-uppercase header mt-3">freeagent</div>
        <div className="main d-flex justify-content-center mb-5">
          <form className="d-flex flex-column">
            <input
              className="input mt-3 mb-3 p-10"
              type="text"
              placeholder="ユーザID"
              onChange={(e) => setText(e.target.value)}
            />
            <input
              className="input mt-3 mb-3"
              type="password"
              placeholder="パスワード"
            />
            <button
              className="login-btn mt-3 mb-3"
              onClick={(e) => handleClick(e)}
            >
              ログイン
            </button>
          </form>
        </div>
        <div></div>
        <div className="footer mb-4">©2021 Faeast</div>
      </div>
    </div>
  );
}
