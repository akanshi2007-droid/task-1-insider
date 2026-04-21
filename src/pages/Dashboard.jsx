import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
export default function Dashboard(){
  return(
    <div className="flex bg-white min-h-screen">
     <Sidebar />
     <div className="flex-1 pb-10">
        {/* PURPLE top*/}
        <div className="relative">
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-500 h-48 px-10 pt-6 relative overflow-hidden">
            <div className="flex justify-between items-center text-white">
              <input
                type="text"
                placeholder="Search.."
                className="bg-white/20 px-4 py-2 rounded-lg outline-none placeholder-white text-sm"/>

              <div className="flex gap-6 items-center">
                <span>Wallet</span>
                <span>Invoices</span>
                <span>Hi, Shakir</span>
              </div>
            </div>

            {/*decoration circles*/}
            <div className="absolute w-72 h-72 bg-white/10 rounded-full top-[-50px] right-[-50px]"></div>
            <div className="absolute w-56 h-56 bg-white/10 rounded-full bottom-[-40px] right-[80px]"></div>
          </div>

          {/*3cards*/}
          <div className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                title="Card Number"
                value="3829 4820 4629 5025"
                subtitle="Anita Rose"
                textColor="text-black"
                bgColor="bg-green-200"/>
              <StatCard
                title="Your Saving Status"
                value="4.28%"
                subtitle="Your spending increased"
                textColor="text-white"
                bgColor="bg-orange-500"/>
              <StatCard
                title="Your Working Balance"
                value="PKR 9,250,000"
                subtitle="Saving Account"
                textColor="text-black"
                bgColor="bg-teal-400"/>
            </div>
          </div>
        </div>

        <div className="mt-32 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="font-bold mb-6">Latest Transactions</h3>
              <div className="space-y-4">

                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl">➡️</div>
                    <p className="font-medium">Payment sent to Shakir</p>
                  </div>
                  <p className="font-semibold text-red-700">$560.00</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl">⬅️</div>
                    <p className="font-medium">Salary from Redwhale</p>
                  </div>
                  <p className="font-semibold text-gray-700">$12,200.00</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl">➤</div>
                    <p className="font-medium">Money sent to wise.com</p>
                  </div>
                  <p className="font-semibold text-red-700">$3,000.00</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 p-3 rounded-xl">➡️</div>
                    <p className="font-medium">Purchased Macbook Pro</p>
                  </div>
                  <p className="font-semibold text-red-700">$5560.00</p>
                </div>
              </div>
            </div>
            {/*upcomin transaction*/}
            <div className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-bold">Upcoming Transactions</h3>
                <span className="text-sm">View All</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-600 p-3 rounded-xl">💧</div>
                    <div><p className="font-medium">Water Bill</p>
                      <p className="text-sm text-gray-500">Unsuccessful</p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-700">-$280</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-red-500 p-3 rounded-xl">🗓️</div>
                    <div><p className="font-medium">Income: Salary Oct</p>
                      <p className="text-sm text-gray-500">Successfully</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">+$1200</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 p-3 rounded-xl">⚡</div>
                    <div><p className="font-medium">Electric Bill</p>
                      <p className="text-sm text-gray-500">Successfully</p>
                    </div>
                  </div>
                  <p className="font-semibold text-red-700">-$480</p>
                </div>
                <div className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition">
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 p-3 rounded-xl">📄</div>
                    <div><p className="font-medium">Income: Jane Transfers</p>
                      <p className="text-sm text-gray-500">Successfully</p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-700">+$500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}