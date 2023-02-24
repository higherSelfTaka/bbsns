import React from 'react'
import { SupporterFeed, Sidebar, Widgets} from '../components'

const Supporter = () => {
  return (
    <>
      {/* sidebar */}
      <Sidebar/>

      <SupporterFeed/>
      
      <Widgets/>
      {/* modal */}
    </>
  )
}

export default Supporter
