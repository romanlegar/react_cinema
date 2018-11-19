import React, { Component } from 'react';
import { connect } from 'react-redux';
import Actions from '../actions/demoActionCreator';
import {Hall, Console} from './componentsPage/componentsPage'


class Page extends Component {
  componentDidMount() {
    let {generHall} = this.props;
    generHall();
  }

  action =(element)=>{
    let {match, data, addRoom, bookedRoom} = this.props;
    let index = match.params.name;
    let info = data.data[index];
    let target = element.target;
    let activRoom = {
      number: target.dataset.number,
      type: target.dataset.type,
      film: info.text ,
      img: info.image
    }
    bookedRoom(activRoom.number, false);
    addRoom(activRoom);

  }

  delet =(element)=>{
    let {removeRoom, bookedRoom} = this.props;

    let target = element.target;
    let value = target.dataset.value;
    let number = target.dataset.number;
    bookedRoom(number, true);
    removeRoom(value);
  }

  render() {
    let {dataHall, dataRooms, match, data} = this.props;
    let index = match.params.name;
    let info = data.data[index];
    let {action, delet, add} = this;
    return (
      <div className="Page">
        <div className="pageFilm">
          <img src={info.image} alt='imageInfo'/>
          <h3>{info.text}</h3>
          <h4>Дата: {info.time}</h4>
        </div>

        <div className='Hall'>
          <hr/>
          <h6>Екран</h6>
          <Hall
            index={index}
            action={action}
            dataHall={dataHall}
          />
        </div>
        <div className='list-items'>
           <Console
              dataRooms={dataRooms}
              delet={delet}
              film={info.text}
              add ={add}
            />
        </div>
      </div>
    );
  }
}
//
const MapStateToProps = (state, ownProps) => {
  return {
    data: state.filmData,
    dataHall: state.Hall,
    dataRooms: state.Rooms,
    datass: state.dataBasket

  }
}
const MapDispatchToProps = ( dispatch ) => {
  return {
    dispatch,
    generHall: () => {
      dispatch( Actions.generHall() );
    },
    addRoom: (room) => {
      dispatch( Actions.addRoom(room) );
    },
    removeRoom: (index) =>{
      dispatch( Actions.removeRoom(index) );
    },
    bookedRoom: (index, boolevon) =>{
      dispatch( Actions.bookedRoom(index, boolevon) );
    },
    addBasket:  (tickets) => {
      dispatch( Actions.addBasket(tickets) );
    }

  }
}

const ConnectedPage = connect(
  MapStateToProps,
  MapDispatchToProps
)(Page)

export default ConnectedPage;
