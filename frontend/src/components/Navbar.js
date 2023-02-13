import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useSelector } from "react-redux";
const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {auth && (
            <div>
              <span>{auth.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!auth && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
