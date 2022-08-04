import { useState } from 'react'

const fetchData = async (text: string) => {
  const response = await fetch(`/api/weather/?text=${text}`)
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
          className="border text-4xl rounded p-2 text-center"
          type="text"
          value={place}
          placeholder="場所を入力"
          onChange={handleChangePlace}
        />
        <button
          className="text-4xl text-black ml-4 bg-blue-500 h-14 w-28 rounded"
          onClick={handleClick}
        >
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
