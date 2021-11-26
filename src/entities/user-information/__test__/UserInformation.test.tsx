import {UserInformation} from '../index'
import {getInformationAboutUserFX} from '../api/getInformation.API'
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'

const testFakeResponse = {
    data: [
        '10', '!!', 'hello'
    ]
}

describe('Информация по пользователю загружается и отображается верно', () => {
    beforeAll(() => {
        let newFn = jest.fn().mockImplementation(async () => {
            return testFakeResponse.data
        })
    })
    beforeEach(() => {
        render(<UserInformation id={'1'} />)    
    })
    test("До окончания ассинхронного запроса висит загрузка", async () => {
        expect(screen.getByTestId('loadID')).toBeInTheDocument()
    })
    test("После окончания ассинхронного запроса появляются данные", async () => {
        await waitFor(() => {
            expect(screen.getByText('hello')).toBeInTheDocument()
        }, {
            timeout: 500
        })
    })
} )