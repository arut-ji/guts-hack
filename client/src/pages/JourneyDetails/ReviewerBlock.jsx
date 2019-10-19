import React from 'react'

export default ({ imgSrc, name, location }) => (
  <div>
    <hr />
    <img src={imgSrc} />
    <p>{name}</p>
    <p>{location}</p>
    <hr />
  </div>
)