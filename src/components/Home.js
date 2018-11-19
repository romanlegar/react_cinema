import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Actions from '../actions/demoActionCreator';
import Banner from './componentsHome/Banner';
import Input from './componentsHome/Input';

const Item = ({image, time, text, counter, url}) => (
  <Link to= {'/film/'+url} className='Item' >
    <figure>
      <img src={image}/>
    </figure>
    <div>
      <h1 className="header-item">{text}</h1>
      <h2 className="content-item">Кількість місць: {counter}</h2>
      <h2 className="date-item">Дата: {time}</h2>
    </div>
  </Link>
);

class Home extends Component {
  componentDidMount() {
    let {bannerAppdata, searchAppdata} = this.props;
    setInterval(bannerAppdata, 8000);
    searchAppdata();
  }
  render() {
    let { data, dataImg, counter, RenderFilms, search } = this.props;

    return (
      <div className="Home">
        <div className="headerHome">
          <h1>Розклад сеансів у Києві</h1>
          <h5>Оновлюється щосереди після 14:00 на один тиждень вперед, з
          четверга по наступну середу</h5>
        </div>
        <Banner
          counter = {counter}
        >
          {
              dataImg.map((item,key)=>(
                <img src={item} key={key}/>
              ))
          }
        </Banner>
        <Input
          action={search}
        />
        <div>
          {
            RenderFilms.renderContacts.length !== 0 ?
              RenderFilms.renderContacts.map((item,key)=>(
                <Item
                  key = {key}
                  image = {item.image}
                  time = {item.time}
                  text = {item.text}
                  counter = {item.counter}
                  title = {item.title}
                  url = {key}
                />
              ))
            :
            <div>
              Фільм не знайдений
            </div>
          }
        </div>
      </div>
    );
  }
}
// - - - - - - - -  -
const MapStateToProps = (state, ownProps) => {
  return {
    data: state.filmData,
    RenderFilms: state.RenderFilms,
    counter: state.bannerUpdate.counter,
    dataImg: state.bannerUpdate.dataImg
  }
}
const MapDispatchToProps = ( dispatch ) => {
  return {
    dispatch,
    activeToggle: (event) => {
      dispatch( Actions.activeToggle(event) );
    },
    submitLogin: (value) => {
      dispatch( Actions.activeToggle(value) );
    },
    submitLogin: (value) => {
      dispatch( Actions.activeToggle(value) );
    },
    search: (event) => {
      dispatch( Actions.search(event) );
    },
    searchAppdata: ()=> {
      dispatch( Actions.searchAppdata() );
    },
    bannerAppdata: ()=> {
      dispatch( Actions.bannerAppdata() );
    }
  }
}

const ConnectedHome = connect(
  MapStateToProps,
  MapDispatchToProps
)(Home)

export default ConnectedHome;
