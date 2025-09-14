import React from 'react'
import HeroDiv1 from '../components/HeroDiv1'
import Category from '../components/Category'
import BestSeller from '../components/BestSeller'
import HeroDiv2 from '../components/HeroDiv2'
import NewsLetter from '../components/NewsLetter'

function HomePage({theme}) {
  return (
    <div>
        <div>
          <button type='button' className='fixed max-sm:text-xl text-4xl max-sm:h-10 h-16 max-sm:w-10 w-16 text-[white] bg-amber-500 z-30 right-3 bottom-12 rounded-full cursor-pointer animate-bounce' onClick={()=>scrollTo(0,0)}><i className="fa-solid fa-angle-up"></i></button>
        </div>
        <HeroDiv1 />
        <Category />
        <BestSeller />
        <HeroDiv2 theme={theme} />
        <NewsLetter />
    </div>
  )
}

export default HomePage