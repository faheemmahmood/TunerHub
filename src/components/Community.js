// Community.js
import React from 'react';
import './styles/Community.css';

function Community() {
  return (
    <div className="community">
      <h2 className="section-title">Our Community</h2>
      <div className="profile-grid">
        <div className="profile-card">
          <img src="/assets/user1.jpg" alt="User 1" />
          <p>@user1</p>
        </div>
      </div>
    </div>
  );
}

export default Community;
