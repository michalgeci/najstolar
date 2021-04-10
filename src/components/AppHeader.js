import React from 'react';
import { Row, Layout } from 'antd';
import Logo from './Logo';

export function AppHeader() {
  return (
    <Layout.Header style={{ height: 'auto', padding: '0 0' }}>
      <Row justify='space-between'>
        <h2 style={{ color: 'white', margin: 0, marginLeft: 10, lineHeight: 'inherit' }}>Cenová ponuka</h2>
        <Logo color='white' />
      </Row>
    </Layout.Header>
  )
}
