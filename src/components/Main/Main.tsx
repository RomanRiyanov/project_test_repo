import { FC } from 'react'
import { Description } from 'components/Description/Description'
import { Survey } from 'components/Survey/Survey'
import { Illustrations } from 'components/Illustrations/Illustrations'

import s from './main.module.scss'

export const Main: FC = () => {
  return <div className={s.main}>
     <Description/>
     <h2 className={s.subtitle}>Пройдите небольшой опрос<br/> и узнайте, <span className={s.ellips}>как избежать рисков</span> при продаже&nbsp;или&nbsp;покупке&nbsp;квартиры</h2>
     <Survey/>
     <Illustrations/>
  </div>
}
