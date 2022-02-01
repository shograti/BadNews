import React from 'react';

const UniqueNews = (props) => {

    function filterBadNews(str){
        str = str.toLowerCase();
        const badWords = ['condamné', 'soupçonné', 'meurtre', 'assasinnat','guerre','terrorisme','coup d\nétat','famine','violence','violent','couteau']
        return badWords.some(badWord => str.includes(badWord))     
    }

    return (
        <div className="card-container">
            
            {filterBadNews(props.uniqueNews.title) ? <a href={props.uniqueNews.url} target="_blank" rel="noreferrer"><h2>{props.uniqueNews.title}</h2></a> : null }
        
        </div>
    );
};

export default UniqueNews;