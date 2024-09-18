import React from 'react'
import './Final.css'
import { BsFillEmojiSmileFill, BsFillEmojiAngryFill, BsFillEmojiNeutralFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs'

const emojiData = {
  unsatisfied: <BsFillEmojiAngryFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  verysatisfied: <BsFillEmojiHeartEyesFill />,
};

const Final = ({data}) => {
  return (
    <div className='final-container'>
      <h2>Quase acabando...</h2>
      <p>Sua feedback é muito valorizado por nós</p>
      <p>Clique no botão Enviar para finalizar a sua avaliação</p>
      <h3>Resumo do seu feedback, {data.name}</h3>
      <p className='review-data'>
        <span>Satisfação com o produto:</span>
        <p>{emojiData[data.review]}</p>
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        <p>{data.commentary}</p>
      </p>
    </div>
  )
}

export default Final