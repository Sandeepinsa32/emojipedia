import React , {useState} from "react";
import './App.css';


const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
   /** add some more to show how the app now expands when there's new data */
};

  
function App() {
  
    const [onChange, setOnChange] = useState('');

    function changeHandler(event){
    
          var userInput = event.target.value;
          var meaning=[userInput,'=',emojiDictionary[userInput] ]
          console.log(userInput);
         if(userInput in emojiDictionary){
            setOnChange(meaning);
         }else{
            setOnChange('Sorry This Emoji Is Not In Our Database ')
         }

      
     }

  return (
    <div className="App">
       <h1 style={{backgroundColor:'black' , color:'white' }}>Welcome to the Game  </h1>
      
      <input style={{padding:'1rem',width:'80%'}} 
        onChange={changeHandler} placeholder="search an emoji here"
      ></input>

      <h1> {onChange} </h1>

      </div>
  );
}

export default App;
