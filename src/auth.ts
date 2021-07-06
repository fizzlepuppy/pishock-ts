/**
 * An object encapsulating the values needed to communicate with the PiShock API.
 * @param username  Username you use to log into PiShock.com. It can be found in the Account section of the website.
 * @param apiKey    API Key generated on PiShock.com. It can be found in the Account section of the website.
 * @param code      The Sharecode for the device generated on PiShock.com.
 * @param name      The name of what sent the commands. This will showup in the PiShock logs on the website.
 */
export interface Auth {
  username: string;
  apiKey: string;
  code: string;
  name: string;
}
