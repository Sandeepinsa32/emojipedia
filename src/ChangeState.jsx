//// for changing state of component

import React , {useState} from "react";
import './App.css';




  
function App() {

  var  [likeClickCount, setLikeClickCount] = useState(0);
 
  function likeClickHandler(){

      likeClickCount = likeClickCount + 1 ;
        setLikeClickCount(likeClickCount);

    }

  
  

  return (
    <div className="App">
       <h1 style={{backgroundColor:'black' , color:'white' }}>hello </h1>
       <button onClick={likeClickHandler} >like
       {likeClickCount} </button>
      </div>
  );
}

export default App;
