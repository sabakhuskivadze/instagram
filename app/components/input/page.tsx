import style from './page.module.scss'

interface Props{
    type:string
    placeholder:string
    value?:()=> void
}

export default function Input(props:Props){
    return(
        <>
        <div className={style.container}>
            <input className={style.inputInstagram} onChange={props.value} type={props.type} placeholder={props.placeholder} />
        </div>
        </>
    )
}