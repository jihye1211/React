import React from 'react';

function App() {
  const name = '리액트';

  // const : 한번 지정하고 나면 변경이 불가능한 상수를 선언할 때 사용하는 키워드
  // let, const는 scope가 함수 단위가 아닌 블록 단위
  // const : 상수, let : 변수
  // 기본적으로 const 사용, 값을 변경해야할 때 let 사용
  return (
    <>
      <h1>{name}안녕!</h1>
      <h2>잘 작동하니?</h2>
      
      <div>
      {name==='리액트'?(
        <h1>리액트입니다.</h1>
      ):(
        <h2>리액트가 아닙니다.</h2>
      )}
      </div>
    </>
  );
}

export default App;
