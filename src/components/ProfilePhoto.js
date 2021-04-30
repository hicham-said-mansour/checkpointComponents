import React from 'react';
import Image from './profilePic.jpg';

function ProfilePhoto() {

  return(
<img src = {Image} style= {{height:'100px' , width: '100px' }}></img>
  )
}

export default ProfilePhoto;