import { Link } from "react-router-dom";


export function LoginLink() {
    return <Link to="/login" className="nav-links">Login</Link>;
  }
  
  export function SignupLink() {
    return <Link to="/signup" className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors">Sign Up</Link>;
  }
  
  