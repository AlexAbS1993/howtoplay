import { KeyDotValue } from "../index";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

const testData = {
    value: '10 часов',
    title: 'Всего времени на сайте'
}

describe("Верное отображение KeyDotValue", () => {
    
    test("Текстовый фрагмент есть на странице", () => {
        let page = render(<KeyDotValue {...testData}/>)
        expect(page.getByText('10 часов')).toBeInTheDocument()
    })
    test("Текстовые спаны имеют верные классы", () => {
        let page = render(<KeyDotValue {...testData}/>)
        let spanTitle = page.getByTestId('span_key')
        let spanValue = page.getByTestId('span_value')
        expect(spanValue).toHaveClass('keyvalueparagraph_value')
        expect(spanTitle).toHaveClass('keyvalueparagraph_key')
    })
})