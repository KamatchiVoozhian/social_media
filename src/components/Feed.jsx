import React from 'react';
import SearchFeed from './SearchFeed';
import Post from './Post';

function Feed() {
  let container = {
   
    width: '100%',
    height: '50%' 
  }
  return (
    <div style={container}>
      <Post
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      name="Lorem Ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>
      <Post
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqFBoEXYUjcxgUBQxlwjRJlPMsMI5ZaKO2iHlInEl9giTFmZdvQ"
      name="Dude"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>
      <Post
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      name="Me"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>
      <Post
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      name="Lorem Ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>
      <Post
      img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      name="Lorem Ipsum"
      text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam"/>
    </div>
  );
}

export default Feed;