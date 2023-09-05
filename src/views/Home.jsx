import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <section>
      <h1>Home</h1>
      <p>Ini halaman home</p>
      <Outlet />
    </section>
  );
}
