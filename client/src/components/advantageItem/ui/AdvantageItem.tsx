import { Advantage } from '../../../types'
import cl from './AdvantageItem.module.scss'

export const AdvantageItem = ({title, description, subtitle}: Advantage) => {
  return (
    <div className={cl.advantageItem}>
      <p>{title}</p>
      <h5>{description}</h5>
      <p>{subtitle}</p>
    </div>
  )
}
