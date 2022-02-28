import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {
  let posts = ' 강남 고기 맛집 ';
  let [titleState, titleModify] = useState('남자 코트 추천');  //스테이트 만드는법


  return (
    <div className="App">
      <div className="">
        <div class="black-nav">
          Developer blog
        </div>

        <div class="list">
          <h3> {titleState} </h3>
          <p> 2월 17일 발행</p>
        </div>

      </div>
    </div>
  );
}

export default App;
 