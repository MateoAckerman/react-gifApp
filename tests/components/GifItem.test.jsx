import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem />', () => {
    const titleInit = 'Sword Art Online';
    const urlInit = 'https://sao.dev/';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={titleInit} url={urlInit} />)
        expect(container).toMatchSnapshot();
    })
    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={titleInit} url={urlInit} />);
        screen.debug();
        // expect(screen.getByRole('img').src).toBe(urlInit);
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(urlInit);
        expect(alt).toBe(titleInit);
    })
    test('Debe mostrar el parrafo con el titulo indicado', () => {
        render(<GifItem title={titleInit} url={urlInit} />);
        expect(screen.getByText(titleInit))
    })
})