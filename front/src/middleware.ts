import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;

const withMigration: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    const authPaths = ['/forgot-password', '/login', '/register', '/reset-password'];

    if (token && authPaths.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url));
    }

    if (!token && request.nextUrl.pathname === '/account') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return next(request, _next);
  };
};

function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

export default withMigration(middleware);
