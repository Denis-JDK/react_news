
import style from './NewsItem.module.css'
import {unixToDate} from "../utils/utils";
export function NewsItem(props){
    const scoreClassArr = [style.score]

    if (props.score > 50){
        scoreClassArr.push(style.highScore)
    }else if (props.score > 30){
        scoreClassArr.push(style.midlScore)
    }else scoreClassArr.push(style.lowScore)


    return(
        <div className={style.container}>
            <a className={style.link} href="example.com">{props.title}</a>

            <div className={style.info}>
                <div className={style.userDate}>
                    <span>{props.username}</span>
                    <span>{unixToDate(props.date)}</span>
                </div>

                <div className={scoreClassArr.join(' ')}>
                    {props.score} points
                </div>
            </div>
        </div>
    )
}