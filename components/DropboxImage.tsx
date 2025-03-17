'use client';

import { Button } from '*/components/ui/button';

export default function DropboxImage() {
  return (
    <div className="relative w-full flex flex-col gap-2 p-4 border border-gray-100 rounded-2xl shadow-md">
      {/* Image */}
      <div>
        <img src="/images/dropbox_icon.png" className="w-full aspect-square rounded-2xl" />
      </div>
      {/* FileName */}
      <div>Dropbox</div>

      <div>
        <Button onClick={() => {}} variant="destructive" className="absolute top-4 right-4">
          <i className="fas fa-trash" />
        </Button>
      </div>
    </div>
  );
}
