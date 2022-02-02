import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  let image = {
    width: '200%',
    height: '80%',
    float: 'left',
    alignItems: 'center',
    padding: '50px 180px 100px 100px',
    background: 'black'
   
  }
  let text = {
    paddingLeft: '1px',
    marginTop: '130%',
    color: 'white',
    marginBottom: 'auto',
    marginLeft:'auto'
    

  }
  let border={
    border: '1px solid black',
    display: 'grid',
    gridTemplateColumns: '1fr 4fr',
    width: '200%',
    height: 'auto',
  
  }
  let name={
    marginLeft: '5%',
    marginTop: '5%',
    color: 'cyan'
  }

  return (
    <div style={border}>
      <img style={image} src={props.img}/>
      <div>
        <p style={name}><strong>{props.name}</strong></p>
        <p style={text}>{props.text}</p>
      </div>
    </div>
    
  );
}

Post.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string
}

export default Post;