import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Layout/Router';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
