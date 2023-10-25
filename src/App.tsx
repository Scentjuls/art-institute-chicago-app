import "./App.css";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Store from "./Redux/Store";
import { Home } from "./Pages/Home/Home";
import { Details } from "./Pages/Details/Details";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
