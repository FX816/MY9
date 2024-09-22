import React from 'react'

const Btn = ({ text }) => {
    return (
        <div>
            <button
                class="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-gren rounded-md group"
            >
                <span
                    class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gren rounded group-hover:-mr-4 group-hover:-mt-4"
                >
                    <span
                        class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-oq dark:bg-dakr"
                    ></span>
                </span>
                <span
                    class="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gren rounded group-hover:-ml-4 group-hover:-mb-4"
                >
                    <span
                        class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-oq dark:bg-dakr"
                    ></span>
                </span>
                <span
                    class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gren rounded-md group-hover:translate-x-0"
                ></span>
                <span
                    class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                >{text}</span>
            </button>
        </div>
    )
}

export default Btn