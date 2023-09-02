import React from 'react'

const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">CODESWEAR.COM</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id : #6756287</h1>
              <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
              <div className="flex mb-4">
                <a className="flex-grow text-pink-500 py-2 text-lg px-1 w-1/3 text-center">Name</a>
                <a className="flex-grow text-pink-500 py-2 text-lg px-1 w-1/3 text-center">Quantity</a>
                <a className="flex-grow text-pink-500 py-2 text-lg px-1 w-1/3 text-center">Total</a>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 w-1/3 text-center">Wear-the-code(Xl/Blue)</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">2</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">$116</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 w-1/3 text-center">Wear-the-code(Xl/Blue)</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">2</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">$116</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 w-1/3 text-center">Wear-the-code(Xl/Blue)</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">2</span>
                <span className="ml-auto text-gray-900 w-1/3 text-center">$116</span>
              </div>
              <div className="flex pt-5">
                <span className="title-font font-medium text-2xl text-gray-900">SubTotal : $58.00</span>
                <button className="flex ml-auto text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
              </div>
            </div>
            <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Order