import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = false; // Replace with your actual authentication logic

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
