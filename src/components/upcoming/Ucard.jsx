import React from "react"
import { Link } from "react-router-dom"

const Ucard = ({ item: { id, cover, name, time, video } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          {/* <Link to={`/singlepage/${id}`}> */}
          {/* <button></button> */}
          <button  className='primary-btn'>
            
          <a className='fa fa-play' href={video} target="_blank">  PLAY NOW</a>
          <Link to={`/singlepage/${id}`} />
            {/* <i className='fa fa-play'></i> PLAY NOW */}
            {/* <a href='https://www.youtube.com/watch?v=VZKzyuUMbHE' alt='Broken Link'></a> */}
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default Ucard
