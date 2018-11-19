import React from 'react';

const Banner = ({counter ,children})=>(
  <div className="Banner">
    {children[counter]}
  </div>
);

export default Banner;
