import React, { useRef, useState } from 'react';
import http from "../plugins/Fetch";

function Search({setArticle, }) {

    const [error, setError] = useState("")
    const searchRef = useRef()

    function getData(){
        const keyword = {
            keyword: searchRef.current.value
        }
        http.post('/keyword', keyword).then(res => {
            if (res.error){
                return setError(res.message)
            }
            setError("")
            const articles = res.data.articles.slice(0, 9)
            setArticle(articles)
        })
    }

    return (
        <div className="search d-flex flex-column justify-center align-center">
            <span className='error'>{error}</span>
            <div className='d-flex align-center justify-center p-10 sm'>
                <input ref={searchRef} className="keywordInput p-10" type="text" placeholder="Enter keyword"/>
                <div onClick={getData} className="searchButton p-10">Search</div>
            </div>
        </div>
    );
}

export default Search;