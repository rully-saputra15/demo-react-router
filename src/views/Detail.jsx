import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Detail() {
  const { movieId } = useParams();
  return (
    <section>
      <h1>Detail</h1>
      <p>Ini halaman detail dengan id {movieId}</p>
    </section>
  );
}
