import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import { MainS } from "./styles/Main.styles";
import Account from "./Account";
import Project from "../pages/Project";
import Customer from "../pages/Customer";
import Office from "../pages/Office";
import Location from "../pages/Location";
import Contact from "../pages/Contact";

export default function Main() {
  return (
    <MainS>
      <Nav />
      <Routes>
        <Route path="/intelConstruct" element={<Account />} />
      </Routes>
      <Routes>
        <Route path="/project" element={<Project />} />
      </Routes>
      <Routes>
        <Route path="/customer" element={<Customer />} />
      </Routes>
      <Routes>
        <Route path="/office" element={<Office />} />
      </Routes>
      <Routes>
        <Route path="/location" element={<Location />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainS>
  );
}
