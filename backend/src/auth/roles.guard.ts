import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';

/**
 * Custom decorator to specify required roles for a route
 * Usage: @Roles(Role.ADMIN)
 */
import { SetMetadata } from '@nestjs/common';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);

/**
 * Roles Guard
 * This guard checks if the authenticated user has the required role(s)
 * Must be used AFTER JwtAuthGuard (since it needs request.user)
 * Flow:
 * 1. Reads required roles from route metadata (set by @Roles decorator)
 * 2. Compares user's role with required roles
 * 3. Allows access if user has matching role, denies otherwise
 * Usage: @UseGuards(JwtAuthGuard, RolesGuard) @Roles(Role.ADMIN)
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get required roles from route decorator metadata
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(), // Method level
      context.getClass(), // Class level
    ]);

    // If no roles specified, allow access (route is not protected by roles)
    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // Get user from request (attached by JwtAuthGuard)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const request = context.switchToHttp().getRequest();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const user = request.user;

    // Check if user has any of the required roles
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const hasRole = requiredRoles.some((role) => user.role === role);

    if (!hasRole) {
      throw new ForbiddenException(
        `Access denied. Required role(s): ${requiredRoles.join(', ')}`,
      );
    }

    return true;
  }
}
