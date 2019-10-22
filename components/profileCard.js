import React from 'react';
import Link from 'next/link';

const ProfileCard = props => {
  return (
    <div>
      <p>ProfileImage</p>
      <Link href="/myprofile">
        <p>{props.name}</p>
      </Link>
    </div>
  );
};

export default ProfileCard;
