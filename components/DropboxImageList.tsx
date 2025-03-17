'use client';

import { useQuery } from '@tanstack/react-query';
import DropboxImage from './DropboxImage';
import { searchFiles } from 'actions/storageActions';
import { Loader } from 'lucide-react';

export default function DropboxImageList({ searchInput }) {
  const searchImagesQuery = useQuery({
    queryKey: ['images', searchInput],
    queryFn: () => searchFiles(searchInput),
  });

  return (
    <section className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-2">
      {searchImagesQuery.isLoading && <Loader />}
      {searchImagesQuery.data && searchImagesQuery.data.map((image) => <DropboxImage key={image.id} image={image} />)}
    </section>
  );
}
