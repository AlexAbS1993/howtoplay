import { withProviders } from './providers'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" />
    </Routes>
    </>
  );
}



export default withProviders(App)