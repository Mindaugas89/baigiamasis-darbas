import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Button from "./Button";
import styles from "./Topbar.module.scss";
import { PATHS } from "../routes/consts";

const Topbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <header className={styles.topbar}>
      <nav>
        <img clasname={styles.logo}
          src="https://cdn.worldvectorlogo.com/logos/party-city.svg"
          alt="logo"
        />
        <div>
          <Link to={PATHS.Home}>Home</Link>
          <Link to={PATHS.NewClient}>Add new client</Link>
        </div>
        <div>
          <strong className={styles.email}>{user.email}</strong>{" "}
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
