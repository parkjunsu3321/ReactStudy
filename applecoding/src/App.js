import { useState } from 'react';
import './App.css';
function App() {
  let [a,b] = useState(['남자 코드 추천','강남 우동맛집','리액트 독학']);
  let [good,setgood] = useState([0,0,0]);
  let [modal, setmodal] = useState(false);
  let [index_s, setIndex] = useState(0)
  let [value, setValue] = useState('')
  return (
    <div className="App">
      <div className="black-nav">
        <h4 >
          블로그임
        </h4>
      </div>
      <button onClick={()=>{
        let copy = [...a];
        copy.sort();
        b(copy);
      }}>
        가나다순 정렬
      </button>
      <button onClick={()=>{
        let copy = [...a];
        copy[0] = '여자코드 추천'
        b(copy);
      }}>
        글 수정  
      </button>
      {
        a.map(function(data, i){
          return(
            <div className='list'>
            <h4 onClick={()=>{
              if(modal == true)
              {
                setmodal(false)
              }
              else
              {
                setmodal(true)
                setIndex(i)
              }
            }}>
            {data}
            </h4> 
            <span onClick={()=>{
              let copy_good = [...good]
              copy_good[i] = copy_good[i] + 1
              setgood(copy_good)}}>👍</span> 
            {good[i]}     
            <p>
              2월 17일 발행 
            </p>
            </div>
          )
        })
      }
      <button onClick={()=>{setIndex(0)}}>0번</button>
      <button onClick={()=>{setIndex(1)}}>1번</button>
      <button onClick={()=>{setIndex(2)}}>2번</button>
      {
        modal ? <Modal index={index_s} change={b} value={a}/> : setmodal
      }
    </div>
    
  );
}

function Modal(props){
  return(
    <div className="modal">
        <h4>{props.value[props.index]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.change(['여자 코드 추천','강남 우동맛집','리액트 독학'])}}>글 수정</button>
    </div>
  )
}

export default App;