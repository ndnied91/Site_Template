import React from 'react';

export const Title = (props) => {
  return (
    <div className="section-title">
      <h2>
        {props.title} <span>{props.subtitle}</span>
      </h2>
    </div>
  );
};
