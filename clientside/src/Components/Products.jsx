import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../Redux/ApiSlice/product'

const Products = () => {
const { keyword } = useParams();

const{data, isLoading, error} = useGetProductsQuery({keyword})

console.log(data)

  return (
    <div>
     {data?.product.map(product => (
        <h1>{product.name}</h1>
     ))}
    </div> 
  )
}

export default Products