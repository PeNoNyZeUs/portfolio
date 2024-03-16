import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment'
import imgprofile from './assets/profile.png'
import axios from 'axios';


const endpoint = 'https://sheetdb.io/api/v1/rk81b6yuz48vu'

const App = () => {
  const [hide, setHide] = useState(false)

  const [data, setData] = useState([])

  const callApi = async () => {
    const d = await axios.get(endpoint).then((response) => {
      console.log('response', response)
      const data = response.data
      setData(data)
      return data
    })
  }

     
  useEffect( () => {
    callApi()
  },[])

  return (
    <>
     <main id="main">
      <div className="leftport">
        <ImageProfile image={imgprofile}/>
        <Title title="Pisit Watchararattanavalee (Fluke)">
          <p>ตำแหน่ง : นักศึกษา</p>
        </Title>

        <Title title="Contact">
          <p>วันเกิด : {moment("2003/04/17").format("DD MMM YYYY")}</p>
          <p style={{display: hide ? 'none': 'block'}}>
            Tel : +66813076077
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : flule9224@gmail.com</p>
          <p>Github : https://github.com/PeNoNyZeUs</p>
        </Title>

        <Title title="Education">
          <p>ปริญญาตรี สาขาโทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัทรสวนสุนันทา</p>
        </Title>
      </div>
      <div className="rightport">
        <Title title="Profile">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem quasi corporis delectus dolorum laudantium id. Consectetur dignissimos sapiente dolore aperiam minima eaque praesentium, molestiae provident magni blanditiis earum similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem quasi corporis delectus dolorum laudantium id. Consectetur dignissimos sapiente dolore aperiam minima eaque praesentium, molestiae provident magni blanditiis earum similique!
         </p>
        </Title>
        
        <Title title="Work Experience">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem quasi corporis delectus dolorum laudantium id. Consectetur dignissimos sapiente dolore aperiam minima eaque praesentium, molestiae provident magni blanditiis earum similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem quasi corporis delectus dolorum laudantium id. Consectetur dignissimos sapiente dolore aperiam minima eaque praesentium, molestiae provident magni blanditiis earum similique!
         </p>
        </Title>

        <Title title="Skills">
          <p>skill1 : skill</p>
          <p>skill2 : skill</p>
          <p>skill3 : skill</p>
          <p>skill4 : skill</p>
        </Title>
        
        <Title title="เพื่อนในชั้นเรียน ">
        <div>
          {data.map((record) => <div key ={record.code}>{record.code}{record.name}</div>)}
        </div>
        </Title>

      </div>
     </main>
    </>
  )
  }

export default App
