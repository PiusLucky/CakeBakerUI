import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthContext from "../../context/auth";
import { Modal } from "../../components/modal";
import Table from "../../components/table";
import Stats from "../../components/stats";
import {IOrder} from "../../types";
import UserDataService from "../../services/UserService";
import { OrderModal } from "../../components/orderModal";
// import Image from "next/image"


const Order: React.FC = () => {
    const { loggedIn, setTriggerRender } = useContext(AuthContext);
    const [open, setOpen] = useState(false)
    const initialOrder = [{
      name: "",
      color: "",
      amount: 0,
      size: "",
      note: "",
      delivery_date: new Date(),
      reference: '',
      paid: false,
      user: '',
      createdAt: new Date(),
      updatedAt: new Date(),
      _id: null,
      __v: null,

    }];
    const [ordersArr, setOrdersArr] = useState<IOrder[]>(initialOrder);
    useEffect(()=> {
      UserDataService.orders()
        .then((response: any) => {
          setOrdersArr(response?.data)
        })
        .catch((e: any) => {
          console.log(e);
        });
       setTriggerRender(Math.random().toString())
    }, [])

    if (!loggedIn || loggedIn === null) {
      return <h1>Loading...</h1>
    }
    return (
      <>
       <section className="text-gray-400 bg-gray-900 body-font">
           <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
             <img
               className="lg:w-1/6 md:w-1/6 w-1/6 mb-10 object-cover object-center rounded"
               alt="hero"
               src={loggedIn?.profile_url?loggedIn?.profile_url: "https://dummyimage.com/720x600"}
               width={150}
               height={150}
             />
             <div className="text-center lg:w-2/3 w-full mt-4">
               <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                 My Profile
               </h1>
               <p className="leading-relaxed mb-8 uppercase">
                 {loggedIn?.username}
               </p>
               <p className="leading-relaxed mb-8 uppercase text-green-400">
                 {loggedIn?.email}
               </p>
             </div>
           </div>
         </section>
      </>

    )
};

export default Order;

