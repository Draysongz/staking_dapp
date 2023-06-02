
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import Nav from './Components/Nav.jsx'
import Main from './Components/Main.jsx'


export default function Home() {
  document.title='StakeSync - Staking made easy'
  return (
    <>
    <ToastContainer/>
    <Nav/>
    <Main/>
      
    </>
  )
}
