/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Nav() {
    return (
        <>
            <header>
                <div className='container-nav'>
                    <nav>
                        <li className='item'>
                            <Link href='/'>
                                <h2>Conquer React</h2>
                            </Link></li>
                        {/* <li className='item'>
                            <Link href='/demo'>
                                <h2>Demo</h2>
                            </Link></li>
                        <li className='item'>
                            <Link href='/ebook'>
                                <h2>e-Book</h2>
                            </Link></li> */}
                    </nav>
                </div>
            </header>
        </>

    )
}