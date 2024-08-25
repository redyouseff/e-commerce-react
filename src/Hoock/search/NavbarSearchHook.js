import React, { useState } from 'react'

const NavbarSearchHook = () => {
        const [search,setsearch]=useState('')
        const onChangeSearch=(e)=>{
            setsearch(e.target.value)
            console.log(search)

        }
       
  return [onChangeSearch,search]
}

export default NavbarSearchHook
