import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Footer />
      </Router>
    </Authenticator.Provider>
  );
}

export default App;
