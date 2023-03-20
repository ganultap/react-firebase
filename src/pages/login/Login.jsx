import { useContext, useState } from "react"
import "./login.scss"
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../../firebase"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
 
  const {dispatch} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch({type:"LOGIN", payload:user})
      navigate("/")
    })
    .catch((error) => {
      setError(true);
    });
  };
  return (
    <div className="login">
      <div className="card shadow">
        <h5 className="card-title mt-3 text-center shadow">
          <img className="center" src="https://i.ibb.co/JzMbRfy/dpwh-logo.png" alt="Dpwh Logo" width="60px" height="60px" /> <label htmlFor="login">DPWH BCDEO</label>
        </h5>
        <div className="card-body">
          <form className="form" onSubmit={handleLogin}>
            <input className="form-control" type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
            <input className="form-control" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
            <button className="btn orange" type="submit">Login</button>
            {error && <span>Wrong Email or Password!</span>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login