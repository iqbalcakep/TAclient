import React from 'react'
import Dashboard from '../layout/Dashboard'
import Signin from '../layout/Signin'
import Authenticate from '../../components/utils/requiredAuth'
import Admin from '../../components/utils/requiredAdmin'
import Data from '../layout/Data'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
import {Switch,Route,withRouter} from 'react-router-dom'
import Pemetakan from './Pemetakan'
import pemasaran from './Pemasaran'
import '../../css/slider.css'

const MyRoute = (props) => {
     console.log(props.location)
  return (
    <TransitionGroup >
            <CSSTransition key={props.location.key} timeout={1000} unmountOnExit classNames="fade">
            <Switch key={props.location.pathname} >
                <Route exact path="/" component={Authenticate(Dashboard)}/>
                <Route path='/signin' component={Signin}/>
                <Route path="/pemetakan" component={Authenticate(Pemetakan)}/>
                <Route path="/pemasaran" component={Authenticate(pemasaran)}/>
                <Route path="/data" component={Authenticate(Admin(Data))}/>
            </Switch>
            </CSSTransition>
    </TransitionGroup>
    
  )
}

export default withRouter(MyRoute)
