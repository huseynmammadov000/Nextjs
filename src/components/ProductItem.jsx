"use client";

import Image from "next/image";
import EditIcon from "../assets/icons/editIcon.svg";
import DeleteIcon from "../assets/icons/deleteIcon.svg";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const ProductItem = ({ item }) => {

  const router = useRouter();
  return (
    <div className="w-full flex justify-between px-12 py-6 border border-zinc-300 ">
    <div className="flex gap-10">
    <h3>{item.title}</h3>
      <p>
        {item.price} {item.currency}
      </p>
      <p>{item.stock}</p>
      <p>{item.category}</p>
    </div>

    <div className="flex gap-6">
    <button onClick={()=>{
      router.push(`/home/products/edit/?productId=${item._id}`)
    }}>
        <Image className="size-6" alt="EditIcon Image" src={EditIcon} />
      </button >

      <button>
        <Image className="size-6" alt="DeleteIcon Image" src={DeleteIcon} />
      </button>
    </div>
    </div>
  );
};

export default ProductItem;
