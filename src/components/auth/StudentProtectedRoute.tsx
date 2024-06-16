import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const StudentProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loading = false
    if(loading) {
      navigate("/", {replace : true});
    }
  }, [navigate])

  return children
}

export default StudentProtectedRoute
