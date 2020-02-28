import React from 'react';

//props, props.object
//ex) props ==> 태그의 전체 속성값 object형식으로 전달
//ex) props.favorite ==> 속성 중 하나의 값 확인 = { favorite }

function Food ({favorite}) {
  // return <h1>I like {props.favorite}</h1>
  return <h1>I like {favorite}</h1>
}
function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgiopsal" />
      <Food favorite="chukumi" />
      <Food favorite="bulgogi" />
      </div>
  );
}

export default App;
