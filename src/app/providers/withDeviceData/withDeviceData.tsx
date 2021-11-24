import { FC } from "react";

export const withDeviceData = (Component: FC) => {
    return () => {
        <>
            <Component />
        </>
    }
}