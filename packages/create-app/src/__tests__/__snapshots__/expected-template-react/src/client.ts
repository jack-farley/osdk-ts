import { FoundryClient, PublicClientAuth } from "@fake/sdk";

/**
 * Initialize the client to interact with the Ontology SDK
 */
const client = new FoundryClient({
  url: import.meta.env.VITE_FOUNDRY_API_URL!,
  auth: new PublicClientAuth({
    clientId: import.meta.env.VITE_FOUNDRY_CLIENT_ID!,
    url: import.meta.env.VITE_FOUNDRY_API_URL!,
    redirectUrl: import.meta.env.VITE_FOUNDRY_REDIRECT_URL!,
  }),
});

export default client;
