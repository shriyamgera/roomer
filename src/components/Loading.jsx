import React from 'react'

const Loading = () => {
  return (
    <div className='fixed bg-white h-full w-full flex items-center justify-center opacity-20 z-50'>
        <img src="/spinner.gif" alt="loading-spinner" />
    </div>
  )
}

export default Loading