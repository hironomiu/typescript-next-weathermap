import { useState } from 'react'
import Image from 'next/image'

const fetchData = async (text: string) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&lang=ja&units=metric`
  )
  const json = await response.json()
  return json
}

type Data = {
  name: string
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

const Main = () => {
  const [place, setPlace] = useState<string>('')
  const [data, setData] = useState<Data>({
    name: '',
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
  })

  const handleChangePlace = (e: any) => {
    setPlace((prev: string) => (prev = e.target.value))
  }
  const handleClick = async () => {
    const json = await fetchData(place)

    setData({ ...json.main, name: json.name })
  }
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="py-10">
        <input
          className="border c"
          type="text"
          value={place}
          onChange={handleChangePlace}
        />
        <button className="text-2xl text-black" onClick={handleClick}>
          検索
        </button>
      </div>
      {data.name ? (
        <div className="text-white text-4xl">{data.name}</div>
      ) : null}
    </main>
  )
}

export default Main
