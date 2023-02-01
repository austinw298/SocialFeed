import React, { useState } from 'react';
import Feed from './Components/Feed/Feed';
import PostStatus from './Components/PostStatus/PostStatus';
import DislikeButton from './Components/DislikeButton/DislikeButton';
import LikeButton from './Components/LikeButton/LikeButton';
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';


function App() {

  const [entries, setEntries] = useState([{weight: 200, date: `11-23-23`}])
  return (
    <div >
        <Feed/>
        <PostStatus/>
        <DislikeButton/>
        <LikeButton/>
        <CreatePostForm/>
    </div>
  );
}

export default App;
