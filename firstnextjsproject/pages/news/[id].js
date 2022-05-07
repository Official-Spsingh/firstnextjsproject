import { useRouter } from 'next/router'
const DynamicNews = () => {
    const router = useRouter()

    const id = router.query.id
    return <h1>DynamicNews -- {id}</h1>
}
export default DynamicNews