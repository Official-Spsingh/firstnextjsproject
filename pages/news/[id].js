import { useRouter } from 'next/router'
// export async function getStaticPaths() {
//     // Return a list of possible value for id
//   }
//   export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
//   }
const DynamicNews = () => {
    const router = useRouter()

    const id = router.query.id
    return <h1>DynamicNews -- {id}</h1>
}
export default DynamicNews