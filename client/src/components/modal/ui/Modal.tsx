import { useAppDispatch } from '../../../store';
import { toggleModal } from '../model/ModalSlice';
import { MenuItem } from '../../../types';
import cl from './Modal.module.scss'

interface ModalProps {
    menuItems: MenuItem[]
}

export const BasicModal = ({ menuItems }: ModalProps) => {

    const dispatch = useAppDispatch()

    return (
        <div className={cl.modal}>
            <button onClick={() => dispatch(toggleModal())}>X</button>
            <div className={cl.modalContent}>
                {menuItems.map((item) => (
                    <div
                        key={item.id}
                        className={cl.modalItem}
                        onClick={() => dispatch(toggleModal())}
                    >
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}