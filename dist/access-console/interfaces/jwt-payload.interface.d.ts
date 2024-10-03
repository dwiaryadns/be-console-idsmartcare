export interface JwtPayload {
    username: string;
    sub: number;
    email: string;
    isActive: boolean;
    role: string;
}
