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
        <Title title="About Me">
          <p>Currently studying for a 2nd year bachelor's degree at Suan Sunandha Rajabhat University. Faculty of Information Technology Have experience in practicing designing with Adobe Illustrator and are interested in studying more UX and UI design in order to increase a variety of skills and effectively apply knowledge to the position of UX/UI Designer.
         </p>
        </Title>
        
        <Title title="Work Experience">
          <p class="text-yellow bold">Senior Project</p>
          <p>Enhancing Computer Equipment Procurement through the Integration of 3D Computer Hardware Models with Online Platform</p>
          <p class="text-yellow bold">Intern Shift</p>
          <p>Smart Shift Solution - UX UI Designer</p>
         
        </Title>

        <Title title="Skills">
          <p>English : Advance</p>
          <p>Adobe illustrator : basic</p>
          <p>Figma : intermediate</p>
          <p>Canva : intermediate</p>
          <p>HTML : basic</p>
          <p>CSS : basic</p>
        </Title>
        


      </div>
     </main>
    </>
  )
  }

export default App
