import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const HomePage = loadable(() => import('./pages/home'), {
    resolveComponent: (components) => components.HomePage,
})

const DegreePage = loadable(() => import('./pages/degree'), {
    resolveComponent: (components) => components.DegreePage,
})

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path={'/'} component={HomePage} />
                <Route exact={true} path={'/degree/:degreeName'} component={DegreePage} />
            </Switch>
        </Router>
    )
}
