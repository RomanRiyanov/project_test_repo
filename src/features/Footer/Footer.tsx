import { FC } from 'react'
import cn from 'classnames'
import { clock, phone, mapPoint, logoFooter } from 'images'

import s from './footer.module.scss'

export interface FooterProps {
  classNames?: string
}

export const Footer: FC<FooterProps> = ({ classNames }) => {
  return <div className={cn(s.footer, classNames)}>

    <section className={s.logoFooter}>
      {logoFooter}
    </section>

    <section className={s.container}>
      <div className={cn(s.label, s.wideScreenMocsow)}>
        <div className={s.image}>{mapPoint}</div>
        <p className={s.text}>г. Москва, Красная площадь д. 1</p>
      </div>
      <div className={s.label}>
          <div className={s.image}>{phone}</div>
          <p className={s.number}>+ 7 495 835 47 11</p>
      </div>
    </section>

    <div className={s.line}/>

    <section className={cn(s.container, s.workHours)}>
      <div className={s.label}>
        <div className={cn(s.image, s.tip)}>{clock}</div>
        <p className={s.text}>Режим работы</p>
      </div>
      <p className={s.text}>Пн. - Пт. - с 9:00 до 17:00</p>
      <p className={s.text}>Сб. - Вс. - с 9:00 до 17:00</p>
    </section>

    <div className={s.line}/>

    <div className={cn(s.label, s.narrowScreenMoscow)}>
      <div className={s.image}>{mapPoint}</div>
      <p className={s.text}>г. Москва, Красная площадь д. 1</p>
    </div>
  </div>
}
