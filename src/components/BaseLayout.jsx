import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function BaseLayout() {
  return (
    <>
      <h1>Layout</h1>
      <Navbar />
      <Outlet />
    </>
  );
}
