import {Link} from "react-router-dom";
export default function Navbar(){
  return(
    <nav className="flex justify-between items-center px-10 py-6 bg-indigo-900 text-white ">
      <h1 className="text-2xl font-bold font-poppins">
  ◆Picksell
</h1>
<div className="flex justify-center items-center gap-4 py-4 text-gray-400">
  <p>Catalogue</p>
  <p className="font-bold underline decoration-blue-400 decoration-2 underline-offset-4 text-white">Business</p>
  <p>Shopping</p>
</div>
      <div className="flex gap-6">
        <Link className=" text-white px-4 py-2 rounded-lg border border-white" to="/Auth">Sign In</Link>
        <Link className=" text-white px-4 py-2 rounded-lg border border-white" to="/Dashboard"> Get Started</Link>
        <Link className=" text-white px-3 py-1"> English ﹀</Link>       
      </div>
    </nav>
  );
}