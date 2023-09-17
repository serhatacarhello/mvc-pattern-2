import { useEffect, useState } from 'react'
import ListView from './ListView'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3030'
export default function ListController() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get('/posts')
      .then((res) => {
        console.log('res', res.data)
        setData(res.data)
      })
      .catch((err) => console.log('err', err))
  }, [])
  return <ListView posts={data} />
}
