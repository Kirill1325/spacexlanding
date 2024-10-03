import { useEffect, useState } from 'react'
import './App.scss'
import { AdvantageList } from './components/advantagesList'
import { Header } from './components/header'
import axios from 'axios'
import { Advantage, MenuItem } from './types'
import { BasicModal } from './components/modal'
import { useAppSelector } from './store'
import { Modal } from '@mui/material'

function App() {

  const [advantages, setAdvantages] = useState<Advantage[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const { isOpened } = useAppSelector(state => state.ModalSlice)

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/advantages/`

    axios.get(apiUrl).then((resp) => {
      setAdvantages(resp.data)
    });

  }, [])

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/menuItems/`

    axios.get(apiUrl).then((resp) => {
      setMenuItems(resp.data)
    });

  }, [])

  return (
    <div className='App'>
      <Modal
        open={isOpened}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BasicModal menuItems={menuItems} />
      </Modal>
      <Header menuItems={menuItems} />
      <main>
        {/* <div className='marsWithText'> */}

        <div className='text'>
          <h1>ПУТЕШЕСТВИЕ</h1>

          <p>на красную планету</p>
        </div>

        <div className='button'>

          <button>Начать путешествие</button>

          <div className='topBorder'></div>
          <div className='rightBorder'></div>
          <div className='bottomBorder'></div>
          <div className='leftBorder'></div>

          <div className='rightTopBorder'></div>
          <div className='leftBottomBorder'></div>

        </div>

        {/* </div> */}
        <AdvantageList advantages={advantages} />
      </main>
    </div>
  )
}

export default App
