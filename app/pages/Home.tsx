'use client';

import React, { useState } from 'react'
import MovieCard from '../components/MovieCard';
import LoadingIcon from '../components/LoadingIcon';
import '../styles.css'

export default function Home() {
    const [inputValue, setInputValue] = useState<string>('');
    const [moviesResponse, setMoviesResponse] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const endpoint = 'https://imdb8.p.rapidapi.com/auto-complete?q=';
    const requestOptions: any = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    function handleInputOnchange (event: React.FormEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    async function sendRequest () {
        setIsLoading(true);

        await fetch(`${ endpoint }${ inputValue }`, requestOptions)
        .then(response => response.json())
        .then(data => {
            setMoviesResponse(data);
            setIsLoading(false);
        })
    }

  return (
    <>
    <div className='w-4/5 py-2 mt-5 rounded-lg flex flex-col justify-center items-center'>
        <div className='glowing-text text-xl font-black'>Search for movies, persons etc.</div>
        <input 
            className='glowing-text w-3/4 h-8 bg-black border-2 border-[#ffb329] rounded font-extrabold focus:outline-none pl-5'
            type='text'
            defaultValue={''} 
            value={ inputValue } 
            onChange={(event) => handleInputOnchange(event)}/>
        <button
            onClick={() => sendRequest()}
            className='w-3/4 h-8 bg-[#ffb329] rounded text-black font-extrabold mt-2'
        >
        Search
        </button>
    </div>
    { isLoading && <LoadingIcon /> }
    <div className='w-[calc(100%-50px)] p-[20px] flex flex-row justify-center items-center gap-5 flex-wrap'>
        {moviesResponse &&  moviesResponse.d.map((movie: any, index: number) => 
            <MovieCard movie={ movie } key={ index } />
        )}
    </div>
    </>
  )
}