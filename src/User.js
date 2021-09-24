import React from 'react';
const User = (props) => {
    console.log(props);
    const data = props;
    return (<>
        <h1> User Component</h1>
        <h1>{data.data.name}</h1>
    </>)
}
export default User;