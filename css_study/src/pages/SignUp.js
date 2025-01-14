import React from "react";
import { useLocation } from "react-router-dom";

const SignUp = () => {
    const location = useLocation();
    const { email } = location.state || {};
    return (
      <div>
        {email}
      </div>
    );
};
export default SignUp;