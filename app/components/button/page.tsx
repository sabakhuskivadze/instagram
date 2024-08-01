import style from './page.module.scss'

interface Props{
    title:string
    click?:() => void
}

export default function Btn(props:Props){
    return(
        <>
        <button onClick={props.click} className={style.btn}>{props.title}</button>
        </>
    )
}