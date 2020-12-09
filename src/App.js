import React, {useState} from "react";
import './App.css';

      const emojiDictionary = {
        "😊": "Smiling",
        "😳": "disbelief",
        "😔": "sad",
        "🥡": "takeout box",
        "❤️": "love",
        "😑": "annoyance"
      };

var emojiDic = Object.keys(emojiDictionary);

function App() {

            const [onChange, setOnChange] = useState('');

  function changeHandler(event) {

            var userInput = event.target.value;
            var meaning = [userInput, ' ', ' = ', ' ', emojiDictionary[userInput]]

            if (userInput in emojiDictionary) {
              setOnChange(meaning);
            } else {
              setOnChange('Sorry This Emoji Is Not In Our Database ')
            }
  }


  function clickHandler(emoji) {
            console.log(emoji)
            var userInput = emoji;

            var meaning = [userInput, ' ', ' = ', ' ', emojiDictionary[userInput]]
            // console.log(userInput);
            if (userInput in emojiDictionary) {
              setOnChange(meaning);
            } else {
              setOnChange('Sorry This Emoji Is Not In Our Database ')
            }

  }

  // function getbg(index) {

  //   return '#222';

  // }

  return ( 
  <div className = "App" >
              <h1 className="heading-text" > Welcome to the Game </h1>

              <input className="input-box" 
              onChange = {changeHandler}  
              placeholder = "search an emoji here" >
              </input>
    
              <div> {emojiDic.map(  (emoji) => {return <span 
                                                key = {emoji} 
                                                onClick = { () => clickHandler(emoji)} 
                                                className="main-icon"
                                                > {emoji } </span> })
                      }
              </div>
              <h3> meaning of {onChange} </h3>
    </div>
  );
}

export default App;
