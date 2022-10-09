import SearchHeaderOption from "./SearchHeaderOption";
import {FaSearch, FaImage} from 'react-icons/fa'
import {useRouter} from 'next/router'

function SearchHeaderOptions() {
    const router = useRouter()

    return (
        <div className="flex space-x-8 select-none w-full justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
            <SearchHeaderOption title="All" Icon={FaSearch} selected={router.query.searchType === '' || !router.query.searchType} />
            <SearchHeaderOption title="Images" Icon={FaImage} selected={router.query.searchType === "image"} />
        </div>
    )
}

export default SearchHeaderOptions
