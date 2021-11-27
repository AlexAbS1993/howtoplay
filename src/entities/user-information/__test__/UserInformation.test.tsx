import {UserInformation} from '../index'
import {getInformationAboutUserFX} from '../api/getInformation.API'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { allSettled, fork } from 'effector';

const testFakeResponse = {
    data: [
        '10', '!!', 'hello'
    ]
}

describe('Информация по пользователю загружается и отображается верно', () => {
    test("После окончания ассинхронного запроса появляются данные", async () => {
        render(<UserInformation id={'1'} data={testFakeResponse.data}/>)
        expect(screen.getByText('hello')).toBeInTheDocument()
    })
} )