import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const header = () => {
    return (
        <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* <!-- Mobile menu button--> */}
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                    {/* Creates invisible clickable area and expands the clickable area around button */}
                    <span className="absolute -inset-0.5"></span>
                    {/* Hides text visually, but readable by screen readers  */}
                    <span className="sr-only">Open main menu</span>
                    {/* <!--
                        3 lines icon when menu is closed.
                        Menu open: "hidden", Menu closed: "block"
                    --> */}
                    <FontAwesomeIcon icon={faBars}/>
                    {/* <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> */}
                    {/* <!--
                        X icon when menu is open.
                        Menu open: "block", Menu closed: "hidden"
                    --> */}
                    <FontAwesomeIcon icon={faXmark}/>
                    {/* <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> */}
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    {/* <div className="flex shrink-0 items-center"> */}
                    {/* <img src="" alt="Logo"/> */}
                    {/* Font Awesome Temp logo */}
                    {/* <FontAwesomeIcon icon={faCode}/> */}
                    {/* </div> */}
                    <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-6">
                            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                            <Link href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                <FontAwesomeIcon icon={faCode}/>
                            </Link>
                            <Link href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Arrays</Link>
                            <Link href="/graphs" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Graphs</Link>
                            <Link href="/trees" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Trees</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pt-2 pb-3">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Arrays</Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Graphs</Link>
                <Link href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Trees</Link>
            </div>
        </div>
        </nav>
    )
}

export default header