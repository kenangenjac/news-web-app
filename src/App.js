import TopBar from "./components/topbar/TopBar";
import Settings from "./pages/settings/Settings";
import SinglePage from "./pages/singlePage/SinglePage";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Register />
    </div>
  );
}

export default App;
