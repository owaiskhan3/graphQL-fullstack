const resolvers = {
  Query: {
    // parent, args, context, info
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    tracksForHomeFetch: async () => {
      const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com';
      const res = await fetch(`${baseUrl}/tracks`);
      return res.json();
    },
  },
  Track: {
    // using fetch instead of dataSources
    author: async ({ authorId }, _, { dataSources }) => {
      const baseUrl = 'https://odyssey-lift-off-rest-api.herokuapp.com';
      const res = await fetch(`${baseUrl}/author/${authorId}`);
      return res.json();
    },
    // author: ({ authorId }, _, { dataSources }) => {
    //   return dataSources.trackAPI.getAuthor(authorId);
    // },
  },
};

module.exports = resolvers;
