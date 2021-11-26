import {UserInformation} from '../index'
import {getInformationAboutUserFX} from '../api/getInformation.API'
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { allSettled, createEffect, fork } from 'effector';

const testFakeResponse = {
    data: [
        '10', '!!', 'hello'
    ]
}

describe('Информация по пользователю загружается и отображается верно', () => {

    test("До окончания ассинхронного запроса висит загрузка", async () => {
        render(<UserInformation id={'1'} />) 
        expect(screen.getByTestId('loadID')).toBeInTheDocument()
    })
    test("После окончания ассинхронного запроса появляются данные", async () => {
        let scope = fork({
            handlers: new Map([
              [getInformationAboutUserFX, async() => {
                  console.log('here')
                  return testFakeResponse.data
              }]
            ])
          })
        render(<UserInformation id={'1'} />)
        await allSettled(getInformationAboutUserFX, {
            scope,
            params: {
                url: 'test',
                id: '1'
            }
          }) 
        expect(screen.getByText('hello')).toBeInTheDocument()
    })
} )