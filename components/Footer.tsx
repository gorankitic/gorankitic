const Footer = () => {
    return (
        <footer className='px-4 pb-5 text-center text-xs text-gray-500 dark:text-gray-300'>
            <p>
                &copy; {new Date().getFullYear()} Goran Kitic
            </p>
            <p>
                Built with <span role="img" aria-label="heart">❤️</span> using Next.js, Typescript, Resend, TailwindCSS, and Framer Motion <span role="img" aria-label="Next.js">🚀</span>
            </p>
        </footer>
    )
}

export default Footer