import { Fragment, useState, useContext, ChangeEvent, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import * as Next from "next";
import DropDown from "./dropdown";
import moment from "moment";
import UserDataService from "../services/UserService";
import { IOrder } from "../types";


interface Props {
  ordersArr: IOrder[],
  open: boolean,
  currentOrderId: string,
  setOpen: any
}

const MReceipt: React.FC<Props> = (props) => {
  const { open, setOpen, currentOrderId, ordersArr } = props;
  const getSingleOrder: any = () => {
    const order = ordersArr.find(item => item._id === currentOrderId)
    return order
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div
          className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
          style={{ fontSize: 0 }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden md:inline-block md:align-middle md:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
               
               <div className="p-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
                 <div className="border-b border-gray-200 shadow">
                  <div className="pl-2 pt-1 pb-1">Invoice ~ #{getSingleOrder()?.reference}</div>
                   <table>
                     <thead className="bg-gray-50">
                       <tr>
                         <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">
                           Type
                         </th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Quantity</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Cost</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Size</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Color</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Delivery</th>
                         <th className="px-4 py-2 text-xs text-gray-500 ">Total</th>
                       </tr>
                     </thead>
                     <tbody className="bg-white">
                       <tr className="whitespace-nowrap">
                         <td className="px-6 py-4 text-sm text-gray-500">1</td>
                         <td className="px-6 py-4">
                           <div className="text-sm text-gray-900">
                             Custom Cake
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="text-sm text-gray-500">1</div>
                         </td>
                         <td className="px-6 py-4 text-sm text-gray-500">₦{getSingleOrder()?.amount}</td>
                         <td className="px-6 py-4">{getSingleOrder()?.size}</td>
                         <td className="px-6 py-4">{getSingleOrder()?.color}</td>
                         <td className="px-6 py-4">{getSingleOrder()?.delivery_date && moment(getSingleOrder()?.delivery_date).calendar()}</td>
                         <td className="px-6 py-4">{getSingleOrder()?.amount + 0.01 * getSingleOrder()?.amount}</td>
                       </tr>
                       <tr>
                         <td colSpan={6} />
                         <td className="text-sm font-bold">Sub Total</td>
                         <td className="text-sm font-bold tracking-wider">
                           <b>₦{getSingleOrder()?.amount}</b>
                         </td>
                       </tr>
                       {/*end tr*/}
                       <tr>
                         <th colSpan={6} />
                         <td className="text-sm font-bold">
                           <b>Tax Rate</b>
                         </td>
                         <td className="text-sm font-bold">
                           <b>1%</b>
                         </td>
                       </tr>
                       {/*end tr*/}
                       <tr className="text-white bg-gray-800">
                         <th colSpan={6} />
                         <td className="text-sm font-bold">
                           <b>Total</b>
                         </td>
                         <td className="text-sm font-bold">
                           <b>₦{getSingleOrder()?.amount + 0.01 * getSingleOrder()?.amount}</b>
                         </td>
                       </tr>
                       {/*end tr*/}
                     </tbody>
                   </table>
                 </div>
               </div>

              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};


export default MReceipt;