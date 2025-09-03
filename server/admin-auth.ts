import jwt from 'jsonwebtoken';
import type { Request, Response, NextFunction } from 'express';

// Secure admin password - will be verified server-side only
const ADMIN_PASSWORD = '12345';
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production';

export interface AdminRequest extends Request {
  admin?: boolean;
}

/**
 * Verify admin password and generate JWT token
 */
export function verifyAdminPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

/**
 * Generate JWT token for admin session
 */
export function generateAdminToken(): string {
  return jwt.sign(
    { admin: true, iat: Date.now() },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

/**
 * Verify JWT token and extract admin status
 */
export function verifyAdminToken(token: string): boolean {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return decoded.admin === true;
  } catch (error) {
    return false;
  }
}

/**
 * Express middleware to protect admin routes
 */
export function requireAdmin(req: AdminRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authentication required' });
  }

  const token = authHeader.slice(7); // Remove 'Bearer ' prefix
  
  if (!verifyAdminToken(token)) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  req.admin = true;
  next();
}