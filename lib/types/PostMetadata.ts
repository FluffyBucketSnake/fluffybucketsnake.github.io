export type PostMetadata = {
  slug: string;
  url: string;
  title: string;
  description: string;
  date: Date;
  previous?: string;
  next?: string;
};
