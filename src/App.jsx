import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import {router} from  './routers'

function App() {
  const user = {username: 'Setiawan'}
  return (
    <div className='app'>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider   >
    </div>
  )
}


export default App
