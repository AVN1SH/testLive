import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    const loading = true;
    const authStatus = false;
    if(!loading && !authStatus) {
      navigate("/", {replace : true});
    }
  }, [navigate])

  return children
}

export default ProtectedRoute
