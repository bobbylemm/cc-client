import axios from 'axios'

import { fireStore } from "./firebase";

const orderRef = fireStore.collection("orders");

export const getOrders = async (direction: "next" | "prev", docToUse?: any) => {
  const orders: any = [];
  try {
    const ordersDoc = await orderRef
      .orderBy("title")
      [direction === "next" ? "startAfter" : "endBefore"](docToUse || 0)
      [direction === "next" ? "limit" : "limitToLast"](10)
      .get();
    const lastDoc = ordersDoc.docs[ordersDoc.docs.length - 1];
    const firstDoc = ordersDoc.docs[0];

    ordersDoc.forEach((doc) => {
      orders.push(doc.data());
    });
    return { orders, lastDoc, firstDoc };
  } catch (error) {
    return error;
  }
};

export const addNewOrder = async (payload: any) => {
  try {
    const response = await axios.post('http://localhost:3090/orders', payload)
    console.log(response.data, '-==>>')
  } catch (error) {
    throw error
  }
}

export const updateOrder = async (payload: {title: string, bookingDate: string | "number"}, id: string) => {
  console.log(id, '-->response')
  try {
    const response = await axios.put(`http://localhost:3090/orders/${id}`, payload)
    console.log(response.data, '-==>>')
  } catch (error) {
    throw error
  }
}
