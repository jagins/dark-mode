import { useState } from 'react';

//useLocalStorage is a custom hook
export const useLocalStorage = (key, initialValue) => 
{
    //setup state using useState and passing in an annymous function
    const [storedValue, setStoredValue] = useState(() => 
    {
        //getting what is currently in localStorage
        const item = window.localStorage.getItem(key);

        //if something is in local storage and return what's in there or else just return the inital value that was passed in
        if (item) 
        {
            return JSON.parse(item);
        }
        else 
        {
            return initialValue;
        }
    });

    const setValue = value => 
    {
        //save state
        setStoredValue(value);

        //saves to local storage as a string
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    return [storedValue, setValue];
}