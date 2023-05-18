import { FC } from 'react'
import Image from 'next/image'

const illustrations = ['/first.svg', '/second.svg', '/third.svg'];
import s from './illustrations.module.scss'

export const Illustrations: FC = () => {
  return <div className={s.container}>
     {illustrations && illustrations.map((item) => (
      <section key={item} className={s.image}>
        <Image src={item} layout='fill' objectFit='contain' alt={'option icon'} />
      </section>
    ))}
  </div>
}
