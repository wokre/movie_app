import React from 'react';

//props, props.object
//ex) props ==> 태그의 전체 속성값 object형식으로 전달
//ex) props.favorite ==> 속성 중 하나의 값 확인 = { favorite }

function Food ({name, pictures}) {
  // return <h1>I like {props.favorite}</h1>
  return <div>
    <h2>I like {name}</h2>
    <img src={pictures}/>
  </div>
}

//create function
const iLikeFood = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {iLikeFood.map(dish => <Food name={dish.name} pictures={dish.image}/>)}
    </div>
  );
}

export default App;
