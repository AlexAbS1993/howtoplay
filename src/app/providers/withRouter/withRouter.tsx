import { FC } from "react"
import {BrowserRouter as Router} from 'react-router-dom'

type withRouterType = (Component: FC) => FC
export const withRouter: withRouterType = (Component) => {
    return () => (
        <>
            <Router>
               <Component />
            </Router>
        </>
    )
}