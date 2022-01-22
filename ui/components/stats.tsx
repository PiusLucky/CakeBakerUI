import {  useState, useContext, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/router";
import { IOrder } from "../types";

interface Props {
  ordersArr: IOrder[]
}


const Stats: React.FC<Props> = (props) => (
  <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
        <div className="w-full sm:p-4 px-4 mb-6">
          <h1 className="title-font font-medium text-xl mb-2 text-white">
            Check Orders 
          </h1>
          <div className="leading-relaxed">
           We provide a means to show all orders along with their reference number and status. You can
           check the details of a specific order by clicking on &quot;View Order&quot;
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="title-font font-medium text-3xl text-white">{props?.ordersArr?.length}</h2>
          <p className="leading-relaxed">Total Orders</p>
        </div>
      </div>
    </div>
  </section>
)



export default Stats;