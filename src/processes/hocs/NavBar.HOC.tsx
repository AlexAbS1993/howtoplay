import { FC } from "react";
import { NavBarWidget } from "../../widgets/NavBar";

export const NavBarWrapper = (Component: FC) => {
    return (props?: any) => {
        return (
            <>
            <NavBarWidget />
            <Component />
            </>
        )
    }
}