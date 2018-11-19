import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

const ItemsList = ({img, type, number, film})=>(
  <div className="blog-grids">
    <Card>
      <CardImg src={img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{film}</CardTitle>
        <CardText>
          <h4>Тип місця: {type}</h4>
          <h4>Номер: {number}</h4>
        </CardText>
      </CardBody>
    </Card>
  </div>
);
class Basket extends Component {

  render() {
    let {dataRooms} = this.props;
    let item = dataRooms.data;
    return (
      <div className="Basket row">
        {
          item.length !== 0 ?
          item.map((e,key)=>(
              <ItemsList key={key}
                film ={e.film}
                img ={e.img}
                type ={e.number}
                number ={e.number}
              />
          )):<div className='null'>Відсутні придбані квитки</div>
        }


      </div>
    );
  }
}
// - - - - - - - -  -
const MapStateToProps = (state, ownProps) => {
  return {
    data: state.dataBasket,
    dataRooms: state.Rooms
  }
}


const ConnectedBasket = connect(
  MapStateToProps
)(Basket)

export default ConnectedBasket;
