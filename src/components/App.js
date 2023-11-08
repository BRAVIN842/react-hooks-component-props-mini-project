import React from "react";
import blogData from "../data/blog";
// import Article from "./Article";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
       <Header name={blogData.name} />
       <About image={blogData.image} aboutText={blogData.about} /> 
       <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;