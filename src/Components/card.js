import React from "react";

function Button({ handleLoginClick }) {
  const handleClick = () => {
    handleLoginClick();
  };
  return (
    <div className="button">
      <div>
        <span onClick={handleClick} className="uploadicon">
          Upload
        </span>
      </div>
    </div>
  );
}

const LoginForm = ({ isShowLogin }) => {
  return (
    <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Upload</h1>
            <label>Type</label>
            <br></br>
            <input type="text" name="type" className="login-box" />
            <br></br>
            <label>Name</label>
            <br></br>
            <input type="text" name="name" className="login-box" />
            <br></br>
            <label>Image</label>
            <br></br>
            <input type="image" name="image" className="login-box" />
            <br></br>
            <label>Owner</label>
            <br></br>
            <input type="text" name="owner" className="login-box" />
            <br></br>
            <input type="submit" value="Upload" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export { Button, LoginForm };
