import React, { useState } from "react";
import AuthForm from "./AuthForm";

function AuthPage() {
  return (
    <div>
      <h1>Welcome</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <AuthForm onLogin={handleLogin} />
      </div>
    </div>
  );
}

export default AuthPage;
