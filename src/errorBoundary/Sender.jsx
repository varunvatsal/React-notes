import React from 'react'
import Receiver from './Receiver'
import ErrorBoundary from './ErrorBoundary'
const Sender = () => {
  return (
    <>
        <ErrorBoundary>
          <Receiver money={15000} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Receiver money={25000} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Receiver money={35000} />
        </ErrorBoundary>
    </>
  )
}

export default Sender