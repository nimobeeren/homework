export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type File = {
  __typename?: 'File';
  title?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  files: Array<File>;
};
