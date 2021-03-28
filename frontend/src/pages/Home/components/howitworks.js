import Pic from './21409268.jpg'
import Curve from './curve.png'
const HowItWorks = () => {
    return (
        <div className="md:-mt-44">
            <img src={Curve}></img>
        <div className="text-white md:-mt-48 z-20" style={{backgroundColor: "#004843"}}>
            <h1 className="px-2 lg:mx-16 text-3xl py-10 px-6">How It works</h1>
            <div className="px-2 lg:mx-16 flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/2 my-auto lg:py-10 px-6">
                    <p className="text-2xl">1. Your business fills out our form and gets a QR code to put on your product.</p>
                </div>

                <div className="px-2 py-6 w-full sm:w-1/2 md:w-1/2">
                    <img className="md:w-1/2 ml-auto px-6" src={Pic} alt=""></img>
                </div>
            </div>
            <div className="px-2 lg:mx-16 flex flex-wrap">
            <div className="px-2 py-6 w-full sm:w-1/2 md:w-1/2 order-last md:order-first">
                    <img className="md:w-1/2 mr-auto px-6" src={Pic} alt=""></img>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 my-auto lg:py-10 order-first md:order-last px-6">
                    <p className="text-2xl">2. Consumers can scan the QR code to find out how your product can be recycled.</p>
                </div>

            </div>
            <div className="px-2 lg:mx-16 flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-1/2 my-auto lg:py-10 px-6">
                    <p className="text-2xl">3. Track when, where, and how much your products are recycled by analyzing our QR code scanning data.</p>
                </div>

                <div className="px-2 py-6 w-full sm:w-1/2 md:w-1/2">
                    <img className="md:w-1/2 ml-auto px-6" src={Pic} alt=""></img>
                </div>
            </div>
        </div>
        </div>
    );
}

export default HowItWorks;