import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Products from './Components/Products';

function App() {
  return (
    <>
    <ToastContainer />
    <Header />
    <main className="py-3">
     <Container>
        <Products/>
      </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
