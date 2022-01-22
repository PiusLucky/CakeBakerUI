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

export const OrderModal: React.FC<Props> = (props) => {
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
                <div className="flex flex-col">
                  <section className="font-bold text-gray-600"> {getSingleOrder()?.reference} </section>
                  <hr />
                  <br />
                  { getSingleOrder()?.name && <h3><span className="font-semibold">Name</span>: {getSingleOrder().name}</h3>}
                  <h3><span className="font-semibold">Color</span>: {getSingleOrder()?.color}</h3>
                  <h3><span className="font-semibold">Status</span>: {getSingleOrder()?.paid}
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {getSingleOrder()?.paid?<span>paid</span>:<span>unpaid</span>}
                  </span>
                  </h3>
                  <h3><span className="font-semibold">Amount</span>: <span className="text-green-400">₦{getSingleOrder()?.amount}</span></h3>
                  <h3><span className="font-semibold">Size</span>: {getSingleOrder()?.size}</h3>
                  {getSingleOrder()?.note && <h3><span className="font-semibold">Note</span>: {getSingleOrder().note}</h3>}
                  <h3><span className="font-semibold">To be Delivered</span>: {getSingleOrder()?.delivery_date && moment(getSingleOrder()?.delivery_date).calendar()}</h3>
                </div>

              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
