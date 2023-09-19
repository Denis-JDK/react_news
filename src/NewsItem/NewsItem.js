
import style from './NewsItem.module.css'
export function NewsItem(props){
    return(
        <div className={style.container}>
            <a className={style.link} href="example.com">{props.title}</a>

            <div className={style.info}>
                <div className={style.userDate}>
                    <span>{props.username}</span>
                    <span>{props.date}</span>
                </div>

                <div className={style.score}>
                    {props.score} points
                </div>
            </div>
        </div>
    )
}