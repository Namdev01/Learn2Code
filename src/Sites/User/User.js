import React, { useState } from 'react'
const User = () => {
    const [handle, setHandle] = useState('');
    function submitdata() {
        fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
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
            <section className="container show">

            </section>
        </>
    )
}

export default User
