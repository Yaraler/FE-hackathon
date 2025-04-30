import { registerAs } from "@nestjs/config";

export default registerAs('open-router', () => ({
  token: process.env.TOKEN
}))

