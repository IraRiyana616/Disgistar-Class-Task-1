import React from 'react';

const Card = ({ title, subTitle }) => (
  <div className="card">
    <h2>{title}</h2>
    <h3>{subTitle}</h3>
  </div>
);

export default Card;
