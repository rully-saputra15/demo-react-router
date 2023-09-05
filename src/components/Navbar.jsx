import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        justifyContent: "center",
        alignItems: "stretch",
        flexBasis: 1,
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        padding: "4px 4px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */
/* <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        About
      </NavLink> */
