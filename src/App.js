import './App.css';
import { useEffect, useState } from 'react';
import BadNews from './BadNews';
const accessKey = ""
function App() {

  const [badNews, setBadNews] = useState([]);
  
  async function fetchNews() {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=${accessKey}&countries=fr`)
    .then(response=>response.json())
       setBadNews(response.data);
    }



const renderNews=()=>{
  console.log(badNews)
}
     

     
  return ( <div>
    <button onClick={()=>{fetchNews()}}>set moi les news</button>
    <button onClick={()=>{renderNews()}}>console log moi les news</button>

    <BadNews badNews={badNews}/>
  </div>
 
  );
}

export default App;
