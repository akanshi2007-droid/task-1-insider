export default function Auth(){
  return(
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 p-4">
      <div className="w-full max-w-5xl bg-[#2a2438] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/*image*/}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img src="/signup.png" alt="signup" className="w-full h-full object-cover"/>
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 text-white">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Create an account</h1>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Already have an account?
            <span className="underline cursor-pointer">Log in</span></p>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full p-3 rounded-lg bg-slate-900 outline-none"/>
            <input
              type="text"
              placeholder="Last name"
              className="w-full p-3 rounded-lg bg-slate-900 outline-none"/>
          </div>
            <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-900 mb-4 outline-none"/>
            <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-slate-900 mb-4 outline-none"/>

          <div className="flex items-start gap-2 mb-6 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>I agree to the Terms & Conditions</span>
          </div>

          <button className="w-full bg-purple-500 py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
            Create account</button>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="px-3 text-gray-400 text-sm">Or register with</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 border border-gray-500 py-2 rounded-lg">Google</button>
            <button className="flex-1 border border-gray-500 py-2 rounded-lg">Apple</button>
          </div>
          </div>
          </div>
          </div>
  );
}