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
       
        <div className="h-full" style={{background: "#20293A", height: "80vh"}} >
          <div>
          <div className="absolute left-[10%] top-[285px]">
          <FontAwesomeIcon icon= {faSquareGithub} color="white" className="text-[150px]"/>
          </div>
          <div className="flex gap-16 justify-center relative top-5">
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl">
             <span className="text-3xl text-white p-2">Follwers</span>
             <div className="h-16 w-[1px] bg-white"></div>
             <span className="text-white text-3xl p-2">278356</span>

          </div>
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl">
             <span className="text-3xl text-white p-2">Follwing</span>
             <div className="h-16 w-[1px] bg-white"></div>
             <span className="text-white text-3xl p-2">0</span>

          </div>
          <div className="flex gap-4 bg-slate-950 p-3 rounded-xl">
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
          <div className="flex gap-5 flex-wrap my-10">

          <div className="text-white bg-slate-950 p-8 w-[650px] h-[250px] rounded-xl">
                <span className="text-4xl">.github</span>
                <p className="text-xl my-3">Community health files for the @Github organizatioon</p>
                <div className="flex gap-12 my-4">
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


          
            <div className="text-white bg-slate-950 p-8 w-[650px] h-[250px] rounded-xl">
                <span className="text-4xl">.github</span>
                <p className="text-xl my-3">Community health files for the @Github organizatioon</p>
                <div className="flex gap-12 my-4">
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
            <div className="text-white bg-slate-950 p-8 w-[650px] h-[250px] rounded-xl">
                <span className="text-4xl">.github</span>
                <p className="text-xl my-3">Community health files for the @Github organizatioon</p>
                <div className="flex gap-12 my-4">
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
            <div className="text-white bg-slate-950 p-8 w-[650px] h-[250px] rounded-xl">
                <span className="text-4xl">.github</span>
                <p className="text-xl my-3">Community health files for the @Github organizatioon</p>
                <div className="flex gap-12 my-4">
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
      
    </div>
  </div>

    </div>
  )
}

export default Hero