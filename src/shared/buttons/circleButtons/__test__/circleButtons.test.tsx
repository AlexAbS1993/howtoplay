import {CircleButton} from '../index'
import { CircleButtonType } from '../ui/CircleButton'
import {Event} from 'effector'
import { render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import userEvent from '@testing-library/user-event'

const fakeProps:CircleButtonType = {
    clickHandler: jest.fn() as unknown as Event<void>,
    icon: 's',
    disabled: false
}

describe('Кнопка работает корректно', () => {
    test("Кнопка отображается и работает корректно", () => {
        render(<CircleButton {...fakeProps}/>)
        expect(screen.getByTestId('circlebutton')).toBeInTheDocument()
    })
    test("Кнопка совершает вызов функции, когда нажата", () => {
        let fakeFunc = jest.fn() as unknown as Event<void>
        render(<CircleButton icon={fakeProps.icon} disabled={fakeProps.disabled} clickHandler={fakeFunc}/>)
        userEvent.click(screen.getByTestId('circlebutton'))
        expect(fakeFunc).toBeCalledTimes(1)
    })
})

