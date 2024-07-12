import React from 'react';

const ProtectedComponent = () => {
  return (
    <div>
      <h1>Protected Component</h1>
      <p>This is a protected route that only authenticated users can access.</p>
    </div>
  );
};

export default ProtectedComponent;
