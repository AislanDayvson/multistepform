import React from 'react'
import { BsFillEmojiSmileFill, BsFillEmojiAngryFill, BsFillEmojiNeutralFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs'
import './ReviewForm.css'
const ReviewForm = ({data, updateFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            value='unsatisfied' 
            name='review' 
            checked={data.review === 'unsatisfied'} 
            onChange={(e) => updateFieldHandler('review', e.target.value)}
            required 
            />
          <BsFillEmojiAngryFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='neutral' name='review' required checked={data.review === 'neutral'} 
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='satisfied' name='review' required checked={data.review === 'satisfied'} 
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input type="radio" value='verysatisfied' name='review' required checked={data.review === 'verysatisfied'} 
            onChange={(e) => updateFieldHandler('review', e.target.value)} />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="commentary">Comentário:</label>
        <textarea name="commentary" id="commentary" placeholder='Descreva sua opinião'  value={data.commentary || ''}
              onChange={(e) => updateFieldHandler('commentary', e.target.value)} required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm