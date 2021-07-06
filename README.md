# pishock-ts
Dead simple TypeScript framework for interacting with the Pishock API.

# Installation
`TBD`

# Usage Example
```
const auth: Auth = {
  username: "puppy73",
  apiKey: "5c678926-d19e-4f86-42ad-21f5a76126db",
  code: "17519CD8GAP",
  name: "TG_Bot_Script"
}

await API.shock(auth, 5, 50)
await API.vibrate(auth, 3, 27)
await API.beep(auth, 2)
```
