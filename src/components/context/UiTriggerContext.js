import React, { useState, useMemo } from 'react'

export const UiTriggersContext = React.createContext({})

export const UiTriggersProvider= ({children}) => {
  const [showModal, setShowModal] = useState(false)


  const hideModal = useMemo(() => () => setShowModal(false), [])
  const displayModal = useMemo(() => () => setShowModal(true), [])

  const state = {
    showModal,
    hideModal,
    displayModal,
  }

  return(
    <UiTriggersContext.Provider value={state}>
      {children}
    </UiTriggersContext.Provider>
  )
}