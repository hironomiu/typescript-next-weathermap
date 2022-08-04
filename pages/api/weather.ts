import { NextApiRequest, NextApiResponse } from 'next'
const weather = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req)
  const text = req.query.text
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${apiKey}&lang=ja&units=metric`
  )
  const json = await response.json()
  res.status(200).json(json)
}

export default weather
