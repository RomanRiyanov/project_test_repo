import { FC } from 'react'
import Image from 'next/image'
import s from './survey.module.scss'

export const Survey: FC = () => {
  return <div className={s.survey}>
    <section className={s.header}>
      <Image src={'/houses.svg'} layout='fill' objectFit='cover' className={s.headerImage} alt={'Houses illustration'} />
      <Image src={'/housesVertical.svg'} layout='fill' objectFit='cover' className={s.headerVerticalImage} alt={'Houses vertical illustration'} />

    </section>

    <section className={s.container}>
      <p className={s.text}>Время прохождения опроса <strong className={s.strong}>3 минуты</strong></p>

      <h2 className={s.title}>Хочу безопасно и легко продать&nbsp;или&nbsp;купить квартиру</h2>

      <button type='button' className={s.button}>Начать</button>

      <p className={s.text}>После завершения опроса вы получите PDF&nbsp;файл с содержащий:</p>

      <ol className={s.list}>
        <li className={s.text}>Список документов, необходимых в вашем конкретном случае.</li>
        <li className={s.text}>Разъяснение сложных терминов «на пальцах».</li>
        <li className={s.text}>Оценку возможных рисков.</li>
      </ol>
    </section>
    <section className={s.arrow}>
      <Image src={'/arrow.svg'} layout='fill' objectFit='contain' className={s.arrowImage} alt={'Houses illustration'} />
    </section>

  </div>
}





