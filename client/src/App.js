import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import SinglePage from "./pages/SinglePage/SinglePage";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route exact path="/post/:postId" element={<SinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;
