import { Fragment } from "react"
import Link from 'next/link'
const NewsPage = () => {
    return <Fragment>
        <h1>News Home page</h1>
        <ul>
            <li><Link href="/news/news1">News1 -- No refresh</Link></li>
            <li><Link href="/news/news2">News2 -- No refrsh</Link></li>
            <li><a href="/news/news3">News3</a></li>
            <li><a href="/news/news4">News4</a></li>
            <li><Link href="/news/news5">Normal html image -- No refresh</Link></li>
            <li><Link href="/news/news6">Next image -- No refresh</Link></li>
            <Link href="/">
                <a>← Back to home</a>
            </Link>
        </ul>
    </Fragment>

}
export default NewsPage