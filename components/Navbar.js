import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { HiShoppingBag } from 'react-icons/hi'

const Navbar = ({ logout, user, cart, addToCart, removeFromCart, clearCart }) => {

  const ref = useRef()

  const [dropdown, setDropdown] = useState(false)

  const toggleCart = () => {
    const node = ref.current
    if (node) {
      if (node.classList.contains('translate-x-full')) {
        node.classList.remove('translate-x-full')
        node.classList.add('translate-x-0')
      }
      else if (!node.classList.contains('translate-x-full')) {
        node.classList.remove('translate-x-0')
        node.classList.add('translate-x-full')
      }
    }
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-center md:justify-start py-2 shadow-md sticky top-0 z-10 bg-white'>
      <div className="logo mr-auto md:mx-5">
        <Link href='/' className='cursor-pointer'><Image src="/logo.png" alt="logo" width={200} height={40} style={{'width':'auto', 'height': 'auto'}} /></Link>
      </div>
      <div className="nav">
        <ul className='flex space-x-4 items-center font-bold md:text-xl'>
          <Link legacyBehavior href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link legacyBehavior href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link legacyBehavior href={'/stickers'}><a><li>Stickers</li></a></Link>
          <Link legacyBehavior href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>

      <div className='cart absolute right-4 top-4 flex items-center'>
        <span onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}>
          {dropdown && <div onMouseOver={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)} className='absolute right-10 bg-white shadow-lg rounded-md text-sm px-5 w-32 top-6 py-4'>
            <ul>
              <Link legacyBehavior href={'/myaccount'}><a><li className='py-1 hover:text-pink-600 cursor-pointer'>My Account</li></a></Link>
              <Link legacyBehavior href={'/orders'}><a><li className='py-1 hover:text-pink-600 cursor-pointer'>Orders</li></a></Link>
              <li onClick={logout} className='py-1 hover:text-pink-600 cursor-pointer'>Logout</li>
            </ul>
          </div>}
          {user.value && <MdAccountCircle className='mx-2 text-xl md:text-2xl cursor-pointer' />}
        </span>

        {!user.value && <Link href={'/login'}>
          <button className='bg-pink-600 px-2 py-1 mx-2 rounded-md text-sm text-white'>Login</button>
        </Link>}
        <AiOutlineShoppingCart onClick={toggleCart} className='text-xl md:text-2xl cursor-pointer' />
      </div>

      <div ref={ref} className="sidebar overflow-y-scroll h-screen md:w-[300px] w-56 absolute z-10 top-0 right-0 bg-pink-100 px-6 py-10 transition-transform translate-x-full transform">
        <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
        <span className='absolute top-5 right-2 cursor-pointer text-2xl text-pink-500'><AiFillCloseCircle onClick={toggleCart} /></span>
        <ol className='list-decimal my-5 space-y-4'>

          {Object.keys(cart).length == 0 && <div className='font-semibold'>
            Your cart is Empty!
          </div>}

          {Object.keys(cart).map((item) => {
            return (
              <li key={item}>
                <div className="item flex space-x-2">
                  <div className='w-2/3 font-semibold'>{cart[item].name}({cart[item].size}/{cart[item].variant})</div>
                  <div className='w-1/3 font-semibold flex justify-center items-center space-x-2'>
                    <AiFillMinusCircle onClick={() => { removeFromCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-xl cursor-pointer' />
                    <span>{cart[item].qty}</span>
                    <AiFillPlusCircle onClick={() => { addToCart(item, 1, cart[item].price, cart[item].name, cart[item].size, cart[item].variant) }} className='text-xl cursor-pointer' />
                  </div>
                </div>
              </li>
            )
          })}

        </ol>
        <div className='flex justify-center space-x-2 mt-8'>
          <Link href={'/checkout'}>
            <button className="checkout text-white block m-auto md:w-28 w-24 h-10 hover:bg-pink-500 bg-pink-400 rounded-md">
              <div className='flex justify-center items-center'>
                <HiShoppingBag className='text-xl my-1' />
                Checkout
              </div>
            </button>
          </Link>
          <button onClick={clearCart} className="checkout text-white block m-auto w-28 h-10 hover:bg-pink-500 bg-pink-400 rounded-md">
            Clear cart
          </button>
        </div>
      </div>

    </div>
  )
}

export default Navbar