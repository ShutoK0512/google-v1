import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {FaMicrophone, FaSearch, FaTimes} from 'react-icons/fa'
import SearchHeaderOptions from './SearchHeaderOptions'
import User from './User'

function SearchHeader() {
    const router = useRouter()
    const searchInputRef = useRef(null)


    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value
        if(!term.trim()) return;
            router.push(`/search?term=${term.trim()}&searchType=`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image 
                onClick={() => router.push('/')}
                src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" 
                className="cursor-pointer"
                width="150" height="60" objectFit="contain" />
                <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                    <input type="text" defaultValue={router.query.term} ref={searchInputRef} 
                    className="w-full focus:outline-none"/>

                    <FaTimes onClick={() => (searchInputRef.current.value = '')} className="h-7 text-gray-500 cusor-pointer sm:mr-3" />
                    <FaMicrophone className="6 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-300 mr-3" />
                    <FaSearch className="6 hidden sm:inline-flex text-blue-500" />
                    <button onClick={search} type="submit" hidden></button>
                </form>
                <User className="ml-auto whitespace-nowrap" />
            </div>
            <SearchHeaderOptions />
        </header>
    )
}

export default SearchHeader

