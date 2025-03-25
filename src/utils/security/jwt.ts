import jwt from "jsonwebtoken";
import serverSettings from "../../core/config/settings";

class Jwt {
  public static issue(payload: any, expires: any): any {
    return jwt.sign({ payload }, serverSettings.jwtSecretKey as any, {
      expiresIn: expires as any,
    });
  }

  public static verify(token: string): any {
    return jwt.verify(token, serverSettings.jwtSecretKey as string);
  }
}

export default Jwt;
