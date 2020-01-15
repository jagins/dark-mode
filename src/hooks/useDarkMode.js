import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () =>
 {
    //uses custom localStorage hook to set the darkMode to true or false
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const bodyElement = document.querySelector('body');

    useEffect(() =>
    {
        //checks to see if darkMode is active if it is adds a class onto the body element
        if (darkMode)
        {
            bodyElement.classList.add('dark-mode');
        }
        else 
        {
            bodyElement.classList.remove('dark-mode');
        }
    }, [darkMode, bodyElement]);

    return [darkMode, setDarkMode];
}