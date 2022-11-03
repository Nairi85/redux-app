import React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function MainPage() {
    const dispatch=useDispatch()
    const name=useSelector(function(state){
        return state.currentUser
    })
    console.log(name)
    const changeName=useCallback(()=>{
        dispatch({
            type:"changeName",
            payload:"GORGIO"
        })
    },[dispatch])
  return (
    <div>
      Hello {name.name}
      <div onClick={changeName}>Cange Name</div>
    </div>
  )
}

export default MainPage
