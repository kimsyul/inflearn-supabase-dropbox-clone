'use client';

import { Input } from '*/components/ui/input';
import { Label } from '*/components/ui/label';

export default function SearchInput({ searchInput, setSearchInput }) {
  return (
    <Input
      placeholder="Search Images"
      id="search"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
