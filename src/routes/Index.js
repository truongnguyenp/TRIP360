import { Routes, Route } from 'react-router-dom'
import Booking from '../pages/Booking/Booking';
import Home from '../pages/Home/Home';
function Router() {
    return (<Routes>
        <Route path='/'>
            <Route index element={<Home />}/>
            <Route path='/booking' element={<Booking/>}/>
        </Route>
    </Routes>);
}

export default Router;