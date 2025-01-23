"use client"

import { useState, useEffect, FormEvent } from "react"


const page = () => {

    const [Name,setName] = useState('');
    const [LastName,setLastName] = useState('');
    const [comment,setComment] = useState('');

const handleSumbit = async(e:FormEvent<HTMLFormElement>) => {

    e.preventDefault();

        const submitData = { Name , LastName, comment }

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
        <section className="p-20">
        <article className="rounded-md shadow-2xl h-full w-full p-20">
        <h2 className="text-center mb-5">Fill in and submit the form and we will contact you</h2>
        <div id="" className="">
        
        <form className="px-20" onSubmit={handleSumbit}>
            <div className="">
                <h3 className="text-slate-400 text-sm">Name</h3>
                <input className="w-full h-full p-2 mb-2 rounded-md border border-slate-400"
                type="text"
                name="Name"
                value={Name}
                placeholder=""
                onChange={ e => setName(e.target.value) }
                
                />

                <h3 className="text-slate-400 text-sm">Email</h3>
                <input className="w-full h-full p-2 mb-10 rounded-md border border-slate-400"
                type="text"
                name="LastName"
                value={LastName}
                placeholder=""
                onChange={ e => setLastName(e.target.value) }
                
                />

                <h3 className="text-slate-400 text-sm">Comment</h3>
                <input className="w-full h-full p-16 mb-2 rounded-md border border-slate-400"
                type="text"
                name="comment"
                value={comment}
                placeholder=""
                onChange={ e => setComment(e.target.value) }
                
                />
                <div className="flex justify-end text-sm">
                <button className="bg-orange-500 px-4 rounded-md text-white" type="submit">Submit</button>
                </div>
            </div>
        </form>

        </div>
        </article>
        </section>
    )
}

export default page;