import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // FETCH DATA
    // SETELAH BERHASIL MASUKIN ACCESS TOKEN KE LOCAL STORAGE
    localStorage.setItem("access_token", "asal");
    navigate("/");
  };

  return (
    <section>
      <button onClick={handleLogin}>Login</button>
    </section>
  );
}
