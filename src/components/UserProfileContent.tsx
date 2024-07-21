import React from 'react';
import { User } from '../types/Type';

const UserProfileContent: React.FC<User> = (user) => {
  return (
    <div className="user-profile-content">
      <img src={user.profilePicture} alt="Profile" />
      <form>
        <input type="text" placeholder={user.name} />
        <input type="email" placeholder={user.email} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserProfileContent;
