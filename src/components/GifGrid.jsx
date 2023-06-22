import { useEffect, useState } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { DeleteCategory } from './DeleteCategory';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category, categories, onDeleteCategory }) => {

    const { images, isLoading } = useFetchGifs(category);

    // console.log({ categories })


    return (
        <>
            <div className='gifGridHeaderItem'>
                <h3>{category}</h3>

                <DeleteCategory
                    key={category}
                    category={category}
                    onDeleteCategory={onDeleteCategory}
                />
            </div>


            {/* <LoadingMessage isLoading={isLoading} /> */}
            {
                isLoading && (<h2>Cargando Gifs ...</h2>) // = If isLoading = true -> renderiza el <h2></h2>

            }

            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            // De esta forma pasamos al componente GifItem las properties de image con el operador spread.
                            {...image}
                        />
                    ))
                }
            </div>



        </>
    )
}
