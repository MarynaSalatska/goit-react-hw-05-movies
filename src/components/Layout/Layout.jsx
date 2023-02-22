import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css'

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? css.active : css.NavLink)}
            to="/movies"
          >
            {' '}
            Movies{' '}
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
