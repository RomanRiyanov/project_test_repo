import { FC } from 'react'
import Image from 'next/image'

import s from './description.module.scss'


export const Description: FC = () => {
  return <div className={s.description}>
    <div className={s.container}>
      <h3 className={s.subtitle}>Запутались в сложных терминах и документах?</h3>
      <h1 className={s.title}>Узнайте, какие <span className={s.ellips}>документы</span> подготовить и что учесть<br/> при <span className={s.ellips}>продаже или покупке</span> квартиры</h1>
      <button type='button' className={s.button}>Хочу знать больше</button>
    </div>
     {/* <Houses/> */}
     <article className={s.image}>
        <Image src={'/houses.svg'} layout='fill' objectFit='contain' alt={'option icon'} />
     </article>
  </div>
}
