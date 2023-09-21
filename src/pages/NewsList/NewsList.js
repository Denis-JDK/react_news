import {useEffect, useState} from "react";
import {get} from "../../api/api";
import {NewsItem} from "../../components/NewsItem/NewsItem";
import styles from './NewsList.module.css'

// const  initNews =[
//     {
//         title: 'Первая новость',
//         url: 'www.example.com',
//         username: 'Пользователь 1',
//         date: '01.03.19',
//         score: 50,
//         id:'1'
//     },
//     {
//         title: 'Вторая новость',
//         url: 'www.example.com',
//         username: 'Пользователь 2',
//         date: '11.10.14',
//         score: 1000,
//         id:'2'
//     },
//     {
//         title: 'Третья новость',
//         url: 'www.example.com',
//         username: 'Пользователь 3',
//         date: '11.09.17',
//         score: 300,
//         id:'3'
//     }
// ]
//
// const newNews = {
//     title: 'Четвертая новость',
//     url: 'www.example.com',
//     username: 'Пользователь 4',
//     date: '11.12.27',
//     score: 500,
//     id:'4'
// }
export function NewsList (){
    // const checkStorage = JSON.parse(window.localStorage.getItem('newsKey'))||initNews
    //  const [news, setNews] = useState(checkStorage)
    const [news, setNews] = useState([])

    // useEffect(() => {
    //     window.localStorage.setItem('newsKey', JSON.stringify(news))
    // }, [news])

    useEffect(()=>{
        getNewsList()
    },[])
    async function getNewsList() {
        const newsIds = await get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&orderBy="$priority"&limitToFirst=10')
        //  const news = await get(`https://hacker-news.firebaseio.com/v0/item/${newsIds[0]}.json?print=pretty`)

        const newsList = await Promise.all(newsIds.map((id) => get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)))
        console.log(newsList)
        setNews(newsList)
    }

    // const newCountHandler = () =>{
    //   setNews((prevState)=>[...prevState, newNews])
    // }

    return(
        <div>
            <div>Количество новостей:{news.length}</div>
            {/*<button onClick={newCountHandler}>Добавить новость</button>*/}
            {
                news.map(item =>{
                    return (
                        <NewsItem
                            className={styles.newsItem}
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            url={item.url}
                            username={item.by}
                            date={item.time}
                            score={item.score}
                    />
                    )
                })
            }
        </div>
    );
}