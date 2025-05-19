import FetchWP from "../utils/FetchWP"
import { useEffect, useRef, useState } from "react"

const useFetchWP = (type = 'posts', params = {}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const hasFetched = useRef(false)
    const fetchWp = new FetchWP()
    useEffect(() => {
        const fetchData = async () => {
            if (hasFetched.current) return;
            setLoading(true)
            const defaultParams = {
                per_page: 10,
                page: 1,
            }

            const finalParams = {
                ...defaultParams,
                ...params
            }
            
            try {
                switch(type) {
                    case 'posts':
                        const posts = await fetchWp.getPosts(finalParams);
                        setData(posts);
                        break;
                    case 'pages':
                        const pages = await fetchWp.getPages(finalParams);
                        setData(pages);
                        break;
                    case 'categories':
                        const categories = await fetchWp.getCategories(finalParams);
                        setData(categories);
                        break;
                    case 'tags':
                        const tags = await fetchWp.getTags(finalParams);
                        setData(tags);
                        break;
                    case 'users':
                        const users = await fetchWp.getUsers(finalParams);
                        setData(users);
                        break;
                    case 'media':
                        const media = await fetchWp.getMedia(finalParams);
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