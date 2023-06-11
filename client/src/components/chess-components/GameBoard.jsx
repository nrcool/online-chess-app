import React, { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import Box from './Box'


export default function GameBoard() {
  const {game} =useContext(MyContext)
  return (
    <div className='board'>
        {game.map((item,i)=>{
          const row = Math.floor((63-i)/8)+1
          return(<Box key={i} index={i} item={item} row={row} />)
        })}
    </div>
  )
}
