import {Container} from 'react-bootstrap'
import Layout from './layouts/Layout';
import Main from './Main/Main';
import './App.css';

function App() {
  return (
    <Layout>
      <Container className='container_style' style={{minHeight: "75vh"}}>
        <Main />
      </Container>
    </Layout>
  );
}

export default App;