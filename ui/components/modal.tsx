import { Fragment, useState, useContext, ChangeEvent, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import * as Next from "next";
import DropDown from "./dropdown";
import moment from "moment"
import UserDataService from "../services/UserService";
import { PaystackButton } from "react-paystack"
import AuthContext from "../context/auth";
import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image"

interface Props {
  open: boolean;
  setOpen: any;
}

  const product:any = {
  name: "Perfect Cake ",
  rating: 3.9,
  reviewCount: "1M+",
  href: "#",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Green", class: "bg-green-500", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    { name: "Indigo", class: "bg-indigo-900", selectedClass: "ring-gray-900" },
    { name: "Pink", class: "bg-pink-500", selectedClass: "ring-grey-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
    { name: "XXL", inStock: false },
  ],
};


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Modal: React.FC<Props> = (props) => {
  const { loggedIn } = useContext(AuthContext);
  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY
  const { open, setOpen } = props;
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [paymentInit, setPaymentInit] = useState<boolean>(false);

  const [formData, setFormData]: any = useState({
    email: "",
    name: "",
    color: selectedColor.name,
    size: selectedSize.name,
    note: "",
    delivery_date: new Date(moment().add(1, 'days').format()),
    amount: 5000
  });

  const emitData: object = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const lengthValidator = (str: string, req_max: number, req_min: number) => {
    if (str) {
      if (str.length >= req_min && str.length <= req_max) {
        return true;
      }
    }
    return false;
  };

  const shortenName = (str: string, maxLength:number, ellipsisLocationPercentage=.85, placeholder="...") => {
    if(str) {
      if(ellipsisLocationPercentage == null || isNaN(ellipsisLocationPercentage) || ellipsisLocationPercentage >= 1 || ellipsisLocationPercentage <= 0){
        ellipsisLocationPercentage = .85;
      }
      if(placeholder === null || placeholder === ""){
        placeholder = "...";
      }
      if (str.length > (maxLength-placeholder.length)) {
        var beginning = str.substr(0, (maxLength - placeholder.length)*ellipsisLocationPercentage );
        return beginning + placeholder;
      }
      return str;
    }
  }

  useEffect(() => {
    const name = formData.name
    if(name.length > 1) {
      const max = lengthValidator(name, 55, 0)
      if(!max) {
         setFormData({ ...formData, name: shortenName(name, 55) }); 
      }
    }

  }, [formData.name])

    useEffect(() => {
    const note = formData.note
    if(note.length > 1) {
      const max = lengthValidator(note, 145, 0)
      if(!max) {
         setFormData({ ...formData, note: shortenName(note, 145) }); 
      }
    }

  }, [formData.note])

  
  const componentProps: object = {
    // @ts-ignore: Object is possibly 'null'.
    email: loggedIn.email,
    amount: formData.amount * 100,
    metadata: {
      name: formData.name,
      color: formData.color,
      size: formData.size,
      note: formData.note,
      delivery_date: formData.delivery_date
    },
    publicKey,
    text: "Proceed to Payment",
    onSuccess: (res: any) => {
      const ref = res.reference
      toast("Be patient while we process your payment.", emitData)
      if(ref) {
        UserDataService.initiateCallback(ref)
         .then((response: any) => {
           router.push("/receipts")
         })
         .catch((e: any) => {
          alert(e)
         });
      }
     
    },
    onClose: () => alert("DO NOT DO THIS: Transaction will be cancelled. Click 'OK' to terminate")
  }
 


  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
     setFormData({ ...formData, color: selectedColor.name });
  }, [selectedColor])

  useEffect(() => {
     setFormData({ ...formData, size: selectedSize.name });
     if(selectedSize.name === "M") {
       setFormData({ ...formData, amount: 10000 });
     }else if(selectedSize.name === "L") {
       setFormData({ ...formData, amount: 15000 });
     }else {
       setFormData({ ...formData, amount: 5000 });
     }
  }, [selectedSize])




  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
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

                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <Image
                      src={`https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`}
                      layout='fill'
                      alt={product.imageAlt}
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">
                      {product.name}
                    </h2>

                    <section
                      aria-labelledby="information-heading"
                      className="mt-2"
                    >
                      <h3 id="information-heading" className="sr-only">
                        Product information
                      </h3>

                      <p className="text-2xl text-green-500">₦{formData.amount}</p>

                      {/* Reviews */}
                      <div className="mt-6">
                        <h4 className="sr-only">Reviews</h4>
                        <div className="flex items-center">
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  product.rating > rating
                                    ? "text-gray-900"
                                    : "text-gray-200",
                                  "h-5 w-5 flex-shrink-0"
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <p className="sr-only">
                            {product.rating} out of 5 stars
                          </p>
                          <span
                            className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {product.reviewCount} people loves this
                          </span>
                        </div>
                      </div>
                    </section>

                    <section
                      aria-labelledby="options-heading"
                      className="mt-10"
                    >
                      <h3 id="options-heading" className="sr-only">
                        Product options
                      </h3>

                      <div>
                        <div>
                          <h4 className="text-sm text-gray-900 font-medium">
                            Color
                          </h4>

                          <RadioGroup
                            value={selectedColor}
                            onChange={setSelectedColor}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a color
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-3">
                              {product.colors.map((color:any) => (
                                <RadioGroup.Option
                                  key={color.name}
                                  value={color}
                                  className={({ active, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      active && checked
                                        ? "ring ring-offset-1"
                                        : "",
                                      !active && checked ? "ring-2" : "",
                                      "-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
                                    )
                                  }
                                >
                                  <RadioGroup.Label as="p" className="sr-only">
                                    {color.name}
                                  </RadioGroup.Label>
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      "h-8 w-8 border border-black border-opacity-10 rounded-full"
                                    )}
                                  />
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Sizes */}
                        <div className="mt-10">
                          <RadioGroup
                            value={selectedSize}
                            onChange={setSelectedSize}
                            className="mt-4"
                          >
                            <RadioGroup.Label className="sr-only">
                              Choose a size
                            </RadioGroup.Label>
                            <div className="grid grid-cols-4 gap-4">
                              {product.sizes.map((size: any) => (
                                <RadioGroup.Option
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ active }) =>
                                    classNames(
                                      size.inStock
                                        ? "bg-white shadow-sm text-gray-900 cursor-pointer"
                                        : "bg-gray-50 text-gray-200 cursor-not-allowed",
                                      active ? "ring-2 ring-indigo-500" : "",
                                      "group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"
                                    )
                                  }
                                >
                                  {({ active, checked }) => (
                                    <>
                                      <RadioGroup.Label as="p">
                                        {size.name}
                                      </RadioGroup.Label>
                                      {size.inStock ? (
                                        <div
                                          className={classNames(
                                            active ? "border" : "border-2",
                                            checked
                                              ? "border-indigo-500"
                                              : "border-transparent",
                                            "absolute -inset-px rounded-md pointer-events-none"
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <div
                                          aria-hidden="true"
                                          className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                        >
                                          <svg
                                            className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line
                                              x1={0}
                                              y1={100}
                                              x2={100}
                                              y2={0}
                                              vectorEffect="non-scaling-stroke"
                                            />
                                          </svg>
                                        </div>
                                      )}
                                    </>
                                  )}
                                </RadioGroup.Option>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>

                        <div  className="mt-5 mb-4">
                          <div className="shadow sm:rounded-md sm:overflow-hidden">
                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                              <div>
                                <label
                                  htmlFor="name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Name (Imprint)
                                </label>
                                <div className="mt-1">
                                  <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={handleInputChange}
                                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-5 pr-12 sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Name to Imprint on Cake"
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="note"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Add Note
                                </label>
                                <div className="mt-1">
                                  <textarea
                                    id="note"
                                    name="note"
                                    onChange={handleInputChange}
                                    rows={3}
                                    className="pl-5 py-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                    placeholder="Custom Note"
                                    defaultValue={""}
                                  />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                  Let us know if you want something more..
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*@ts-ignore: Type '{ className: string; }' is missing the following properties from type 'PaystackButtonProps': publicKey, email, amount'.*/}
                        <PaystackButton className="paystack-button text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg" {...componentProps} />
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </>
  );
};
