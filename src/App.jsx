import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import CustomLoading from "./components/CustomLoading";
import Main from "./pages/Main";
const Dashboard = lazy(() =>
  wait(1000).then(() => import("./pages/Dashboard"))
);
const Login = lazy(() => wait(1000).then(() => import("./pages/Login")));
const Register = lazy(() => wait(1000).then(() => import("./pages/Register")));

const App = () => {
  return (
    <Suspense fallback={<CustomLoading />}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/signin" element={<Login />} />
          <Route exact path="/signup" element={<Register />} />
          <Route exact path="/backstore/*" element={<Dashboard />} />
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

const wait = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export default App;
