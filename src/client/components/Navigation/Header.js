import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Login from '../../containers/LoginPage/LoginPage.component';

function signOut() {
  window.location.href = '/';
}

export default function Header({ isAuthenticated = false }) {
  if (isAuthenticated) {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button type="button" onClick={signOut}>
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign up</Link>
        </li>
        <li>
          <Link to="/reset-password">Reset password</Link>
        </li>
        <li>
          <Link to="/login">
            <Login />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
