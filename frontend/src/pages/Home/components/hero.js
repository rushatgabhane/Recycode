import Pic from './21409268.jpg'
import {Link} from 'react-router-dom'
const Hero =()=>{
    return(
        <div className="z-40">
        <div className="px-2 lg:mx-16 flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/2 my-auto lg:py-10">
            <p className=" text-3xl sm:tex-4xl md:text-5xl font-semibold line-height-sm">Recycling Codes</p>
            <p className=" text-3xl sm:tex-4xl md:text-5xl font-semibold line-height-sm">that <span className="heilight">make sense</span></p>
            <button className="bg-green-400 mt-6 px-3 py-2 rounded-sm text-white hover:bg-green-500 text-center rounded-2xl shadow-lg"><Link to="/signup">Start Now</Link></button>
          </div>

          <div className="px-2 py-6 w-full sm:w-1/2 md:w-1/2">
            <img src={Pic} alt=""></img>
          </div>
        </div>
      </div>
    );

}

export default Hero;