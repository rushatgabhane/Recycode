import Pic from './bottle.png'
import {Link} from 'react-router-dom'
const Hero =()=>{
    return(
        <div className="z-40">
        <div className="px-12 lg:mx-16 flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/2 my-auto lg:py-10">
            <p className="text-3xl sm:tex-4xl md:text-5xl font-semibold mb-4">Recycling codes</p>
            <p className="text-3xl sm:tex-4xl md:text-5xl font-semibold">that <span className="heilight">make sense.</span></p>
            <button className="bg-green-400 text-white mt-6 px-4 py-2 font-bold hover:bg-green-500 text-center rounded-full shadow-lg uppercase tracking-wide"><Link to="/signup">Start Now</Link></button>
          </div>

          <div className="px-2 py- w-full sm:w-1/2 md:w-1/2">
            <img src={Pic} alt=""></img>
          </div>
        </div>
      </div>
    );

}

export default Hero;