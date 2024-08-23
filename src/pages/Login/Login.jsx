import "./login.css";
import logo from "../../assets/Netflix_Logo_RGB.png";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../firebase/firebase.config";
import { useState } from "react";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(email, password);
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      toast.error(error.code);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="" />
      <div className="login-form">
        <h1>Sign In</h1>
        <form>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Your password"
          />
          <button onClick={handleSubmit} type="submit">
            Sign In
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          <p>
            New to Netflix? <Link to="/signup">Sign Up Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
