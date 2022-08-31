import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import "antd/dist/antd.min.css";
import AppLayout from "./pages/Layoutex";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />}>
        <Route path=":id" element={<Profile />} />
      </Route>
      <Route path="/layout" element={<AppLayout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
      {/* <Route path="/api/helllo" element={<Hello />} /> */}
    </Routes>
  );
}

export default App;
