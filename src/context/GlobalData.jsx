
import { createContext, useState } from 'react'

export const DataContext = createContext();



export const DataProvider = ({ children }) => {



    const [data, setData] = useState([]);

    const [filter, setFilter] = useState('');

    const [comment, setComment] = useState('');
    const [update, setUpdate] = useState(false);
    const [idRating, setIdRating] = useState(false);


    return (
        <DataContext.Provider value={{ data, setData, filter, setFilter, comment, setComment, update, setUpdate, idRating, setIdRating }}>
            {children}
        </DataContext.Provider>
    )
}
