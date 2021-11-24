import { FC } from "react"

type ReactCompose = (args: Function[]) => Function

export const compose: ReactCompose = (args: Function[]) => {
    return (value: FC) => {
        return args.reduce((result, fn) => {
            return fn(result)
        }, value)
    }
}
