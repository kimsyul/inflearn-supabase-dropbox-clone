'use client';

import DropboxImageList from 'components/DropboxImageList';
import FileDragDropZone from 'components/FileDragDropZone';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { useState } from 'react';

export default function UI() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className="w-full p-2 flex flex-col gap-4">
      <Logo />
      <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
      <FileDragDropZone />
      <DropboxImageList searchInput={searchInput} />
    </main>
  );
}
