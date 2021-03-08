import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
   
    useEffect(()=>{
        const url = (`https://jsonplaceholder.typicode.com/users/${friendId}`)
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p>this is friend detail component:{friendId}</p>
            <h3>name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>Phone: {friend.phone}</h3>
            <h3>Website: {friend.website}</h3>
        </div>
    );
};

export default FriendDetail;