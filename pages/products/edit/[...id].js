import Layout from "@/components/layout";
import ProductForm from "@/components/productForm";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditProduct = () => {
    const [productInfo, setProductInfo] = useState();
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (!id) return;
        axios.get("/api/products?id=" + id).then((res) => {
            setProductInfo(res.data);
        });
    }, [id]);

    return (
        <Layout>
            <h1>Edit Product</h1>
            {productInfo && <ProductForm {...productInfo} />}
        </Layout>
    );
};

export default EditProduct;
