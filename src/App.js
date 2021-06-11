import './App.css';
import Store, { Context } from './global-state/Store';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Button, Drawer, Typography } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import StepsProgress from './components/StepsProgress';
import { AppHeader } from './components/AppHeader';
import ProductType from './components/ProductType';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { steps, stepsFull } from './steps/stepNames';

function App() {
  return (
    <Store>
      <MainApplication />
    </Store>
  );
}

const stepsAlt1 = [
  <ProductType/>
]

const { Title } = Typography

const MainApplication = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [state, dispatch] = useContext(Context)
  const [isNextAvailable, setIsNextAvailable] = useState(false);

  useEffect(() => {
    if (state.currentStep === 0 && state.productType !== null) {
      setIsNextAvailable(true);
    } else {
      setIsNextAvailable(false);
    }
  }, [state])

  return (
    <Layout style={{backgroundColor: 'aqua', height: '100vh'}}>
      <Layout>
        <AppHeader />
        <Content>

          <Drawer
            placement='left'
            closable={true}
            onClose={() => { setDrawerVisible(false) }}
            visible={drawerVisible}
          >
            <StepsProgress />
          </Drawer>

          <div style={{display: 'flex', height: '100%'}}>
            <StepsProgress className='hide-on-xs' keepDelimiter={true} />
            <div style={{display: 'flex', flex: 1, overflow: 'auto', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div style={{display: 'flex', minHeight: 'min-content', flexDirection: 'column'}}>
                <Button 
                  className='show-on-xs' 
                  block 
                  onClick={() => {
                    setDrawerVisible(true)}
                  }>
                    {state.productType !== null ? 
                      (state.currentStep + 1) + "/" + steps[state.productType].length + " " + steps[state.productType][state.currentStep]
                      :
                      "1. " + steps[state.productType][state.currentStep]
                    }
                  </Button>
                <Title level={2} style={{margin: '24px auto 0px auto'}}>{stepsFull[state.productType][state.currentStep]}</Title>
              </div>

              { stepsAlt1[state.currentStep] }

              <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 0, marginBottom: 0}}>
                <Button 
                  type='primary' 
                  size='large'
                  disabled={state.currentStep === 0} 
                  onClick={()=>{
                    dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep - 1 });
                  }}
                  shape='round'>
                    <ArrowLeftOutlined /> Späť
                </Button>

                <Button 
                  type='primary' 
                  size='large'
                  disabled={!isNextAvailable}
                  onClick={()=>{
                    dispatch({ type: 'SET_CURRENT_STEP', payload: state.currentStep + 1 });
                  }}
                  shape='round'>
                    Ďalej <ArrowRightOutlined />
                </Button>
              </div>

              AHoj toto bude footer a nie som sticky
            </div>
          </div>

          
        </Content>
      </Layout>
    </Layout>
  )
}

export default App;
