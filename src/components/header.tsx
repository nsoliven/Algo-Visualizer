import React from 'react'
import Link from 'next/link'

const header = () => {
    return (
        <nav class="bg-gray-800">
            <ul>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/arrays">
                        Arrays
                    </Link>
                </li>
                <li>
                    <Link href="/graphs">
                        Graphs
                    </Link>
                </li>
                <li>
                    <Link href="/trees">
                        Trees
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default header