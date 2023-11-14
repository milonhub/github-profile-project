import Search from "./Search"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faCodeBranch, faStar } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    
        <div className="hero min-h-screen bg-base-200">
       <div className="hero-content flex-row lg:flex-row">
        <img src="/images/hero-image-github-profile.png" className = " h-80 w-full shadow-2xl" />
        <div className="absolute top-16 left-[38%]" >
            <Search />
        </div>
       
        <div style={{background: "#20293A", height: "100%"}} >
          <div>
          <div className="absolute left-[10%] top-[285px]">
          <FontAwesomeIcon icon= {faSquareGithub} color="white" className="text-[150px]"/>
          </div>
          
          <div className="laptop:flex laptop:flex-row laptop:gap-16 desktop:flex-row desktop:flex desktop:gap-16 justify-center relative top-5 mobile:flex mobile:flex-col">
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl w-72">
             <span className="text-3xl text-white p-2">Follwers</span>
             <div className="h-16 w-[1px] bg-white"> </div>
             <span className="text-white text-3xl p-2">278356</span>

          </div>
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl w-56">
             <span className="text-3xl text-white p-2">Follwing</span>
             <div className="h-16 w-[1px] bg-white"></div>
             <span className="text-white text-3xl p-2">0</span>

          </div>
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl w-[450px]">
          <span className="text-3xl text-white p-2">Location</span>
             <div className="h-16 w-[1px] bg-white"></div>
             <span className="text-white text-3xl p-2">San Fransica, CA</span>
          </div>
          </div>
         <div className="mx-[8%] my-[5%]">
          <div className="text-white">
            <h1 className="text-6xl leading-normal">GitHub</h1>
            <p className="text-3xl">How people build software</p>
          </div>
          <div className="grid grid-cols-2 gap-20 my-9">

          <div className="text-whitep-8 rounded-xl p-8 text-white" style={{backgroundColor: "#1B1A42"}}>
                <span className="text-4xl">.github</span>
                <p className="text-xl my-3">Community health files for the @Github organizatioon</p>
                <div className="flex flex-wrap gap-12 my-4">
                <div className="flex">
                  <FontAwesomeIcon icon={faCodeBranch} fontSize="24px" />
                  <span className="text-2xl mx-4">2345</span>
                  </div>
                  
                   <div>
                    <FontAwesomeIcon icon={faStar} fontSize="24px"/>
                    <span className="text-2xl mx-4">703</span>
                    </div>
                  <p className="text-2xl">updated 4days ago</p>
                  
                </div>
            </div>


          
            <div className="text-white bg-slate-950 p-8 rounded-xl">
                <span className="text-4xl">accesibility-alt-text-bot</span>
                <p className="text-xl my-3">an action to remind users to add alt text on issues. Pull requests and discussion</p>
                <div className="flex flex-wrap gap-12 my-4">
                <div>
                  <FontAwesomeIcon icon={faCodeBranch} fontSize="24px" />
                  <span className="text-2xl mx-4">2345</span>
                  </div>
                  
                   <div>
                    <FontAwesomeIcon icon={faStar} fontSize="24px"/>
                    <span className="text-2xl mx-4">703</span>
                   </div>
                  <p className="text-2xl">updated 4days ago</p>
                </div>
            </div>


       
            <div>
            <div className="text-white p-8 rounded-xl" style={{backgroundColor: "#1B1A42"}}>
                <span className="text-4xl">accesibilityjs</span>
                <p className="text-xl my-3">Client Side accesibility error scanner</p>
                <div className="flex flex-wrap gap-12 my-4">
                <div>
                  <FontAwesomeIcon icon={faCodeBranch} fontSize="24px" />
                  <span className="text-2xl mx-4">2345</span>
                  </div>
                  
                   <div>
                    <FontAwesomeIcon icon={faStar} fontSize="24px"/>
                    <span className="text-2xl mx-4">703</span>
                   </div>
                  <p className="text-2xl">updated 4days ago</p>
                </div>
            </div>

            
            </div>

            <div>
            <div className="text-white bg-slate-950 p-8 rounded-xl">
                <span className="text-4xl">Actions-cheat-sheet</span>
                <p className="text-xl my-3">A cheat sheet for Github Actions</p>
                <div className="flex flex-wrap gap-12 my-4">
                <div>
                  <FontAwesomeIcon icon={faCodeBranch} fontSize="24px" />
                  <span className="text-2xl mx-4">2345</span>
                  </div>
                  
                   <div>
                    <FontAwesomeIcon icon={faStar} fontSize="24px"/>
                    <span className="text-2xl mx-4">703</span>
                   </div>
                  <p className="text-2xl">updated 4days ago</p>
                </div>
            </div>


            </div>
          </div>
         </div>
        
        
        
        </div>
        <p className="text-3xl text-white text-center py-8">View all respository</p>
    </div>
   
  </div>
  
    </div>
  )
}

export default Hero