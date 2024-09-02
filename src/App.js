import './App.css';
import Body from './component/Body';
import Head from './component/Head';
import WatchPage from './component/WatchPage';
import store from './Utils/store';
import {Provider} from 'react-redux'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainContainer from './component/MainContainer';
function App() {

  const appRouter = createBrowserRouter(
    [{
    path:'/',
    element:<Body/> , 
    children:[
      {
        path:'/' , 
        element : <MainContainer/>
      }, 
      {
        path:'watch',
        element:<WatchPage/>
      }
    ]
  }
]
)
  return (
    <Provider store={store}>
      <div>
      <Head/>
      <RouterProvider router={appRouter}>
      <Body/>
      </RouterProvider>
    </div>
    </Provider>
    
  );
}

export default App;
