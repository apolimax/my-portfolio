import { request, gql } from "graphql-request";

export async function getPosts() {
  const query = gql`
    {
      user(username: "apolimax") {
        publication {
          posts(page: 0) {
            title
            brief
            slug
            _id
          }
        }
      }
    }
  `;

  const {
    user: { publication: posts },
  } = await request("https://api.hashnode.com/", query);
  return posts;
}
