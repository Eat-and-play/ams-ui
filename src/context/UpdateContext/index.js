import React, {useState} from "react";

const UpdateContext = React.createContext({
  update: false,
  shouldUpdate: () => {}
})

const UpdateContextWrapper = ({children}) => {
  const [update, setUpdate] = useState(false)
  const shouldUpdate = () => {
    setUpdate((p) => !p)
  }
  return (
    <UpdateContext.Provider value={{update, shouldUpdate}}>
      {children}
    </UpdateContext.Provider>
  )
}


export {UpdateContext, UpdateContextWrapper}