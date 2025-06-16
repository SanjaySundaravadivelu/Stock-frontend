import { create } from "zustand";
const BEURL = import.meta.env.VITE_BE_URL;

export const useProductStore = create((set) => ({
  currProduct: "",
  products1: [],
  isAuth: false,
  currUser: "",
  setProduct: (products) => {
    set((state) => ({ currProduct: products }));
  },
  setIsAuth: (value) => {
    set((state) => ({ isAuth: value }));
  },
  setUser: (value) => {
    set((state) => ({ currUser: value }));
  },
  verifyToken: async (token) => {
    const res = await fetch(BEURL + "/api/products/verifyToken", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
      }),
    });
    const data = await res.json();
    //set((state) => ({ products: [...state.products, data.data] }));
    return { success: data.success, message: data.data };
  },
  login: async (email, password) => {
    const res = await fetch(BEURL + "/api/products/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: token }),
      credentials: "include",
    });
    const data = await res.json();
    //set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, data: data };
  },
  createProduct: async (newProduct) => {
    const res = await fetch(BEURL + "/api/products/add", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();

    //set((state) => ({ products: [...state.products, data.data] }));
    return { success: data.success, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    const res = await fetch(BEURL + `/api/products/`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  },
  fetchStat: async () => {
    const res = await fetch(BEURL + `/api/products/getStat`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  },
  updateStat: async () => {
    const res = await fetch(BEURL + `/api/products/updatestat`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  },
  fetchReco: async () => {
    const res = await fetch(BEURL + `/api/products/getReco`, {
      credentials: "include",
    });
    const data = await res.json();
    return data;
  },
  searchStock: async (id) => {
    const res = await fetch(BEURL + `/api/products/search/${id}`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
    //console.log("RES", res);
    const data = await res.json();

    return data;
  },
  searchIpo: async (id) => {
    const res = await fetch(BEURL + `/api/products/ipo`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });

    //console.log("RES", res);
    const data = await res.json();

    return data;
  },
  searchMutual: async (id) => {
    const res = await fetch(BEURL + `/api/products/mutual`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });

    //console.log("RES", res);
    const data = await res.json();

    return data;
  },
  history: async (id) => {
    const res = await fetch(BEURL + `/api/products/history/${id}`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
    //console.log("RES", res);
    const data = await res.json();

    return data;
  },
  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      credentials: "include",
      method: "DELETE",
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update the ui immediately, without needing a refresh
    // set((state) => ({
    //   products: state.products.filter((product) => product._id !== pid),
    // }));
    return { success: true, message: data.message };
  },
  updateProduct: async () => {
    const res = await fetch(BEURL + `/api/products/report`, {
      credentials: "include",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    return { success: true, message: data.message };
  },
}));
