import React from "react";
import { useLocation } from "react-router-dom";

const SignIn = () => {
    const location = useLocation();
    const { email } = location.state || {};
    return (
      <div>
        {email}
      </div>
    );
};
export default SignIn;