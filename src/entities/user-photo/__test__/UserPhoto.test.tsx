import { render } from '@testing-library/react';
import "@testing-library/jest-dom"
import { UserPhoto } from "../index";
import images from '../../../shared/images/index'

const testData = {
    alt: "Фотография",
    photo: images.avatar1
}

describe('Верное отображение userPhoto', () => {
    test("Есть на странице", () => {
        let page = render(<UserPhoto {...testData}/>)
        expect(page.getByTestId('userphoto')).toBeInTheDocument()
    })
    test("Имеет соответствующие классы", () => {
        let page = render(<UserPhoto {...testData}/>)
        expect(page.getByTestId('userphoto')).toHaveClass('userphoto')
    })
})