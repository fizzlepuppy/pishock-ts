import { Auth } from "./auth";

export class API {
  /**
   * Shocks the device represented by the given `Auth` object.
   *
   * @param auth      The `Auth` object for connecting to the device.
   * @param duration  An integer representing the number of seconds to shock the wearer. Must be between 1 and 15.
   * @param intensity An integer representing the intensity of shock. Must be between 1 and 100.
   */
  static async shock(
    auth: Auth,
    duration: number,
    intensity: number
  ): Promise<string> {
    return NetworkManager.post(auth, {
      Intensity: `${intensity}`,
      Duration: `${duration}`,
      Op: "0",
    });
  }

  /**
   * Vibrates the device represented by the given `Auth` object.
   *
   * @param auth      The `Auth` object for connecting to the device.
   * @param duration  An integer representing the number of seconds to vibrate the wearer. Must be between 1 and 15.
   * @param intensity An integer representing the intensity of vibration. Must be between 1 and 100.
   */
  static async vibrate(
    auth: Auth,
    duration: number,
    intensity: number
  ): Promise<string> {
    return NetworkManager.post(auth, {
      Intensity: `${intensity}`,
      Duration: `${duration}`,
      Op: "1",
    });
  }
  /**
   * Shocks the device represented by the given `Auth` object.
   *
   * @param auth      The `Auth` object for connecting to the device.
   * @param duration  An integer representing the number of seconds to make the device beep.
   */
  static async beep(auth: Auth, duration: number): Promise<string> {
    return NetworkManager.post(auth, {
      Duration: `${duration}`,
      Op: "2",
    });
  }
}

class NetworkManager {
  static async post(
    auth: Auth,
    additionalParams?: { [id: string]: any }
  ): Promise<string> {
    const params: { [id: string]: any } = {
      Username: `${auth.username}`,
      Name: `${auth.name}`,
      Code: `${auth.code}`,
      Apikey: `${auth.apiKey}`,
    };
    const allParams = { ...params, ...additionalParams };
    return fetch('https://do.pishock.com/api/apioperate/', {
      method: 'post',
      body: JSON.stringify(allParams),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => res.text());
  }
}
