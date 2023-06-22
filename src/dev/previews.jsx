import React from 'react'
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox'
import { PaletteTree } from './palette'
import App from '../App';
import GoodsItem from '../components/GoodsItem';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/App">
        <App/>
      </ComponentPreview>
      <ComponentPreview path="/GoodsItem">
        <GoodsItem/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews