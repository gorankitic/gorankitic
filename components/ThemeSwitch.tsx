'use client';

// hooks
import { useEffect, useState } from 'react';
// lib
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

const ThemeSwitch = () => {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === 'dark') {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme('dark');
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <button
            className='fixed z-[1000] group sm:mx-5 right-5 sm:right-1/2 sm:translate-x-80 md:translate-x-96 lg:translate-x-[500px] top-[70px] sm:top-[26px] bg-white bg-opacity-60 w-[3rem] h-[3rem] borderBlack border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.10] active:scale-[1.10] transition-all backdrop-blur-[0.1rem] dark:bg-gray-800 dark:border-black/40 dark:bg-opacity-60'
            onClick={toggleTheme}
        >
            {theme === 'light' ?
                <Moon className='text-gray-700 group-hover:rotate-180 transition-all duration-500 ease-in-out' />
                :
                <Sun className='group-hover:rotate-180 transition-all duration-500 ease-in-out' />}
        </button>
    )
}

export default ThemeSwitch;