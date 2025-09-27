import React, { useState } from 'react'
import asserts from '../../assets/assets';
import toast from 'react-hot-toast';

function AddProduct() {

    const [files, setFiles]= useState([]);
    const [name, setName]= useState('');
    const [description, setDescription]= useState('');
    const [category, setCategory]= useState('');
    const [price, setPrince]= useState('');
    const [offerPrince, setOfferPrince]= useState('');

    let onSubmitHandler= async(e)=>{
        e.preventDefault();
        toast.success('Product Added');
        setFiles([]);
        setName('');
        setDescription('');
        setCategory('');
        setPrince('');
        setOfferPrince('');
    }
  return (
    <div className="flex flex-col justify-between bg-transparent trxt-black dark:text-white">
            <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={onSubmitHandler}>
                <div>
                    <p className="text-base font-medium">Product Image</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                        {Array(4).fill('').map((_, index) => (
                            <label key={index} htmlFor={`image${index}`} className='shadow-2xl rounded-full'>
                                <input onChange={(e)=>{
                                    const updatedFiles=[...files];
                                    updatedFiles[index]=e.target.files[0];
                                    setFiles(updatedFiles);
                                }} accept="image/*" type="file" id={`image${index}`} hidden required />
                                {files[index] 
                                ? <img className="w-24 h-24 rounded-full" src={URL.createObjectURL(files[index])} alt="uploadArea" /> 
                                : <div className='w-24 h-24 border-2 dark:border-white border-gray-500/40 rounded-full cursor-pointer flex items-center justify-center'><i className="fa-solid fa-arrow-up-from-bracket text-xl text-[#0000009f] dark:text-[#ffffff92]"></i></div>}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-name">Product Name</label>
                    <input onChange={(e)=>setName(e.target.value)} value={name} id="product-name" type="text" placeholder="Type here" className="outline-0 md:py-2.5 py-2 px-3 rounded border border-gray-500/40 dark:border-white" required />
                </div>
                <div className="flex flex-col gap-1 max-w-md">
                    <label className="text-base font-medium" htmlFor="product-description">Product Description</label>
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description} id="product-description" rows={4} className="outline-0 md:py-2.5 py-2 px-3 rounded border border-gray-500/40 dark:border-white resize-none" placeholder="Type here" required></textarea>
                </div>
                <div className="w-full flex flex-col gap-1">
                    <label className="text-base font-medium" htmlFor="category">Category</label>
                    <select onChange={(e)=> setCategory(e.target.value)} value={category} id="category" className="outline-0 md:py-2.5 py-2 px-3 rounded border border-gray-500/40 dark:border-white">
                        <option value="" className='dark:bg-black' required>Select Category</option>
                        {[{ name: 'Fruits' }, { name: 'Vegetables' }, { name: 'Drinks' }, {name: 'Instant-Food'}, {name: 'Dairy'}, {name: 'Bakery'}, {name: 'Grains'}, {name: 'Spices'}].map((item, index) => (
                            <option key={index} value={item.name} className='dark:bg-black'>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-5 flex-wrap">
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="product-price">Product Price</label>
                        <input onChange={(e)=> setPrince(e.target.value)} value={price} id="product-price" type="number" placeholder="0" className="outline-0 md:py-2.5 py-2 px-3 rounded border border-gray-500/40 dark:border-white" required />
                    </div>
                    <div className="flex-1 flex flex-col gap-1 w-32">
                        <label className="text-base font-medium" htmlFor="offer-price">Offer Price</label>
                        <input onChange={(e)=> setOfferPrince(e.target.value)} value={offerPrince} id="offer-price" type="number" placeholder="0" className="outline-0 md:py-2.5 py-2 px-3 rounded border border-gray-500/40 dark:border-white" required />
                    </div>
                </div>
                <button className="px-8 py-2.5 bg-[#008000ba] hover:bg-[green] duration-300 w-full tracking-[3px] text-white font-medium rounded-md">ADD</button>
            </form>
        </div>
  )
}

export default AddProduct