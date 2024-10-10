'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import LogoCards from './components/LogoCards'
import Feed from './components/Feed'

export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex bg-black h-screen">
      <div className="lg:w-20 h-full">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Small Column - Green */}
      <div className="px-8 bg-black h-full">
        <img src="/assets/image2.jpg" alt="Content Image" className="w-270px h-auto rounded-xl mt-2"
        />
        <div className="mt-6">
          <Feed />
        </div>
      </div>

      {/* Big Column - Orange Container */}
      <div className="flex-1 p-8 bg-black h-full rounded-lg border border-gray-700 overflow-y-scroll mx-2 my-0">
        <p className="text-gray-800 text-lg">Big Column Content Here</p>
      </div>
    </div>
  )
}
