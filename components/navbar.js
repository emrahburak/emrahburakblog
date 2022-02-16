import Link from 'next/link';

function Navbar(){
    return (
        <>
        <nav className="navigation">
        <Link href="/">
            <a >Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
        </nav>
        </>
    )
}


export default Navbar;