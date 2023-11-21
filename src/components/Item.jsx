import React, { useContext } from 'react'
import { DataContext } from '../context/GlobalData'

const Item = ({ filteredItem }) => {

    const { setComment, setUpdate, setIdRating } = useContext(DataContext)
    const handleSolicitacao = (e) => {
        console.log(e)


    }

    return (
        <li key="" className='flex0'>
            <div>
                <p style={{ marginBottom: "10px" }}>{filteredItem.name}</p>
                <p>{filteredItem.price},00mt</p>
            </div>

            {<>
                <span className='delete' onClick={handleSolicitacao} > Solicitar Prato </span>
            </>
            }
        </li >
    )
}

export default Item