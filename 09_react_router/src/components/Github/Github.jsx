import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data, setData] = useState([]);
    
    // useEffect(() => {
    //     fetch('https://api.github.com/users/karanr1184')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data);
    //     })
    // }, [])

    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 p-4 text-3xl text-white'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="git_picture" width={300} />
            <p>{data.bio}</p>
        </div>
    )
}

export default Github
export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/karanr1184')
    return res.json()
}