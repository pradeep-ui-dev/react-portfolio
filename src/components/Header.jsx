import { Link } from "react-router-dom";

const Header = () => {
    return(
        <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 text-gray-800 dark:text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-indigo-700 dark:text-indigo-400">Pradeep Portfolio</Link>
                <nav className="flex items-center gap-6 text-sm md:text-base capitalize">
                    {['/about-us', '/projects', '/skills', '/contact'].map((path, index) => (
                    <Link
                        key={index}
                        to={path}
                        className="text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-700 dark:after:bg-white hover:after:w-full after:transition-all transition-colors duration-200"
                    >
                        {path.replace('/', '').replace('-', ' ').replace('us', 'Us')}
                    </Link>
                    ))}
                    {/* Theme toggle button */}
                    <button
                    onClick={() => {
                        document.documentElement.classList.toggle('dark');
                    }}
                    className="relative w-12 h-6 bg-indigo-200 dark:bg-gray-700 rounded-full transition-colors duration-300 focus:outline-none"
                    >
                    <span className="absolute left-0 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 transform dark:translate-x-7"></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header;