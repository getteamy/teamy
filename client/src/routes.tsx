import { BrowserRouter as Router, Route } from 'react-router-dom'

import Auth from './views/Auth'

const Routes = () => (
    <Router>
        <Route path='/auth' component={Auth}/>
    </Router>
)