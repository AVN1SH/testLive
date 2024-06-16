import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const StudentProtectedRoute = ({ children } : ProtectedRouteProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loading = false
    const userData = {role : "sudent"}
    if(!loading && !(userData?.role === "student")) {
      navigate("/", {replace : true});
    }
  }, [navigate])

  return children
}

export default StudentProtectedRoute
