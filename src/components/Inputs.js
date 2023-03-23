import React from 'react'

export function Text(props) {
    return (
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" placeholder='Enter name' name='name' onChange={props.onChange} />
        </div>

    )
}

export function Email(props) {
    return (
        <div>
            <label htmlFor="email">Email : </label>
            <input type="email" placeholder='Enter Email' name='email' onChange={props.onChange} />
        </div>
    )
}

export function Number(props) {
    return (
        <div>
            <label htmlFor="number">Number : </label>
            <input type="number" placeholder='Enter Number' name='number' onChange={props.onChange} />
        </div>
    )
}



