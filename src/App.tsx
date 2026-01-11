
import { Routes,Route } from 'react-router-dom'
import WriteBlog from './pages/WriteBlog'
export default ()=> (
 <Routes>
  <Route path="/" element={<div className="p-6">Home</div>} />
  <Route path="/write" element={<WriteBlog/>} />
 </Routes>
)
