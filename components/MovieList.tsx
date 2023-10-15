import React from 'react';

import { MovieInterface } from '@/types';
import MovieCard from '@/components/MovieCard';
import { isEmpty } from 'lodash';
import Link from 'next/link';

interface MovieListProps {
  data: MovieInterface[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title  }) => {
  if (isEmpty(data) && title=="your list" ) {
    return (
    <div className='mt-28 text-green-100 text-2xl text-center'>No lessons added yet you can click at the plus sighn on any <Link href="/lessons" className='text-slate-600 underline '>lesson</Link> to add it to your list</div>
    
    )
  }
  else if (isEmpty(data)) {
    return null
  }
  
  
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className=" mt-10  text-green-200 text-md md:text-xl lg:text-4xl font-semibold  ml-8 border-b border-l  border-1 rounded-md w-fit px-5 border-green-200">{title}</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 ">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
