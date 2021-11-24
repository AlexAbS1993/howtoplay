import React, { FC } from "react"

type withStrictModeType = (Component: FC) => FC
export const withStrictMode: withStrictModeType = (Component: FC) => {
    return () => (
        <>
            <React.StrictMode>
               <Component />
            </React.StrictMode>
        </>
    )
}