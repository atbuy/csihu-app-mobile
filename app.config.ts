import "dotenv/config";

export interface AppConfig {
  API_BASE_URL: string;
}

export default {
  extra: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
};
