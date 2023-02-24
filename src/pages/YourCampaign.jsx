import React from 'react'
import {Route, Routes} from 'react-router-dom'


import {Sidebar, ProfileFeed, Widgets} from '../components'



const YourCampaign = () => {
  return (
    <>
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      <ProfileFeed/>
      {/* modal */}

      <Widgets/>
      {/* modal */}
    </>
  )
}

export default YourCampaign
