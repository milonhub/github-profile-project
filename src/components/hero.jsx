import Search from "./Search"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    
        <div className="hero min-h-screen bg-base-200">
       <div className="hero-content flex-row lg:flex-row">
        <img src="/images/hero-image-github-profile.png" className = " h-80 w-full shadow-2xl" />
        <div className="absolute top-16 left-[38%]" >
            <Search />
        </div>
       
        <div className="h-full" style={{background: "#20293A", height: "72vh"}} >
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
          <div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
         </div>
        
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      
    </div>
  </div>

    </div>
  )
}

export default Hero