import './App.css';
import React, { useState } from 'react';
import Search from "./components/Search";
import ArticleCard from "./components/ArticleCard";

function App() {

    const [article, setArticle] = useState([])


  return (
    <div className="App">
        <Search setArticle={setArticle}/>
        <ArticleCard article={article}/>
    </div>
  );
}

export default App;
