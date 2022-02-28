import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {
  let posts = ' 강남 고기 맛집 ';
  let [titleState, titleModify] = useState(['남자 코트 추천','킹왕짱','넓은길댁']);  //스테이트 만드는법
  let [thumbsUp, modifyThumbsUp] = useState(0);

  return (
    <div className="App">
      <div className="">
        <div className="black-nav">
          Developer blog
        </div>

        <div class="list">
          <h3>{titleState[0]} <span onClick={ ()=>{modifyThumbsUp(thumbsUp+1)}} >😀 </span> {thumbsUp}
          <span onClick={ ()=>{titleModify(['여자 코트 추천','정말 짱','만만세'])}}> 😍 </span>
          </h3>

          <p> 2월 17일 발행</p>
        </div>

        <div class="list">
          <h3> {titleState[1]} </h3>😀😃😍
          <p> 2월 17일 발행</p>
        </div>

        <div class="list">
          <h3> {titleState[2]} </h3>
          <p> 2월 17일 발행</p>
        </div>

      </div>
    </div>
  );
}

export default App;
 