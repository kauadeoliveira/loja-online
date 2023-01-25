export default function Header() {
    return(
        <header className="px-3">
            <nav className="flex justify-between bg-red-900">
                <a href="#">Logo</a>
                <ul className="flex space-x-2">
                    <li>Cart</li>
                    <li>Heart</li>
                </ul>
            </nav>
        </header>
    )
}