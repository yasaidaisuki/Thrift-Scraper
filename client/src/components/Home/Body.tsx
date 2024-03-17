import { useEffect, useState } from "react";
import axios from 'axios'
import { json } from "react-router-dom";


export default function Body() {
  const [item, setItem] = useState("")
  const [gender, setGender] = useState("")
  const [dataSet, setData] = useState([])

  async function getMaleItems() {
    await axios.get('http://localhost:5000/getMaleItems')
      .then((response) => {
        const itemData = (response.data).rows
        setData(itemData)
        console.log(itemData[1]['img'])
      })
      .catch((error) => {
        console.error(error)
      })

  }

  async function getFemaleItems() {
    await axios.get('http://localhost:5000/getFemaleItems')
      .then((response) => {
        const itemData = (response.data).rows
        console.log(itemData)
        setData(itemData)
      })
      .catch((error) => {
        console.error(error)
      })

  }
  return (
    <>
      <div className="pl-[18.5%] my-12 grid grid-cols-2">
        <div className="flex">
          <div className="cursor-pointer max-w-sm w-12 w-24 hover:text-blue-600"
            onClick={() => { getMaleItems() }}
          >MEN</div>
          <div className="cursor-pointer max-w-sm hover:text-blue-600"
            onClick={() => { getFemaleItems() }}
          >WOMEN</div>
        </div>
        <div className="ml-48 flex centered-item">
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            type="Item"
            placeholder="Search"
            className="block l-12 w-64 p-2 text-black bg-white border border-gray-500 rounded-lg appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {dataSet[0] ? (
          <div className="grid grid-cols-3 justify-items-center gap-9 py-8  mx-auto max-w-7xl">
            {dataSet.slice(0, 6).map((itemData, index) => (
              <div key={index} className=" p-2 mb-4">
                <img src={itemData.img} className="group/edit object-contain h-96 w-56 hover:blur duration-[350ms]" alt="Product" />
                <span className="group-hover/edit:text-gray-700 inset-0 flex items-center justify-center">
                www
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  )
}