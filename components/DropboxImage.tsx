'use client';

import { Button } from '*/components/ui/button';
import getImageUrl from 'utils/supabase/storage';

export default function DropboxImage({ image }) {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      <div>
        <img src={getImageUrl(image.name)} className="w-full aspect-square rounded-2xl" />
      </div>
      <div>{image.name}</div>

      <div>
        <Button onClick={() => {}} variant="destructive" className="absolute top-4 right-4">
          <i className="fas fa-trash" />
        </Button>
      </div>
    </div>
  );
}
