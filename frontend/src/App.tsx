import { useEffect, useState } from "react"
import background from "./assets/Background.svg"
import logo from "./assets/MAIT_LOGO_FULL.png"
import { Button } from "./components/ui/button"
import axios from "axios"
import { NoticesGrid } from "./components/Grid"
import { SkeletonGrid } from "./components/Skeleton"

interface Notice {
  title: string;
  link: string;
}

function App() {
  const [loading,setLoading] = useState(true);
  const [notices,setNotices] = useState<Notice[]>([])

  useEffect(()=>{
    async function getData(){
      setLoading(true);
      const response = await axios.get("http://localhost:3000/app/fetch-notices");
      setNotices(response.data.notices);
      console.log(response.data.notices);

      setLoading(false);
    }
    getData()
  },[])

  return(
    <div className="bg-black h-screen text-white overflow-hidden">
      
      <div className="fixed top-0 z-40 left-0 right-0 flex items-center px-10 bg-black">
        <div className="flex-2">
          <img src={logo} className="h-25 "></img>
        </div>
        <Button onClick={()=>{
          window.location.reload()
        }} className="hover:cursor-pointer">Refresh Notices</Button>
      </div>
      <div className="relative">
        <div>
          <img src={background} alt="enable to load background"></img>
          
        </div>
        <div className="flex z-50 absolute top-30  left-0 right-0 flex-col justify-center items-center text-center">


          <div className="font-black text-4xl">
            WHERE NEWS FINDS YOU.
          </div>
          <div className="my-4 opacity-90">
            Instant access to every latest notice,<br></br> only for the MAIT community.
          </div>
          
          <div>
            {loading ? <SkeletonGrid></SkeletonGrid> : <NoticesGrid temp={notices}></NoticesGrid>}
          </div>
        </div>

      </div>
    </div>

  )
}

export default App
