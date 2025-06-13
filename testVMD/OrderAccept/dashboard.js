// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import {
    getFirestore,
    collection,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    doc,
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM elementi
const ordersTableBody = document.querySelector("#orders-table tbody");

const ordersQuery = query(collection(db, "orders"), orderBy("createdAt", "desc"));

onSnapshot(ordersQuery, (snapshot) => {
    ordersTableBody.innerHTML = "";

    snapshot.forEach((docSnap) => {
        const order = docSnap.data();
        const orderId = docSnap.id;
        const tableID = order.tableNum || 'N/A';
        
        let time = "";
        if (order.createdAt && order.createdAt.toDate) {
            time = order.createdAt.toDate().toLocaleString();
        }

        const itemsList = order.items
            .map((item) => `${item.name} x${item.qty}`)
            .join(", ");

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${orderId}</td>
        <td>${tableID}</td>
        <td>${itemsList}</td>
        <td>${order.total} RSD</td>
        <td>${time}</td>
        <td><button data-id="${orderId}" class="delete-btn">🗑️ Delete</button></td>
        `;

        ordersTableBody.appendChild(tr);
    });

    ordersTableBody.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", async (e) => {
            const orderId = e.target.getAttribute("data-id");
            if (confirm("Are you sure you want to delete this order?")) {
                try {
                    await deleteDoc(doc(db, "orders", orderId));
                    alert("Order deleted successfully.");
                    location.reload();
                } catch (error) {
                    console.error("Error deleting order:", error);
                    alert("Failed to delete order. Check console for details.");
                }
            }
        });
    });
});
