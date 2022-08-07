import React from "react";
import Post from "./Post";
import Grace from "./img/grace.jpg"
import Albums from "./img/albums.jpg";
import Boom from "./img/boom.jpg";


const Posts = () => {
  const blogPosts = [
    {
      title: "The rise (and rise) of the shoulder pad",
      body: `While the quarterback-styles of yesteryear are particularly haunting, their modern counterparts add an extra level of confidence to any outfit. They add structure to everyday pieces like t-shirts and blouses to make basic pieces more interesting.
      `,
      author: "Retro Girl ",
      imgUrl: Grace,
    },
    {
      title: "Album covers that inspired ",
      body: `The 80s have always polarised opinion. Synonymous with Margaret Thatcher, Reaganomics yuppies and Live Aid, the era’s aspirational values extended to the music it produced, with the glossy production techniques of the day holding sway as the CD format was introduced and subsequently threatened to usurp vinyl. Despite all that, the record sleeve remained a highly respected medium for art – as the best 80s album covers prove. `,
      author: "Rock Lover",
      imgUrl: Albums,
    },
    {
      title: "For the love of the boombox",
      body: `The boombox was introduced to the American market during the late 1970s. The desire for louder and heavier bass led to bigger and heavier boxes; by the 1980s, some boomboxes had reached the size of a suitcase. Some larger boomboxes even contained vertically mounted record turntables.`,
      author: "80s Freak",
      imgUrl: Boom,
    },
    
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;
