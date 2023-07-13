import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./api/ApiGet";
import Crud from "./crud/Crud";
import AddUsers from "./crudTwo/AddUsers";
import CrudTwo from "./crudTwo/CrudTwo";
import Edit from "./crudTwo/Edit";
import User from "./crudTwo/User";
import About from "./pages/About";
import CardDetails from "./pages/CardDetails";
import CardPart from "./pages/CardPart";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/card" element={<CardPart />} />
          <Route path="/details/:id" element={<CardDetails />} />
          <Route path="/api" element={<Api />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/crud2" element={<CrudTwo />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/adduser" element={<AddUsers />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
