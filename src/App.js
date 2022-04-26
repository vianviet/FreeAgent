import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Auth/Login/Login";
import PrivateRoute from "./Auth/RouterCustom/PrivateRoute";
import Home from "./components/Home";

function App() {
  const authen = localStorage.getItem("au");
  console.log(authen);
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Login></Login>} />
        <Route path="/home" element={<PrivateRoute component={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;
