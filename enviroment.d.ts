export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_PORT: number;
      DB_USER: string;
      ENV: "test" | "dev" | "prod";
      SECRET_KEY: string;

      //Mongo Db
      MONGODB_URI: string;

      //OathClient
      OAUTH_CLIENT_ID: string;
      OAUTH_CLIENT_SECRET: string;
      OAUTH_AUTHORIZATION_URL: string;
      OAUTH_TOKEN_URL: string;
      OAUTH_CALLBACK_URL: string;
    }
  }
}
