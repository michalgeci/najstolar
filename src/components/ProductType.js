import { Card, Col, Row } from 'antd';
import React, { useContext } from 'react';
import { Context } from '../global-state/Store';

export default function ProductType() {
  const [state, dispatch] = useContext(Context)

  const styles = {
    card: {
      width: 240,
      margin: 16
    }
  }

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        <Card hoverable
          style={{ backgroundColor: state.productType === 1 ? '#1890ff' : 'white', ...styles.card}}
          onClick={()=>{
            console.log('halo')
            console.log(state.productType)
            dispatch({type: 'SET_PRODUCT_TYPE', payload: 1})
          }}
        >
          <Card.Meta title='Vstavaná skriňa'/>
        </Card>

        <Card hoverable
        style={{ backgroundColor: state.productType === 2 ? '#1890ff' : 'white', ...styles.card}}
          onClick={()=>{
            dispatch({type: 'SET_PRODUCT_TYPE', payload: 2})
          }}
        >
          <Card.Meta title='Vnútro skriňe'/>
        </Card>

        <Card hoverable
        style={{ backgroundColor: state.productType === 3 ? '#1890ff' : 'white', ...styles.card}}
          onClick={()=>{
            dispatch({type: 'SET_PRODUCT_TYPE', payload: 3})
          }}
        >
          <Card.Meta title='Posuvný systém'/>
        </Card>
    </div>
  )
}