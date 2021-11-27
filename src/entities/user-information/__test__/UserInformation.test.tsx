import {UserInformation} from '../index'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

const testFakeResponse = {
    data: [
        {
            value: 'hello',
            title: 'Greetings'
        }
    ]
}

describe('Информация по пользователю загружается и отображается верно', () => {
    test("После окончания ассинхронного запроса появляются данные", async () => {
        render(<UserInformation id={'1'} data={testFakeResponse.data}/>)
        expect(screen.getByText('hello')).toBeInTheDocument()
    })
} )