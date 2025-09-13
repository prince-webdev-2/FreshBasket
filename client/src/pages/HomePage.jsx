import React from 'react'
import HeroDiv1 from '../components/HeroDiv1'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import HeroDiv2 from '../components/HeroDiv2'
import NewsLetter from '../components/NewsLetter'

function HomePage({theme}) {
  return (
    <div>
        <HeroDiv1 />
        <Category />
        <BestSeller />
        <HeroDiv2 theme={theme} />
        <NewsLetter />
    </div>
  )
}

export default HomePage