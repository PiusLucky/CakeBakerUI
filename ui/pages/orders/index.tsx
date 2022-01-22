import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import AuthContext from "../../context/auth";
import { Modal } from "../../components/modal";
import Table from "../../components/table";
import Stats from "../../components/stats";
import {IOrder} from "../../types";
import UserDataService from "../../services/UserService";
import { OrderModal } from "../../components/orderModal";

const Order: React.FC = () => {
    const { loggedIn, setTriggerRender } = useContext(AuthContext);
    const [currentOrderId, setCurrentOrderId] = useState<any>('');
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
          setOrdersArr(response?.data.reverse())
        })
        .catch((e: any) => {
          console.log(e);
        });
       setTriggerRender(Math.random().toString())
    }, [])
    // Server-render loading state
    if (!loggedIn || loggedIn === null) {
      return <h1>Loading...</h1>
    }
    return (
      <>
      <OrderModal open={open} setOpen={setOpen} ordersArr={ordersArr}  currentOrderId={currentOrderId}/>
      <Stats ordersArr={ordersArr}   />
      <Table ordersArr={ordersArr} setOpen={setOpen} setCurrentOrderId={setCurrentOrderId} />
      </>

    )
};

export default Order;
