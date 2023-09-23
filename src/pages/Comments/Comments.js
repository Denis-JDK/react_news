import {Link, useParams} from "react-router-dom";
import {get} from "../../api/api";
import {useEffect, useState} from "react";
import {NewsItem} from "../../components/NewsItem/NewsItem";

export function Comments(){
    const {id} = useParams()
    const [news, setNews] = useState()
    async function getNewsData(newsId){
        const newsData = await get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
    setNews(newsData)
    }

    useEffect(()=> {
        getNewsData(id)
    }, [id])
    return (
        <div>
            <Link to='/'>Назад</Link>

            {news && (
                <NewsItem
                    title={news.title}
                    userName={news.by}
                    date={news.time}
                    url={news.url}

                />
            )

            }


        </div>
    )
}