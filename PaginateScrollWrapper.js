'use client'
import { useEffect, useState } from 'react'
import PostsPreview from './PostsPreview.tsx'

const PaginateScrollWrapper = () => {
    //устанавливаем отображаемые посты
    const [ items, setItems ] = useState([])

    //номер текущей страницы
    const [ currentPage, setCurrentPage ] = useState(1)

    //флаг для подгрзки постов через первый useEffect
    const [ fetching, setFetching ] = useState(true)

    //общее количество фотографий
    const [ totalCount, setTotalCount ] = useState(0)

    useEffect(() => {
        if (fetching) {
            console.log('fetching')
            fetch('https://jsonplaceholder.typicode.com/posts?limit=10&page=3')
                .then(res => {
                    setItems([ ...items, ...res.data ])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(res.headers['x-total-count'])
                })
                .finally(() => setFetching(false))
        }
    }, [ fetching ])

    //вычитаем всю высоту, уехавшую наверх и всю видимую высоту
    const scrollHandler = () => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
        if (items.length < totalCount) {
            setFetching(false)
        }
    }

    //прослушивание события прокрутки для удаления постов сверху
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    return <>
        {/*{posts.slice(0, displayedPostCount).map(post => PostsPreview(post))}*/}
        {items.map(item =>
            <div key={item.id}>
                {item.title}
            </div>
        )}
    </>
}

export default PaginateScrollWrapper