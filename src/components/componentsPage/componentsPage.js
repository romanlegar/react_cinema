import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Console =({dataRooms, delet, film, add})=>(
  <ul>
    {
      dataRooms.data.length !== 0 ?
       dataRooms.data.map((item, key)=>{
         switch( item.type ){
           case 'VIP':
             return (
               <List
                  film={film}
                  delet={delet}
                  key={key}
                  type={item.type}
                  number={item.number}
                  prise = {200}
               />
             )

             case 'ЕКОНОМ':
               return (
                 <List
                    delet={delet}
                    key={key}
                    type={item.type}
                    number={item.number}
                    prise = {100}
                    film={film}
                 />
               )

             default:
               return (
                 <List
                    delet={delet}
                    key={key}
                    type={item.type}
                    number={item.number}
                    prise={150}
                    film={film}
                 />
               )}
       })
      :null
    }
    <div>
    {
      dataRooms.data.length !== 0 ?
      <Link to='/basket'>
        <button className='button' disabled={
           dataRooms.data.length !== 0 ?false:true
         }
         onClick={add}
        >
          Перейти в кошик
        </button>
      </Link>
      :null
    }
    </div>
  </ul>
);
const List = ({prise, type, number, delet,key, film})=>(
  <li className="List">
    <h4>Фільм: {film}</h4>
    <h4>Тип місця: {type}</h4>
    <h4>Ціна: {prise}</h4>
    <h4>Номер: {number}</h4>
    <input data-value={key} data-number={number} type='button' onClick={delet} value='X'/>
    <hr/>
  </li>
);
const Room =({number, free, type,action})=>(
  <div
    data-number={number}
    data-type={type}
    onClick={action}
    className={free === false?'room activ' :'room' }
  >
    {number}

  </div>
);

const Hall =({index, action, dataHall})=>(
  <div >
    {
      dataHall.data[index] != undefined ?
      dataHall.data[index].map((item,key)=>(
        <div key={key}>
          <Room
            number= {item.number}
            type={item.type}
            action={action}
            free={item.free}
          />
        </div>
      ))
      :null
    }
  </div>
);

export {Hall, Room, List, Console};
