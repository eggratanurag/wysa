import { createContext, useState, useEffect } from 'react';
import { themes, chatDelayList } from '../data';

// initial state 
const initialState = {
  isUserLoggedIn: false,
  theme: themes?.[0],
  chatDelay: chatDelayList?.[0],
  userName: "",
  pfp: null,
};

export const MyContext = createContext(initialState);

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(initialState);

  // Fetch data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem('myContextData');
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse stored JSON data
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  const updateContext = (newData) => {
    setData({ ...data, ...newData });
  };

  // Save data to localStorage on update
  useEffect(() => {
    localStorage.setItem('myContextData', JSON.stringify(data));
  }, [data]); // Re-run whenever data changes

  return (
    <MyContext.Provider value={{ data, updateContext }}>
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
