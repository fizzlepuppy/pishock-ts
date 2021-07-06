import { API } from "./api";
import { Auth } from "./auth";

async function start() {
  const auth: Auth = {
    username: "puppy73",
    name: "TG_Bot_Script",
    code: "17519CD8GAP",
    apiKey: "5c678926-d19e-4f86-42ad-21f5a76126db",
  };

  await API.shock(auth, 10, 50);
}

start();
