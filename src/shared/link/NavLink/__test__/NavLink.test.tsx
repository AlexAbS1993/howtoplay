import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {NavLinkCustom} from '../index'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { FC } from 'react'
import userEvent from '@testing-library/user-event'


describe('Ссылка работает', () => {
    let NavLink: FC
    beforeEach(() => {
        NavLink =  () => {
            return (
                <BrowserRouter>
                        <NavLinkCustom path='/home' text='home'/>
                        <NavLinkCustom path='/adress' text='adress'/>
                        <NavLinkCustom path='/contacts' text='contacts'/>
                        <Routes>
                            <Route path='/home' element={<div> <p data-testid='homePage'> HomePage </p> </div>}/>
                            <Route path='/adress' element={<div> <p data-testid='aboutPage'> AboutPage </p> </div>}/>
                            <Route path='/contacts' element={<div> <p data-testid='contactsPage'> ContactsPage </p> </div>}/>
                            <Route path='/' element={<></>}/>
                        </Routes>
                </BrowserRouter>
            )
        }
    })
    test("Ссылка есть на странице", () => {
        const page = render(<NavLink />)
        expect(page.getByText('home')).toBeInTheDocument()
    })
    test("При нажатии на кнопку home открывается страница HomePage", () => {
        const page = render(<NavLink />)
        userEvent.click(page.getByText('home'))
        expect(page.getByTestId('homePage')).toBeInTheDocument()
    })
    test("При нажатии на кнопку home открывается страница AboutPage", () => {
        const page = render(<NavLink />)
        userEvent.click(page.getByText('adress'))
        expect(page.getByTestId('aboutPage')).toBeInTheDocument()
    })
    test("При нажатии NavLink меняет стиль в зависимости от статуса активности", () => {
        const page = render(<NavLink />)
        const button = page.getAllByRole('link')
        expect(button[0]).toHaveClass('navlink')
        userEvent.click(button[0])
        expect(button[0]).toHaveClass('navlink_active')
        userEvent.click(button[1])
        expect(button[0]).toHaveClass('navlink_simple')
        expect(button[1]).toHaveClass('navlink_active')
    })
})