import './App.css';
import Store, { Context } from './global-state/Store';
import Layout, { Content, Footer } from 'antd/lib/layout/layout';
import { Button, Col, Drawer, Row } from 'antd';
import React, { useContext, useState } from 'react';
import StepsProgress from './components/StepsProgress';
import { AppHeader } from './components/AppHeader';
import ProductType from './components/ProductType';

function App() {
  return (
    <Store>
      <MainApplication />
    </Store>
  );
}

const MainApplication = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [state, ] = useContext(Context)

  return (
    <Layout style={{backgroundColor: 'aqua', height: '100vh'}}>
      <Layout>
        <AppHeader />
        <Content>

          <Drawer
            // title="Basic Drawer"
            placement='left'
            closable={false}
            onClose={() => { setDrawerVisible(false) }}
            visible={drawerVisible}
          >
            <StepsProgress />
          </Drawer>

          <div style={{display: 'flex', height: '100%'}}>
            <StepsProgress className='hide-on-xs' keepDelimiter={true} />

            {/* {display: 'flex', overflow: 'scroll', flexDirection: 'column', alignItems: 'center'} */}

            <div style={{display: 'flex', flex: 1, overflow: 'auto', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{display: 'flex', minHeight: 'min-content', flexDirection: 'column'}}>

              <Button className='show-on-xs' block onClick={()=>{setDrawerVisible(true)}}> Krok: {state.currentStep + 1}/n </Button>
              <ProductType/>
              {/* a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/>a<br/> */}


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
