import Header from './Components/Header'
import {Container} from 'react-bootstrap'
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header />
    <main className="py-3">
     <Container>
        <h1 className='text-center'>Welcome to Big buy</h1>
      </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
