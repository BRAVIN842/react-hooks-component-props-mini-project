import React from "react";
import blogData from "../data/blog";
import Article from "./Article";
import Header from "./Header";
console.log(blogData);

function App() {
  return (
    <div className="App">
       <Header name={blogData.name} />
       <div className="articles">
        {blogData.posts.map((post) => (
          <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
          minutes={post.minutes} 
          />
        ))}
       </div>
    </div>
  );
}

export default App;
