
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Search = () => {

  return (
         <div className=' bg-slate-500 rounded-xl'>
          <FontAwesomeIcon icon= {faMagnifyingGlass} color='white' fontSize="40px" className='pl-4'/>
          <input placeholder="User name" className="text-4xl p-5 w-[600px] outline-none   bg-slate-500 text-stone-50">
          </input>
         
         </div>
        
    
  )
}

export default Search