import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";
export default function Landing(){
  return(
    <div className="bg-indigo-900 min-h-screen text-white">
      <Navbar/>
      <div className="grid md:grid-cols-2 gap-10 px-6 md:px-12 py-12 md:py-20 items-center">

        {/*text*/}
        <div className="text-center md:text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            The hassle-free platform<br/>
            to sell globally for less</h1>
          <p className="mt-6 text-gray-300 text-base sm:text-lg">
            Connect to your bank account and<br/>
            start selling to the world today!</p>

          {/*2 buttons*/}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="w-full sm:w-auto bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Get Started</button>
           <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Book a demo</button>
          </div>
        </div>

        {/*3 shapes*/}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <div className="absolute w-56 sm:w-72 h-56 sm:h-72 bg-teal-400 rounded-3xl rotate-12 translate-x-6 sm:translate-x-10"></div>
          <div className="absolute w-56 sm:w-72 h-28 sm:h-32 bg-red-400 rounded-3xl -rotate-12 -translate-x-10 sm:-translate-x-20"></div>
          <div className="relative w-56 sm:w-72 h-56 sm:h-72 bg-yellow-300 rounded-3xl shadow-2xl -rotate-6 flex justify-center pt-16">
          <div className="flex gap-10 sm:gap-20">
          <div className="w-3 h-6 bg-black rounded-full"></div>
          <div className="w-3 h-6 bg-black rounded-full"></div>
          </div>
          </div>
          </div>
          </div>
          
{/*3 cards*/}
<div className="grid grid-cols-1 md:grid-cols-3 gap-24 px-12 md:px-24 py-16">
  <div className="flex items-start gap-6 text-white">
    <div className="bg-white p-6 rounded-2xl text-2xl">💻</div>
    <div>
      <p className="text-xl font-semibold">Instant Web & App</p>
      <p className="text-base text-gray-300 mt-1">Start selling today</p>
    </div>
  </div>

  <div className="flex items-start gap-6 text-white">
    <div className="bg-white p-6 rounded-2xl text-2xl text-black">%</div>
    <div>
      <p className="text-xl font-semibold">Integrated payments</p>
      <p className="text-base text-gray-300 mt-1">
        Less than 1% transaction fees
      </p>
    </div>
  </div>

  <div className="flex items-start gap-6 text-white">
    <div className="bg-white p-6 rounded-2xl text-2xl">🚚</div>
    <div>
      <p className="text-xl font-semibold">Integrated global <br /> delivery and logistics </p>
      <p className="text-base text-gray-300 mt-1">Live tracking</p>
    </div>
  </div>
</div>
</div>
  );
}