import { combineReducers } from 'redux';
import {  UPDATE_BANNER, ADD_BASKET, REMOVE_BASKET, ADD_ROOM, REMOVE_ROOM, ADD_DATA, REMOVE_DATA, ADD_FILM } from '../constants/config';
const Films = {
  renderContacts: []
}
function RenderFilms (state = Films, action){

switch (action.type) {

  case 'SEARCH':
    return {
      ...state,
      renderContacts: action.data
    }
    case 'INITIALIZATION':
      return {
        ...state,
        renderContacts: action.data
      }

    default:
      return state;
  }
}
const bannerState = {
  counter: 0,
  dataImg: [
    'http://b.3ddd.ru/media/cache/sky_image_forum/tinymce_images/%D0%BE%D0%BB%D0%B5%D0%B3vop/4e9de0474a3d29f19f227d3f62f8ca73.jpg',
    'http://horrorzone.ru/uploads/_pages2/56673/mini/for_toro-750-300.jpg',
    'https://storage.yvision.kz/images/user/seattle/yT0WAvHEw2gnfGb1crf5R7Hn6L55VK.jpg'
  ]
}
function bannerUpdate (state = bannerState, action){
switch (action.type) {

  case UPDATE_BANNER:
    return {
      ...state,
      counter: action.counter
    }

    default:
      return state;
  }
}

const basket = {
  data: []
}
function dataBasket(state = basket, action){
switch (action.type) {

  case ADD_BASKET:
    return {
      ...state,
      data: [...state.data, action.data]
    }
    case REMOVE_BASKET:
      return {
        ...state,
        data: action.test
      }

    default:
      return state;
  }
}

const activRooms = {
  data: []
}
function Rooms(state = activRooms, action){

switch (action.type) {

  case ADD_ROOM:
    return {
      ...state,
      data: [...state.data, action.data]
    }
    case REMOVE_ROOM:
      return {
        ...state,
        data: action.test
      }

    default:
      return state;
  }
}
const initialHall = {
  data: []
}
function Hall(state = initialHall, action){
console.log('data',action.data);
switch (action.type) {
  case ADD_DATA:
    return {
      ...state,
      data: action.data
    }
    case REMOVE_DATA:
      return {
        ...state,
        data: action.data
      }

    default:
      return state;
  }
}
const initialData = {
  data: [
    {
      image: 'https://planetakino.ua/f/1/movies/avengers_infinity_war_original/Avengers-poster-small.jpg',
      time: '19.03.2018',
      text: 'Avengers: Infinity War (мовою оригіналу) (12+)',
      counter: '40'
    },
    {
      image: 'https://planetakino.ua/f/1/movies/winchester/Winchester-poster2-small.jpg',
      time: '23.03.2018',
      text: 'Вінчестер. Будинок, збудований привидами (16+)',
      counter: '40'
    },
    {
      image: 'https://planetakino.ua/f/1/movies/ready_player_one/ready_player_one_post3-small.jpg',
      time: '21.03.2018',
      text: 'Першому гравцю приготуватися (12+)',
      counter: '40'
    }
  ]
};
function filmData(state = initialData, action){

  switch (action.type) {
    case ADD_FILM:
      return {
        ...state
      }
    default:
      return state;
  }
}


const usersInitialState = {
  loading: false,
  loaded: false,
  data: [],
  dataUsers: [],
  errors: []
};



const reducer = combineReducers({
  filmData,
  Hall,
  Rooms,
  dataBasket,
  bannerUpdate,
  RenderFilms
});

export default reducer;
