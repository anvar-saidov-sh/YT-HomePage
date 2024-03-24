
import './App.css'
import CategoryPills from './components/CategoryPills'
import { categories } from './data/home'
import PageHeader from './layouts/PageHeader'


function App() {

  return (
    <>
      <div className='max-h-screen flex flex-col'>
        <PageHeader />
        <div className='grid grid-cols-auto-[auto, 1fr] flex-grow-1 overflow-auto'>
          <div className='sticky top-0 bg-white z-10 pb-4'>
            <div>Sidebar</div>
            <CategoryPills categories={categories}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
