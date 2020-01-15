import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDarkMode = () =>
{
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    const bodyElement = document.querySelector('body');

    useEffect(() =>
    {
        if(darkMode)
        {
            bodyElement.classList.add('dark-mode');
        }
        else
        {
            bodyElement.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}