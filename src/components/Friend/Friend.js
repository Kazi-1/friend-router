import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const {name, email, id} = props.friend;
  const history = useHistory();
  const handleClick = (friendId) => {
      const url = (`/friend/${friendId}`)
      history.push(url)
  }
  const friendStyle = {
      border: '1px solid purple',
      margin: '20px',
      padding: '20px',
      borderRadius: '20px',
  }
    return (
        <div style={friendStyle}>
            <h1>name: {name}</h1>
            <p>Email: {email}</p>
            <p>iD: {id} <Link to={`/friend/${id}`}>About</Link></p>
            <button onClick={()=> handleClick(id)}>click me</button>
        </div>
    );
};

export default Friend;