import FetchWP from "../utils/FetchWP"
import { useEffect, useRef, useState } from "react"

const useFetchWP = (type = 'posts') => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const hasFetched = useRef
    const fetchWp = new FetchWP()
    useEffect(() => {
        const fetchData = async () => {
            if (hasFetched.current) return;
            try {
                console.log("loading")
                setLoading(true)
                switch(type) {
                    case 'posts':
                        const posts = await fetchWp.getPosts();
                        setData(posts);
                        break;
                    case 'pages':
                        const pages = await fetchWp.getPages();
                        setData(pages);
                        break;
                    case 'categories':
                        const categories = await fetchWp.getCategories();
                        setData(categories);
                        break;
                    case 'tags':
                        const tags = await fetchWp.getTags();
                        setData(tags);
                        break;
                    case 'users':
                        const users = await fetchWp.getUsers();
                        setData(users);
                        break;
                    case 'media':
                        const media = await fetchWp.getMedia();
                        setData(media);
                        break;
                    default:
                        setError('Invalid type');
                }
                
                hasFetched.current = true;
            } catch (error) {
                setError(`Error fetching data:' ${error}`)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [type])

    return { data, loading, error }
}

export default useFetchWP