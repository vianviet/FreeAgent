import { Route, Navigate } from "react-router-dom";

function PrivateRoute(props) {
  const { component: Component, ...rest } = props;
  const isAuthenticated = localStorage.getItem("au");

  const render = (props) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <Component {...props} />;
  };

  return <Route {...rest} element={render} />;
}

export default PrivateRoute;
