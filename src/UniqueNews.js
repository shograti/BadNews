import React from 'react';

const UniqueNews = (props) => {

    function filterBadNews(str){
        str = str.toLowerCase();
        const badWords = ['condamné', 'soupçonné']
        return badWords.some(badWord => str.includes(badWord))     
    }

    return (
        <div className="card-container">
            
            {filterBadNews(props.uniqueNews.title) ? <h2 key={props.uniqueNews.key}>{props.uniqueNews.title}</h2> : null }
        
        </div>
    );
};

export default UniqueNews;