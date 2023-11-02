
import { createContext, useState } from 'react'

export const DataContext = createContext();



export const DataProvider = ({ children }) => {



    const [data, setData] = useState([]);

    const [filter, setFilter] = useState('');
    


    return (
        <DataContext.Provider value={{ data, setData, filter, setFilter }}>
            {children}
        </DataContext.Provider>
    )
}
