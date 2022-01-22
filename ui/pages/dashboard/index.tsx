import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthContext from "../../context/auth";
import { Modal } from "../../components/modal";


const Dashboard: React.FC = () => {
    const { loggedIn, setTriggerRender } = useContext(AuthContext);
    const [open, setOpen] = useState(false)
    useEffect(()=> {
       setTriggerRender(Math.random().toString())
    }, [])
    // Server-render loading state
    if (!loggedIn || loggedIn === null) {
      return <h1>Loading...</h1>
    }
    return (
      <section className="text-gray-400 bg-gray-900 body-font">
      <Modal open={open} setOpen={setOpen} />
         <div className="container px-5 py-24 mx-auto">
           <div className="text-center mb-20">
             <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
               Make a Request
             </h1>
             <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
               Click on the &quot;Make a Request&quot; button and select custom specifications for your cake of Interest.
             </p>
             <div className="flex mt-6 justify-center">
               <div className="w-16 h-1 rounded-full bg-pink-500 inline-flex" />
             </div>
           </div>
           <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
             <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
               <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-pink-400 mb-5 flex-shrink-0">
                 <svg
                   fill="none"
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   className="w-10 h-10"
                   viewBox="0 0 24 24"
                 >
                   <circle cx={6} cy={6} r={3} />
                   <circle cx={6} cy={18} r={3} />
                   <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                 </svg>
               </div>
               <div className="flex-grow">
                 <h2 className="text-white text-lg title-font font-medium mb-3">
                   Make a Request
                 </h2>
                 <p className="leading-relaxed text-base">
                  Here, just fill out some basic details about the cake like the size, color and type.
                 </p>
               </div>
             </div>
             <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
               <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-pink-400 mb-5 flex-shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                 </svg>
               </div>
               <div className="flex-grow">
                 <h2 className="text-white text-lg title-font font-medium mb-3">
                   Generate Receipt
                 </h2>
                 <p className="leading-relaxed text-base">
                   We always show you proof of every transaction. We provide a &quot;reference 
                   number&quot; which can be used to query any disputed transaction.
                 </p>
               </div>
             </div>
                          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
               <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-pink-400 mb-5 flex-shrink-0">
                 <svg
                       fill="none"
                       stroke="currentColor"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       strokeWidth={2}
                       className="w-10 h-10"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                     </svg>
               </div>
               <div className="flex-grow">
                 <h2 className="text-white text-lg title-font font-medium mb-3">
                   View Order
                 </h2>
                 <p className="leading-relaxed text-base">
                   You can view all orders and check the date when your request will be delivered. It is as smooth as that.
                 </p>
               </div>
             </div>
           </div>
           <button onClick={() => setOpen(true)} className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-3 px-10 focus:outline-none hover:bg-pink-600 rounded text-lg">
             Make a Request
           </button>
         </div>
       </section>


    )
};

export default Dashboard;
