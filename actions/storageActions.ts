'use server';

import { createServerSupabaseClient } from 'utils/supabase/server';

function handleError(error) {
  if (error) {
    console.log(error);
    throw error;
  }
}

export async function uploadFile(formData: FormData) {
  const supabase = await createServerSupabaseClient();
  const file = formData.get('file') as File;

  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    // upsert : 파일 이름이 존재하면 업데이트, 존재하지 않으면 insert
    .upload(file.name, file, { upsert: true });

  handleError(error);

  return data;
}

export async function searchFiles(search: string = '') {
  const supabase = await createServerSupabaseClient();

  const { data, error } = await supabase.storage.from(process.env.NEXT_PUBIC_STORAGE_BUCKET).list(null, { search });

  handleError(error);

  return data;
}
