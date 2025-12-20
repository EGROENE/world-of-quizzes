import { Link } from "react-router";

const Homepage = () => {
  return (
    <>
      <h1>Welcome to the Quiz Emporium!</h1>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <button>Play as Guest</button>
    </>
  );
};
export default Homepage;
