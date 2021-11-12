import type { ReactNode } from 'react';
export type Thing = {
  id: number;
  name: string;
  description: string;
  cardTags?: string[];
  categories: string[];
};
