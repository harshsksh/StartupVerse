"use client"
import Link from "next/link";
import {X} from "lucide-react"

const SearchFormReset = () => {
    const reset = () => {
        // logic to reset the search query
        const form = document.querySelector('.search-form') as HTMLFormElement
        if(form){
            form.reset();
        }
    }
  return (
    <button type='reset' onClick={reset}>
        <Link href="/" className="search-btn text-white">
            <X size={18} />
        </Link>
    </button>
  )
}

export default SearchFormReset