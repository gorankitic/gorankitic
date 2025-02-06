'use client';

// hooks
import { useEffect, useState } from 'react';
// icons
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
            className='fixed z-[1000] right-5 top-20 md:top-7 bg-white w-[3rem] h-[3rem] bg-opacity-60 backdrop-blur-[0.5rem] border borderBlack border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.10] active:scale-[1.10] transition-all dark:bg-gray-900'
            onClick={toggleTheme}
        >
            {theme === 'light' ? <Sun className='text-gray-700' /> : <Moon />}
        </button>
    )
}

export default ThemeSwitch;