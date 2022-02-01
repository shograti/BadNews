import React from 'react';
import UniqueNews from './UniqueNews';

const BadNews = (props) => {
    const sortArticles = ()=>{
        
            return props.badNews.map(uniqueNews =>
                <UniqueNews key={uniqueNews[uniqueNews]} uniqueNews={uniqueNews}/>)
        
    }
    return (
        <div>
            {sortArticles()}
        </div>
    );
};

export default BadNews;