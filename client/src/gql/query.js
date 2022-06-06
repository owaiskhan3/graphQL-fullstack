import { gql } from '@apollo/client';

export const TRACKS = gql`
  query ExampleQuery {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`;
