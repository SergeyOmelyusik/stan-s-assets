import style from './QuestionsList.module.css'

const QuestionList = ({data}) => {

    return(
        <div className={style.wrapper}>
            <ul className={style.questionList}>
                { data && data.map((item, id) => {
                    return (
                    <li>{item.question}</li>
                    )
                })}
            </ul>
        </div>  
    )
}

export default QuestionList