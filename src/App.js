import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login/Login";
import PrivateRoute from "./Auth/RouterCustom/PrivateRoute";
import PublicRoute from "./Auth/RouterCustom/PublicRoute";
import Home from "./Page/Home";

function App() {
  const authen = localStorage.getItem("au");
  console.log(authen);
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/calender" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
