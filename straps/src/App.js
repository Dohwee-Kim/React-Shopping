import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';


function App() {
  let posts = ' 강남 고기 맛집 ';
  let [titleState, titleModify] = useState(['남자 코트 추천','킹왕짱','넓은길댁']);  //스테이트 만드는법
  let [thumbsUp, modifyThumbsUp] = useState(0);
  let [isTitleClicked, modifyIsTitleClicked] = useState(false);
  let [isBtnClicked, modifyIsBtnClicked] = useState(false);
  let [titleIndex, modifyTitleIndex] = useState(false);

  let [inputStr, modifyInputStr] = useState(''); //기본값 empty string 

  function repeatUI() {
    var arr = [];
    for (var i =0; i < 3; i++) {
      arr.push(<div> 안녕</div>)
    }

    return arr
  }

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

        <div className="publish">
          <input />
          <button>저장</button>
        </div>

         
        { //map 사용법  i 는 이뉴머레이터 같은 역할을 해준다
          titleState.map(function(element, i){
            return (
              <div className="list" key={i}>
                <h3 onClick={ ()=>{modifyIsTitleClicked(!isTitleClicked)}} > {element} </h3>
                <p> 2월 17일 발행</p>
              </div>
              )
          })
        }

        { //repeatUI()
        }

          
          <input onChange={ (e)=>{ modifyInputStr(e.target.value); } }></input>


          <button onClick={()=>{modifyTitleIndex(0); modifyIsBtnClicked(!isBtnClicked)}}>Button</button>
          <button onClick={()=>{modifyTitleIndex(1); modifyIsBtnClicked(!isBtnClicked)}}>Button</button>
          <button onClick={()=>{modifyTitleIndex(2); modifyIsBtnClicked(!isBtnClicked)}}>Button</button>
        

          
        {
          isTitleClicked=== true
          ? <Modal></Modal> 
          : null   //텅빈 HTML 이라는 뜻
        }

        {
          isBtnClicked === true 
          ? <SecondModal titleState={titleState} titleIndex={titleIndex}></SecondModal>
          : null
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

//Props 로 전송을 해야 사용가능
function SecondModal(p) {
  return (
    <div className="modal-screen">
      <h2> {p.titleState[p.titleIndex]} </h2>
      <p>Date</p>
      <p>Detail</p>
    </div>
  )
}

export default App;