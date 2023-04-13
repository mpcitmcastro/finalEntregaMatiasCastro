import "./App.css";
import { useEffect, useState } from "react";
//import productos from "../productos";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { Route, Routes } from "react-router-dom";
import db from "../db/firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  //console.log(productos);
  const [productos, setitems] = useState([]);
  const itemsRef = collection(db, "mpcit-l");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const productos = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    console.log(productos);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>ARTICULOS DE ILUMINACION PRINCIPAL</h1>} />
        <Route path="/Lista" element={<ProductList productos={productos} />} />
        <Route path="/Grupos" element={<h1>GRUPOS</h1>} />
        <Route path="/Contacto" element={<h1>CONTACTOS</h1>} />
      </Routes>
    </div>
  );
}

export default App;
