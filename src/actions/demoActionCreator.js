import {  UPDATE_BANNER, ADD_BASKET, ADD_ROOM, REMOVE_ROOM, ADD_DATA, REMOVE_DATA } from '../constants/config';

const demoActionCreator = {
  search: ( event ) => {
    return function (dispatch, getState) {
        let states = getState();
        let arrContacts = states.filmData.data;
        let searchQuery = event.target.value.toLowerCase();
        console.log('event', searchQuery);
        let renderContacts = arrContacts.filter( (item) => {
          console.log(item);
          let itemName = item.text.toLowerCase();
          return itemName.indexOf(searchQuery) !== -1;
        });
        dispatch({
          type: 'SEARCH',
          data: renderContacts
        });
    }
  },
  searchAppdata: ( ) => {
    return function (dispatch, getState) {
        let states = getState();
        let arrContacts = states.filmData.data;
        console.log('trstss', states.filmData.data);
        let renderContacts = arrContacts;
        dispatch({
          type: 'INITIALIZATION',
          data: renderContacts
        });
    }
  },
  bannerAppdata: ()=>{
    return function (dispatch, getState) {
        let states = getState();
        let counter = states.bannerUpdate.counter;
        console.log('sTART');
        if(counter === 2){
          counter = 0;
        }else {
          counter++;
        }
        dispatch({
          type: UPDATE_BANNER,
          counter: counter
        });
    }
  },
  bookedRoom: (index, boolevon)=>{
    return function (dispatch, getState) {
        let states = getState();
        let data = states.Hall.data;
        let dataActiv = data[0];
        let newElement = {
          number: dataActiv[index-1].number,
          type: dataActiv[index-1].type,
          free: boolevon
        }
        dataActiv.splice(index-1, 1, newElement);

        dispatch({
          type: REMOVE_DATA,
          data: data
        });
    }
  },
  removeRoom: (index) =>{
    return function (dispatch, getState) {
      let states = getState();
      let data = states.Rooms.data;
      data.splice(index-1, 1);

        dispatch({
          type: REMOVE_ROOM,
          test: data
        });
    }
  },
  addRoom: (room) =>{
    return function (dispatch, getState) {
      dispatch({
        type: ADD_ROOM,
        data: room
      });
    }
  },
  addBasket: (tickets) =>{
    return function (dispatch, getState) {
      dispatch({
        type: ADD_BASKET,
        data: tickets
      });
    }
  },
  generHall: () => {
    return function (dispatch, getState) {
      let array = []
      let rooms = 40;
      let room = 1;
      let row = 1;
      let rowRoom = 10;
      while (rooms > 0) {
        switch (row) {
          case 1:
            array.push({number: room, type: 'ЕКОНОМ', free: true})
            break;
          case 4:
            array.push({number: room, type: 'VIP', free: true})
            break;
        default:
          array.push({number: room, type: 'ЗВИЧАЙНИЙ', free: true})
        }
        if(room === rowRoom){
          rowRoom += 10;
          row++;
        }
        rooms--;
        room++;
      }

      dispatch({
        type: ADD_DATA,
        data: [array, array, array]
      });
    };
  }
};

export default demoActionCreator;
