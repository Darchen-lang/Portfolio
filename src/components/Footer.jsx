import { ArrowUp, ArrowUp01 } from "lucide-react"

export const Footer =() =>{
    return <footer className="px-12 py-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    <a href="#hero">
        <ArrowUp/>
    </a>
    </footer>
}