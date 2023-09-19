import {NewsItem} from "./NewsItem/NewsItem";
import {useEffect, useState} from "react";

const  initNews =[
    {
      title: 'Первая новость',
      url: 'www.example.com',
      username: 'Пользователь 1',
      date: '01.03.19',
      score: 50,
      id:'1'
},
  {
    title: 'Вторая новость',
    url: 'www.example.com',
    username: 'Пользователь 2',
    date: '11.10.14',
    score: 1000,
    id:'2'
  },
  {
    title: 'Третья новость',
    url: 'www.example.com',
    username: 'Пользователь 3',
    date: '11.09.17',
    score: 300,
    id:'3'
  }
]

const newNews = {
    title: 'Четвертая новость',
    url: 'www.example.com',
    username: 'Пользователь 4',
    date: '11.12.27',
    score: 500,
    id:'4'
}

export function App(){
    const checkStorage = JSON.parse(window.localStorage.getItem('newsKey'))||initNews
    const [news, setNews] = useState(checkStorage)

    useEffect(() => {
        window.localStorage.setItem('newsKey', JSON.stringify(news))
    }, [news])



  const newCountHandler = () =>{
    setNews((prevState)=>[...prevState, newNews])
  }

  return(
    <div>
      <div>Количество новостей:{news.length}</div>
      <button onClick={newCountHandler}>Добавить новость</button>
      {
        news.map(item =>{
          return <NewsItem key={item.id}
                           title={item.title}
                           url={item.url}
                           username={item.username}
                           date={item.date}
                           score={item.score}
          />
        })
      }
    </div>
  );
}
