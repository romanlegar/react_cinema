import React, { Component } from 'react';

const Input = ({action}) => (
  <input  onChange={action} className="form-control " type="search" placeholder="Search" aria-label="Search"/>
);

export default Input;
