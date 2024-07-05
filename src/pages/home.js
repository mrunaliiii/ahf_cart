import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
      <h1 className='flex justify-between items-center mb-5' style={{ fontWeight: 'bold', color: 'green', fontSize: 100 }}>
  Annapurna Home Food
</h1>
        <h1 className='text-3xl my-5'>Our Delightful Dishes</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home