import React from "react";
import {
  gql,
  ApolloClient,
  ApolloProvider,
  useQuery as rhUseQuery,
  useMutation,
  useLazyQuery,
  InMemoryCache,
} from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import { createUploadLink } from "apollo-upload-client";
import firebase from "firebase/app";

const API_URL = process.env.REACT_APP_GRAPHQL_ADDR;

const httpLink = createUploadLink({
  uri: API_URL,
  credentials: "same-origin",
});

const authLink = setContext(async (_, { headers }) => {
  const CURRENT_TOKEN = await getAuthToken();
  return {
    headers: {
      ...headers,
      authorization: CURRENT_TOKEN ? `Bearer ${CURRENT_TOKEN}` : "",
    },
  };
});

const getAuthToken = async () => {
  try {
    return await firebase.auth().currentUser.getIdToken();
  } catch (err) {
    return null;
  }
};

const client = new ApolloClient({
  uri: API_URL,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export function useQuery(query, variables, options = {}) {
  query =
    typeof query === "string"
      ? gql`
          ${query}
        `
      : query;
  return rhUseQuery(query, { variables, ...options });
}

export function GQLProvider(props) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}

export function mutate(mutation, variables, options = {}) {
  options.mutation =
    typeof mutation === "string"
      ? gql`
          ${mutation}
        `
      : mutation;
  options.variables = variables || {};

  return client.mutate(options);
}

export function query(query, variables, options = {}) {
  options.query =
    typeof query === "string"
      ? gql`
          ${query}
        `
      : query;
  options.variables = variables || {};
  //TODO: add fetchPolicy option
  return client.query({ ...options });
}

// Download files including graphQL authorization token
export async function downloadUrl(url, filename) {
  const CURRENT_TOKEN = await getAuthToken();
  fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/pdf",
      Authorization: "Bearer " + CURRENT_TOKEN,
    }),
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
      a.click();
      a.remove(); // afterwards we remove the element again
    });
}

export { useMutation, useLazyQuery };

export default client;
