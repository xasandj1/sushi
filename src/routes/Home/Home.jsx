import React from 'react'
import { Slider } from '../../components'
import { HomeSection} from './homeStyle'
import { Foods } from '../../components'
import { Set } from '../../components'

const Home = () => {
  return (
    <>
        <HomeSection>
            <div className="container">
            <Slider/>
            <Foods/>
            <Set/>
            </div>
        </HomeSection>
    </>
  )
}

export default Home