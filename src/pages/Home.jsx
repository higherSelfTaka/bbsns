import React from 'react'
import {Route, Routes} from 'react-router-dom'


import {Sidebar, CampaignFeed, Widgets} from '../components'




const Home = () => {
  return (
    <>
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <CampaignFeed/>
      {/* widget */}

      <Widgets/>
      {/* modal */}

      </>
  )
}

export default Home
