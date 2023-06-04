'use client';

import React from 'react'
import Image from 'next/image';

const MovieCard = (movie: any) => {
    // todo: image styling bad, container needed
    console.log('TEST', movie.movie)
  return (
    <div className='w-48 h-96 rounded-xl border-2 border-[#ffb329] flex flex-col items-center relative p-[10px]'>
        {movie.movie.i &&
            <Image
                className='min-h-[225px]'
                width={150} 
                height={50} 
                src={movie.movie.i.imageUrl} 
                alt=''
        />}
        <div className='glowing-text text-center'>
            <p>{movie.movie.l}</p>
            <p>{movie.movie.s}</p>
        </div>
    </div>
  )
}

export default MovieCard