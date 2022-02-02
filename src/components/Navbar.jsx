import React from 'react';
import Bio from './Bio';
function Navbar() {
  let floatRight = {
    float: 'right'
  }
  let image = {
    width: '60px',
    height: '50px',
    float: 'left',
    background: 'black'
   
  }
  let buttonStyles = {
    padding: '10px 10px 10px 10px',
    backgroundColor: 'white',
    width: '100px'  ,
    alignItems: 'center'}

  let searchbarStyles = {
    height: '30px',
    marginRight: '40px',
    paddingLeft: '15px',
    width: '200px',
    align: 'center'
  }
  let borderRadius = {
    borderRadius: '15px 15px 15px 15px',
    border: '2px solid #34abef'
  }

  async function post() {
  
    let formData = new FormData();           
    formData.append("content", fileupload.files[0]);
    console.log(formData);
    await fetch('https://socialmediaapplication.appprogint.workers.dev/posts', {
      method: "POST", 
      body: formData
    });    
    alert('The file has been uploaded successfully.');
    //window.open("http://www.your-site.com/images/picture.jpg", "Window Title", "width=700, height=750");
  }

  return (
    <div>
      <nav>
      <img style={image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ4QAkqXMi8_4FErcg9ZA4hPuvIrsoFrlpHQ&usqp=CAU"/>
      
        <button style={buttonStyles} onClick={post}>POST</button>
        <button style={buttonStyles}>Notifications</button>
        <button style={buttonStyles}>Messages</button>
        <div style={floatRight}>
          <input style={Object.assign({}, searchbarStyles, borderRadius)} type="text" placeholder="Search"/>
          <button style={Object.assign({}, buttonStyles, borderRadius)}>Account</button>
        </div>
      </nav>
      <hr/>
    </div>
  );
}

export default Navbar;