"use client";

import { useSearchParams } from "next/navigation";
import ProductForm from "../../../../components/ProductForm";

import { useEffect, useState } from "react";

const EditProduct = ({ searchParams }) => {
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);

  const handleInputChange = (name, value) => {
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };

  const _searchParams = useSearchParams()
  const getProductData = async () => {
    const productId = _searchParams.get('productId');
    const response = await fetch(
      `http://localhost:5001/products/product/${productId}`
    );
    const product = await response.json();

    setProduct(product);
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <ProductForm
      product={product}
      handleInputChange={handleInputChange}
      images={images}
      setImages={setImages}
      type="edit"
    />
  );
};

export default EditProduct;
