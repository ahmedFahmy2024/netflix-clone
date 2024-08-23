import "./signup.css";
import logo from "../../assets/Netflix_Logo_RGB.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signup } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import Loading from "../../components/loading/Loading";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(name, email, password);
      toast.success("Sign Up Successful");
      navigate("/login");
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
      
      // Extract the error code
      const errorCode = error.code;
      
      // Create a user-friendly error message
      let errorMessage;
      switch (errorCode) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password is too weak';
          break;
        default:
          errorMessage = 'An error occurred during sign up';
      }
      
      // Toast the user-friendly error message
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="login">
      <img className="login-logo" src={logo} alt="" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your name"
          />
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
          <button onClick={handleSubmit} type="submit">Sign Up</button>
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
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
