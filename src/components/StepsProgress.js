import React, { useContext } from 'react';
import { Steps } from 'antd';
import { Context } from '../global-state/Store';
import { steps } from '../steps/stepNames';

/**
 * 
 * @param {Object} props 
 * @param {string} props.className
 * @param {boolean} props.keepDelimiter
 * @param {boolean} props.fixVisible
 * @returns 
 */
export default function StepsProgress(props) {
  const [state, ] = useContext(Context)

  return (
    <div className={props.forceVisible ? '' : 'hide-on-xs'} style ={{minWidth: '20%', backgroundColor: 'white', overflow: 'scroll', borderRight: props.keepDelimiter ? '1px solid gray' : ''}}>
    <Steps
      className={props.className}
      current={state.currentStep}
      style={{ padding: 10, backgroundColor: 'white', width: 'auto' }}
      direction='vertical'
    >
      {
        steps[state.productType].map((titleString, index) => {
          return(<Steps.Step style={{whiteSpace: 'pre-line'}} key={index} title={titleString} description={state.stepsDescription[index]} />)
        })
      }
    </Steps>
    </div>
  )
}