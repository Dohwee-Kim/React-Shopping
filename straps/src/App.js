import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {
  let posts = ' 강남 고기 맛집 ';
  let [titleState, titleModify] = useState(['남자 코트 추천','킹왕짱','넓은길댁']);  //스테이트 만드는법
  let [thumbsUp, modifyThumbsUp] = useState(0);
  let [isTitleClicked, modifyIsTitleClicked] = useState(false);

  //리턴 안에는 반드시 하나의 HTML 태그만 시작하고 끝나야함. 
  return (
    <div className="App">

        <div className="black-nav">
          Developer blog
        </div>

        <div className="list">
          <h3>{titleState[0]} <span onClick={ ()=>{modifyThumbsUp(thumbsUp+1)}} >😀 </span> {thumbsUp}
          <span onClick={ ()=>{titleModify(['여자 코트 추천','정말 짱','만만세'])}}> 😍 </span>
          </h3>

          <p> 2월 17일 발행</p>
        </div>

        <div className="list">
          <h3> {titleState[1]} </h3>😀😃😍
          <p> 2월 17일 발행</p>
        </div>

        <div className="list">
          <h3 onClick={ ()=>{modifyIsTitleClicked(!isTitleClicked)}} > {titleState[2]} </h3>
          <p> 2월 17일 발행</p>
        </div>

        
        {
          isTitleClicked=== true
          ? <Modal></Modal> 
          : null   //텅빈 HTML 이라는 뜻
        }
        
        

    </div>
  );
}

//컴포넌트라는 문법
//주의점 몇가지 : 이름 대문자로 해주세요
function Modal() {
  return (
    <div className="modal-screen">
      <h2> title here</h2>
      <p>Date</p>
      <p>Detail</p>
    </div>
  )
}

export default App;