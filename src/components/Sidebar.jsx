export default function Sidebar(){
  return(
    <div className="
      w-full md:w-64 
      h-auto md:h-screen 
      bg-gray-100 p-4 md:p-6 shadow-lg 
      flex flex-col justify-between">   
      <div>
        <h2 className="font-bold text-lg mb-6 text-purple-600"> ◭Super Finti </h2>
        <h2 className="font-bold text-lg mb-4"> Main Navigation</h2>
        <ul className="space-y-3 text-gray-600">
          <li>Dashboard</li>
          <li>Transactions</li>
          <li>Contacts</li>
          <li>Features</li>
          <li>Library</li>
        </ul>
        <h3 className="mt-8 font-bold text-lg"> Settings & Schedules </h3>
        <ul className="space-y-3 mt-4 text-gray-600">
          <li>Base Wallet</li>
          <li>My Contacts</li>
          <li>Invoices</li>
          <li>Schedules</li>
        </ul>
      </div>
      {/* Bottom Help Card */}
     <div className="relative bg-orange-400 rounded-2xl p-4 md:p-5 shadow-md flex flex-col items-center 
     justify-center mt-6 md:mt-0 overflow-hidden">
  {/* Decorative circles */}
  <div className="absolute w-20 h-20 bg-white/20 rounded-full top-[-20px] left-[-30px]"></div>
  <div className="absolute w-32 h-32 bg-white/20 rounded-full bottom-[-30px] right-[-40px]"></div>
  <div className="relative z-10 flex flex-col items-center text-center">
    <p className="font-bold text-black">Help Center</p>
    <p className="mt-3 text-sm text-black/80 leading-tight">
    Having trouble in Finti.<br/>
    Please contact us for more questions.</p>
    <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:bg-gray-100 transition">
    Go to Help Center</button>
  </div>
</div>
    </div>
  );
}