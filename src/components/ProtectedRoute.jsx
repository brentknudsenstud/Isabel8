import {Component} from 'react';
import { Route} from 'react-router-dom';
import {AuthContext} from '../index';

class ProtectedRoute extends Component {
    render () {
        const {} = this.context;
        const isAuthed = state?.isAuthed;

        if (!isAuthed) {
            return <Redirect to='/about' />
        }
        const {children, path} = this.props
        return <Route path={'path'}>
            {children}
        </Route>
    }
}

ProtectedRoute.contextType = AuthContext;