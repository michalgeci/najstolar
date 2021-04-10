import React, { useContext } from 'react';
import { Steps } from 'antd';
import { Context } from '../global-state/Store';

/**
 * 
 * @param {Object} props 
 * @param {string} props.className
 * @param {boolean} props.keepDelimiter
 * @returns 
 */
export default function StepsProgress(props) {
  const [state, dispatch] = useContext(Context)

  return (
    <div style ={{backgroundColor: 'white', borderRight: props.keepDelimiter ? '1px solid gray' : ''}}>
    <Steps
      className={props.className}
      current={state.currentStep}
      onChange={(step) => {
        console.log(step)
        dispatch({ type: 'SET_CURRENT_STEP', payload: step });
      }}
      style={{ padding: 10, backgroundColor: 'white', width: 'auto' }}
      direction='vertical'
    >
      <Steps.Step title='Krok1' />
      <Steps.Step title='Krok1' />
      <Steps.Step title='Krok1' />
      <Steps.Step title='Krok1' />
    </Steps>
    </div>
  )
}