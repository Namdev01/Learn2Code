import React, { useState } from 'react'
const User = () => {
    const [handle, setHandle] = useState('');
    function submitdata() {
        if(handle==='') alert('Enter a non-empty handle');
        else {
            fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
            .then((response) => response.json())
            .then((data) => {
                alert('Enter a valid handle name');
                 console.log(data);
            })
        }
    }
    return (
        <>
            <section className="container">
                <input
                    type="text"
                    className='input'
                    placeholder="Enter your handle"
                    onChange={(e) => setHandle(e.target.value)}
                    required />
                <button className='btn' type="submit" onClick={submitdata}> Submit</button>
            </section>
        </>
    )
}

export default User
