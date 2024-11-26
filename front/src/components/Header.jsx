import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>
          <Link to="/todos" style={styles.headerLink}>ToDo</Link>
        </h1>
        <ul style={styles.navList}>
          <li><Link to="/new_todo" style={styles.link}>Create Todo</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: { color: "#333", padding: "10px 20px", textDecoration: "none" },
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { margin: 0 },
  navList: { listStyleType: "none", display: "flex", gap: "15px", margin: 0, padding: 0 },
  headerLink: { color: "#333", textDecoration: "none" },
  link: { textDecoration: "none", padding: "10px", borderRadius: "5px", backgroundColor: "#B8D5C1", color: "#143806" },
};

export default Header;
