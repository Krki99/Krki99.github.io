import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAVhF6DeXLgVPeCV4UlJTFNet5lnaRfMsg",
    authDomain: "coffe-e90af.firebaseapp.com",
    projectId: "coffe-e90af",
    storageBucket: "coffe-e90af.firebasestorage.app",
    messagingSenderId: "1011517918448",
    appId: "1:1011517918448:web:fd97745c1770fe2950c635",
    measurementId: "G-FGLF6GE006"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function sendOrder(orderData) {
  try {
    const itemsSummary = orderData.items.map(item => {
      return {
        name: item.name_sr || 'Unknown',
        qty: item.qty
      };
    });

    const orderToSend = {
      items: itemsSummary,
      tableId: orderData.tableId || '',
      total: orderData.total,
      createdAt: serverTimestamp()
    };

    await addDoc(collection(db, "orders"), orderToSend);
    alert("Order sent!");
  } catch (e) {
    alert("Error sending order: " + e.message);
  }
}

window.sendOrder = sendOrder;