import styles from './Navbar.module.css';

import { useAuthentication } from '../hooks/useAuthentication';

import { useAuthValue } from '../context/AuthContext';

import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav className={styles.navbar}>
      <NavLink to='/miniblog-reactjs' className={styles.brand}>
        Eu, <span>Leandro</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/miniblog-reactjs' className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        {!user && <>
          <li>
            <NavLink to='/login' className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
          </li>
          <li>
            <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : "")}>Registro</NavLink>
          </li>
        </>}
        {user && <>
          <li>
            <NavLink to='/posts/create' className={({ isActive }) => (isActive ? styles.active : "")}>Novo post</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
          </li>
        </>}
        <li>
          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;