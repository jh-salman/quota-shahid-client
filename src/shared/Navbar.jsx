import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-4 py-3 md:px-10 md:py-3 bg-white shadow-md">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-4 text-[#ff2158]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">Salute</h2>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        className="block md:hidden flex items-center text-[#0e141b] focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                            <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                    <div className="flex items-center gap-9">
                        <Link to='/home' className="text-[#0e141b] text-sm font-medium leading-normal">Home</Link>
                        <Link to='/heros' className="text-[#0e141b] text-sm font-medium leading-normal">Heroes</Link>
                        <Link to='/stories' className="text-[#0e141b] text-sm font-medium leading-normal">Stories</Link>
                        <Link to='/gallery' className="text-[#0e141b] text-sm font-medium leading-normal">Gallery</Link>
                        <Link to='/albums' className="text-[#0e141b] text-sm font-medium leading-normal">Albums</Link>
                        <Link to='/sign-in' className="text-[#0e141b] text-sm font-medium leading-normal">Sign in</Link>
                    </div>
                    <button
                        className="min-w-[84px] h-10 px-4 bg-[#ff2158] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] rounded-xl"
                    >
                        <span className="truncate">Donate</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full bg-white shadow-md md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col p-4">
                    <Link to='/home' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Home</Link>
                    <Link to='/heros' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Heroes</Link>
                    <Link to='/stories' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Stories</Link>
                    <Link to='/gallery' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Gallery</Link>
                    <Link to='/albums' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Albums</Link>
                    <Link to='/sign-in' className="py-2 text-[#0e141b] text-sm font-medium leading-normal">Sign in</Link>
                    <button
                        className="mt-4 w-full h-10 bg-[#ff2158] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] rounded-xl"
                    >
                        <span className="truncate">Donate</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
