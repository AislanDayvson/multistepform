import React from 'react'

//Components
import { FiSend } from 'react-icons/fi'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr' 
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Final from './components/Final'
import Steps from './components/Steps'

//Hooks
import { useForm } from './hooks/useForm'

import './App.css'


const formTemplate = {
  name: '',
  email: '',
  review: '',
  commentary: '',
};

const App = () => {

  const [data, setData] = React.useState(formTemplate)

  const updateFieldHandler = (key, value) =>{
    setData((prev) => {
      return{...prev, [key]:value}
    })
  }

  const formComponents = [
      <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
      <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
      <Final data={data} />
    ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className='aplicacao'>
      <div className="header">
        <h1>Feedback</h1>
        <p>Agradecemos sua compra, avalie o seu produto abaixo</p>
      </div>
      <div className="container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="acoes">
            {!isFirstStep && (
              <button onClick={() => changeStep(currentStep - 1)} type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
              <GrFormNext />
              <span>Próxima</span>
            </button>
            ) : (
              <button type='button'>
              <FiSend />
              <span>Enviar</span>
            </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App