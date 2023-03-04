import { BYPASS_TOKEN } from '$env/static/private';
import { nanoid } from "nanoid";

export const config = {
  isr: {
    expiration: 30,
    bypassToken: BYPASS_TOKEN,
  }
};

export const prerender = 'auto';

export async function load() {
  let uuid = nanoid();
  console.log(`Load function triggered with new UUID ${uuid}`);
  return { uuid, byPassToken: BYPASS_TOKEN };
}