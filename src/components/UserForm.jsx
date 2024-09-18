import React from 'react'

const UserForm = ({data, updateFieldHandler}) => {
  return (
    <div>
        <div className="form-control">
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              name="text" id="nome" 
              placeholder='Seu nome...' 
              value={data.name || ''}  
              required 
              onChange={(e) => updateFieldHandler('name', e.target.value)}
              />
        </div>
        <div className="form-control">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              name="text" id="email" 
              placeholder='Seu email...' 
              required 
              value={data.email || ''}
              onChange={(e) => updateFieldHandler('email', e.target.value)}
              />
        </div>
    </div>
  )
}

export default UserForm