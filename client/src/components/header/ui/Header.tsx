import cl from './Header.module.scss'
import { MenuItem } from '../../../types'
import logo from '../../../assets/logo.png'
import { useAppDispatch } from '../../../store'
import { toggleModal } from '../../modal/model/ModalSlice'

interface HeaderProps {
  menuItems: MenuItem[]
}

export const Header = ({ menuItems }: HeaderProps) => {

  const dispatch = useAppDispatch()

  return (
    <header>
      <div className={cl.headerLogo}>
        <img src={logo} alt='logo' />
        <div className={cl.leftTopBorder}></div>
        <div className={cl.rightTopBorder}></div>
        <div className={cl.rightBottomBorder}></div>
        <div className={cl.leftBottomBorder}></div>
      </div>
      <button className={cl.headerButton} onClick={() => dispatch(toggleModal())}>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 30 30" style={{ 'fill': '#FFFFFF' }}>
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </button>
      <div className={cl.headerCategories}>
        {menuItems.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}

      </div>
    </header>
  )
}
