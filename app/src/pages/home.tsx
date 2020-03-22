import React from 'react';
import { msg } from 'components/msg';

export function Home() {


  return (
    <>
      <h1 onClick={() => msg('hahah')}>HOME PAGE</h1>
    </>
  )
}