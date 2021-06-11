import { Card } from 'antd';
import React, { useContext } from 'react';
import { Context } from '../global-state/Store';

import img1 from '../assets/images/01_type/type1.png'
import img2 from '../assets/images/01_type/type2.png'
import img3 from '../assets/images/01_type/type3.png'

export default function ProductType() {
  const [state, dispatch] = useContext(Context)

  const styles = {
    card: {
      width: 240,
      margin: 16,
      borderRadius: 8
    }
  }

  const images = [img1, img2, img3]

  const SelectionCard = (props) => {
    return (
      <Card hoverable
        cover={<img alt={"type"+props.index} src={images[props.index]} style={{filter: state.productType === props.index ? 'invert(1)' : 'invert(0)'}}/>}
        style={{ backgroundColor: state.productType === props.index ? '#1890ff' : 'white', ...styles.card }}
        onClick={() => {
          dispatch({ type: 'SET_PRODUCT_TYPE', payload: props.index })
        }}>
          <h3 style={{marginBottom: 0, color: state.productType === props.index ? 'white' : 'black'}}>{props.title}</h3>
      </Card>
    )
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <SelectionCard index={0} title={'Vstavaná skriňa'} />
      <SelectionCard index={1} title={'Vnútro skriňe'} />
      <SelectionCard index={2} title={'Posuvný systém'} />
    </div>
  )
}