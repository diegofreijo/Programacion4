import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export async function buscaPosts(): Promise<Post[]> {
  console.log(new Date().toLocaleString(), 'Buscando posts');

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("No pude traer los posts");
  }

  return res.json();
}