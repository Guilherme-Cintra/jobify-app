import { Link } from "react-router-dom";

const Register = () => {
  console.log("Register component is rendering");
  return (
    <div>
      <h1>Register Page</h1>;<Link to={"/login"}>Login page</Link>
    </div>
  );
};

export default Register;
