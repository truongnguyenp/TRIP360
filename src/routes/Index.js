import { Routes, Route } from 'react-router-dom'
import Booking from '../pages/Booking/Booking';
import Home from '../pages/Home/Home';
import Intro from '../pages/Intro/Intro';
import Place from '../pages/Place/place'
function Router() {
    return (<Routes>
        <Route path='/'>
            <Route index element={<Home />}/>
            <Route path= '/intro' element={<Intro />}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/place' element={<Place/>}/>
        </Route>
    </Routes>);
}

export default Router;