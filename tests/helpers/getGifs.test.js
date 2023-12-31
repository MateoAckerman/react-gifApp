import { render, screen } from "@testing-library/react"
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {

    test('Debe devolver un arreglo de gifs', async() => { 

        const gifs = await getGifs('SAO');
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan( 0 )
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })

     })

})