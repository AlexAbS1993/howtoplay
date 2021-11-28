import { render, screen, waitFor } from '@testing-library/react'
import {UserInformationWithChangableLogin} from '../index'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


const fakeData = [
    {
        title: 'Имя',
        value: "Alex"
    },
    {
        title: 'Сообщений на форуме',
        value: "12"
    },
    {
        title: 'Знаток игр',
        value: "4"
    }
]
const fakeChangable = ['Имя']

describe('Модуль UserChangedInformation позволяет изменить имя пользователя', () => {
    let i = "0"
    let page
    beforeEach(async () => {
        page = await render(<UserInformationWithChangableLogin id={i} data={fakeData} changable={fakeChangable} />)
    })
    afterEach(() => {
        page = null
    })
    test("Отрисовывается компонент с инпутами", () => {
        expect(screen.getByText(/знаток/i)).toBeInTheDocument()
    })
    test("Отображается текст в инпутах при вводе", () => {
        let button:HTMLButtonElement = screen.getByTestId('confirmButton') as HTMLButtonElement
        userEvent.click(button)
        expect(button.disabled).toBe(true)
    })
    test("Отображается введённый текст", () => {
        let input:HTMLInputElement = screen.getByTestId("input_Имя") as HTMLInputElement
        expect(input).toBeInTheDocument()
        userEvent.type(input, 'AbS')
        expect(input.value).toBe("AlexAbS")
    })
    test("Все инпуты становятся недоступны при отправке данных", () => {
        let button:HTMLButtonElement = screen.getByTestId('confirmButton') as HTMLButtonElement
        let input:HTMLInputElement = screen.getByTestId("input_Имя") as HTMLInputElement
        userEvent.click(button)
         expect(input.disabled).toBe(true)
    })
})