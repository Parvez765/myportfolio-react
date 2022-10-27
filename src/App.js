import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Services from './component/Services/Services';


const router = createBrowserRouter([
  {
    path: "/", element: <Main></Main>, children: [
      {
        path : "/", element: <Home></Home>
      },
      {
        path: "/service", element: <Services></Services>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
