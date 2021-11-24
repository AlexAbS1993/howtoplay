import { FC } from "react"

type ReactCompose = (args: Function[]) => Function

export const compose: ReactCompose = (args: Function[]) => {
    if (args.length === 0){
        console.warn("В функцию compose не переданы аргументы")
        return (args: any) => {
            return null
        }
    }
    return (value: FC) => {
        return args.reduceRight((result, fn) => {
            return fn(result)
        }, value)
    }
}
