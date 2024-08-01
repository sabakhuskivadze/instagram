import React from 'react';
import style from './page.module.scss';

interface Props {
  title: string;
  click?: () => void;
}

const Btn: React.FC<Props> = ({ title, click }) => (
  <button onClick={click} className={style.btn}>
    {title}
  </button>
);

export default Btn;
