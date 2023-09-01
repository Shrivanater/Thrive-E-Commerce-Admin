import Layout from "@/components/layout";
import ProductForm from "@/components/productForm";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewProduct = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();

    const createProduct = async (e) => {
        e.preventDefault();
        const data = { title, description, price };
        await axios.post("/api/products", data);
        setGoToProducts(true);
    };

    if (goToProducts) {
        router.push("/products");
    }

    return (
        <Layout>
            <h1>New Product</h1>
            <ProductForm />
        </Layout>
    );
};

export default NewProduct;
