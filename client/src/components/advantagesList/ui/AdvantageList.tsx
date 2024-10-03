import { Advantage } from '../../../types'
import { AdvantageItem } from '../../advantageItem'
import cl from './AdvantageList.module.scss'

interface AdvantageListProps {
  advantages: Advantage[]
}

export const AdvantageList = ({advantages}: AdvantageListProps) => {
  return (
    <div className={cl.advantagesList}>
      {advantages.map(advantage =>
        <AdvantageItem key={advantage.id} {...advantage} />
      )}
    </div>
  )
}
