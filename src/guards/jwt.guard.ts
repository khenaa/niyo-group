import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    // check that the Authorization header is set
    const authorizationToken = request.headers.authorization;
    if (!authorizationToken) {
      throw new BadRequestException(
        'Header does not contain authorization token',
      );
    }

    // validates the word bearer is in the token
    if (!authorizationToken.toLowerCase().startsWith('bearer ')) {
      throw new BadRequestException(
        "Invalid Token. The token should begin with 'Bearer ' ",
      );
    }

    // extract token by removing bearer
    const token = authorizationToken?.split(' ')[1];

    console.log(request.headers);
    console.log(token);

    if (!token) {
      throw new UnauthorizedException('No token provided');
    }

    try {
      // decode token
      const decoded = verify(token, process.env.JWT_SECRET);

      // confirm that decodedToken has required keys
      if (!decoded || typeof decoded !== 'object' || !('id' in decoded)) {
        throw new JsonWebTokenError('Invalid token payload');
      }
      // attach decoded user information to request object
      request.user = decoded;
      return true; // Access granted
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new UnauthorizedException('Token has expired');
      } else if (error instanceof JsonWebTokenError) {
        throw new UnauthorizedException('Invalid token');
      } else {
        throw new UnauthorizedException('Failed to authenticate token');
      }
    }
  }
}
