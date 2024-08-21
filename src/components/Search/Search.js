import React from "react"
import '../Search/SearchStyle.css'



export const Search = ( {placeholder,handeChange} ) =>{

return(
  <input 
className="search"
 type='search'
  placeholder={placeholder}
   onChange={handeChange}
 />

)
}

