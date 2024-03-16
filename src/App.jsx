import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment'

function App() {
  const [hide, setHide] = useState(false)

  return (
    <>
     <main id="main">
      <div className="leftport">
        <ImageProfile image="/src/assets/profile.png" />
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
        </Title>
      </div>
     </main>
    </>
  )
}

export default App
