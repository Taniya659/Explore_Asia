import React from 'react'
import './Card.css'


const Card = ({ item }) => {

    return (
        <div className="cs" key = {item.name.common}>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={item.flags[0]} alt="Avatar" style={{ width: "300px", height: "300px" }} />
                    </div>
                    <div className="flip-card-back">
                        <h1>{item.name.common}</h1><br />
                        <p>official_name : {item.name.official}</p><br />
                        <p>Capital : {item.capital[0]}</p><br />

                        <p>region : {item.region}</p><br />
                        <p>
                            Subregion : {item.subregion}
                        </p><br />
                        <p>
                            area:{item.area}
                        </p><br />
                        <p>status : {item.status}</p> <br />
                        <p>Independent : True </p> <br />
                        <p>currencies:{item.population}</p><br />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card
