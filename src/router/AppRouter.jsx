import {Switch, Route, Redirect } from 'react-router-dom';
import HomeComponent from '../pages/Home/Home';
import New from '../pages/new/New';
import Bookings from '../pages/bookings/Bookings';
import InProgress from '../pages/inprogress/InProgress';
import Cancelled from '../pages/Cancelled/Cancelled';
import Cafe from '../pages/cafe/Cafe';
import Boutique from '../pages/boutique/Boutique';
import ErrorPage from '../pages/error/ErrorPage';
import AuthenticatedRoute from '../authenticatedRoute/AuthenticatedRoute';
import MusicBand from '../pages/musicBand/MusicBand';
import {useState} from 'react';

export const AppRouter = ( ) => {
    const [authToken] = useState('123456');
    return <Switch>
        <Route component={HomeComponent} path="/" exact />
        <AuthenticatedRoute component={New} path="/new" authed={authToken}/>
        <AuthenticatedRoute component={Bookings} path="/bookings" authed={authToken}/>
        <AuthenticatedRoute component={InProgress} path="/inprogress" authed={authToken}/>
        <AuthenticatedRoute component={Cancelled} path="/cancelled" authed={authToken}/>
        <AuthenticatedRoute component={Cafe} path="/cafe" authed={authToken}/>
        <AuthenticatedRoute component={Boutique} path="/boutique" authed={authToken}/>
        <AuthenticatedRoute component={MusicBand} path='/music-band'authed={authToken}/>
        <Route component={ErrorPage} path="/error" />
        <Redirect to="/error" />
    </Switch>
}