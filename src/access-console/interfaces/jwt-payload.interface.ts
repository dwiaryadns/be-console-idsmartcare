// src/auth/interfaces/jwt-payload.interface.ts
export interface JwtPayload {
  username: string;
  sub: number;
  email: string;
  isActive: boolean;
  role: string;
}
