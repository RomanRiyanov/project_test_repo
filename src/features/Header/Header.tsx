import { FC } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { logo, phone } from 'images'

import s from './header.module.scss'

export interface HeaderProps {
  classNames?: string
}

export const Header: FC<HeaderProps> = ({ classNames }) => {
  const buttonClassName = cn(s.link, s.button)

  return <nav className={cn(s.header, classNames)}>
      <div className={s.logo}>
        {logo}
      </div>
      <Link href="#"><p className={s.link}>Как продать квартиру</p></Link>
      <Link href="#"><p className={s.link}>Истории клиентов</p></Link>
      <div className={s.container}>
          <div className={s.phone}>{phone}</div>
          <p className={s.number}>+ 7 495 835 47 11</p>
      </div>
      <button type='button' className={buttonClassName}>Перезвоните мне</button>
      
  </nav>
}
