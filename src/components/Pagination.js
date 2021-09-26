import React from 'react'
import './style.css'

const Pagination = ({itemsperpage,totalitems,paginate}) => {
    const pagenumbers = [];
    for(let i=1; i<=Math.ceil(totalitems/itemsperpage); i++){
        pagenumbers.push(i);

    }
    return (
        <nav className = "pagination ">
            <ul className="pagination">
                {pagenumbers.map(number => (
                    <li key = {number}>
                        <a onClick={() => paginate(number)} href="javascript:void(0)" style={{color:"white"}} >
                            {number}
                        </a>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
