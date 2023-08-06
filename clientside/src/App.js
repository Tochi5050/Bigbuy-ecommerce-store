import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './Components/HomeScreen';

function App() {
  return (
    <>
    <ToastContainer />
    <Header />
    <main className="py-3">
     <Container>
        <HomeScreen/>
      </Container>
      </main>
      <Footer />
    </>
  );
} 

export default App;
