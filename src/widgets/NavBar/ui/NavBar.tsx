import { MainNavigation } from "../../../entities/navbar"
import { NavLinkCustom } from "../../../shared/link/NavLink"
import {NavBarData} from '../model/navbar.data'

export const NavBarWidget = () => {
    return (<MainNavigation>
                {
                    NavBarData.map((e) => {
                        return <NavLinkCustom path={e.path} text={e.text} key={e.text}/>
                    })
                }
            </MainNavigation>)}