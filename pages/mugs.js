import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'
import connectdb from '../middleware/mongoose'
import mongoose from 'mongoose'

const Mugs = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
          {Object.keys(products).length === 0 && <p>All the mugs are currently out of stock. New stock is coming soon!</p>}
            {Object.keys(products).map((i) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg" key={products[i]._id}>
                  <Link href={`/product/${products[i].slug}`} legacyBehavior>
                    <a className="block relative rounded overflow-hidden cursor-pointer">
                      <img alt="ecommerce" className="h-[40vh] block m-auto" src={products[i].img} />
                    </a>
                  </Link>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-md tracking-widest title-font mb-1">{products[i].category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{products[i].title}</h2>
                    <p className="mt-1">${products[i].price}.00</p>
                    <div className='flex space-x-2'>
                      {products[i].size.includes('S') && <div>S</div>}
                      {products[i].size.includes('M') && <div>M</div>}
                      {products[i].size.includes('L') && <div>L</div>}
                      {products[i].size.includes('XL') && <div>XL</div>}
                      {products[i].size.includes('XXL') && <div>XXL</div>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
  }
  let products = await Product.find({ category: 'Mug' })
  let mugs = {}
  for (let item of products) {
    if (item.title in mugs) {
      if (!mugs[item.title].color.includes(item.color) && item.availableQty > 0) {
        mugs[item.title].color.push(item.color)
      }
      if (!mugs[item.title].size.includes(item.size) && item.availableQty > 0) {
        mugs[item.title].size.push(item.size)
      }
    } else {
      mugs[item.title] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        mugs[item.title].color = [item.color]
        mugs[item.title].size = [item.size]
      }
    }
  }
  return {
    props: { products: JSON.parse(JSON.stringify(mugs)) }
  }
}

export default Mugs