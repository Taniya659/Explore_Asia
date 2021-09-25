import React from 'react'
import Card from './Card'
import './Card.css'

const Cardsdisplay = ({ items, isloading }) => {
    return isloading ? (
        <h1>Loading...</h1>
    ) : (
    <>
        <section className="cs" >
            {items.map((item) => (
                <Card item = {item} />
            ))}</section>

    </>
    )


}

export default Cardsdisplay
