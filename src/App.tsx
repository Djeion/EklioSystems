import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <Authenticator.Provider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <div className="auth-container">
                <Authenticator>
                  <Dashboard />
                </Authenticator>
              </div>
            }
          />
        </Routes>
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
