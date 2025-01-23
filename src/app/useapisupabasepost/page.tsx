"use client"

import { useState, useEffect, FormEvent } from "react"
const page = () => {

    const [Name,setName] = useState('');
    const [LastName,setLastName] = useState('');

const handleSumbit = async(e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();

        const submitData = { Name , LastName }

    try {

        const res = await fetch ('http://localhost:3000/api/supa/post', {
            
            method: 'POST',
            body: JSON.stringify(submitData),

            headers: {
                'content-type': 'application/json'
            }
        })

        console.log(res)

        res.ok ? console.log('Ok') : console.log('Not Ok')

    } catch (error) {
        
        console.log(error)
    }
}


    return (

        <form onSubmit={handleSumbit}>
            <div>
                <input 
                type="text"
                name="Name"
                value={Name}
                placeholder="Enter the Name"
                onChange={ e => setName(e.target.value) }
                
                />
                <input 
                type="text"
                name="LastName"
                value={LastName}
                placeholder="Enter the Age"
                onChange={ e => setLastName(e.target.value) }
                
                />
                <button type="submit">Submit</button>
            </div>
        </form>


    )
}

export default page;