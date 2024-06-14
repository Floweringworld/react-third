import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout setUser={setUser} user={user} />}>
            <Route index element={<Home user={user} />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/profile"
            element={<Profile setUser={setUser} user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
