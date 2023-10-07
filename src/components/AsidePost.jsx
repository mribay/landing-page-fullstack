import React from 'react'

function AsidePost({header="Post heading", link="#", image}) {
  return (
    <>
        <a href={link} aria-label="Example" onclick="event.preventDefault()">
            <img src={image} alt="image"/>
        </a>
        <p>
            <a href={link} onclick="event.preventDefault()">{header}</a>
            <br />
            <small>Class aptent taciti sociosqu ad litora torquent per conubia nostra</small>
        </p>
    </>
  )
}

export default AsidePost