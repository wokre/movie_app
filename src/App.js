import React from 'react';
import PropTypes from 'prop-types';

//create function
const iLikeFood = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
      rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
      rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
      rating: 4.7
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
      rating: 4.6
  }
];

//props, props.object
//ex) props ==> 태그의 전체 속성값 object형식으로 전달
//ex) props.favorite ==> 속성 중 하나의 값 확인 = { favorite }

function Food ({name, pictures, rating}) {
  // return <h1>I like {props.favorite}</h1>
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={pictures} alt={name}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  pictures: PropTypes.string.isRequired,
  rating: PropTypes.number
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {iLikeFood.map(dish => <Food key={dish.id} name={dish.name} pictures={dish.image} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
