
import { Route, Routes } from 'react-router-dom'
import ExpandigImages from '../Pages/ExpandigImages'

const RoutesComponents = () => {
  return (
    <Routes>
        <Route path='/expanding-images' element={<ExpandigImages/>} />
    </Routes>
  )
}

export default RoutesComponents
