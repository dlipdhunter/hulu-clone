import { NextResponse } from 'next/server';

export function middleware(req, ev) {
	const { pathname } = req.nextUrl;
	if (pathname == '/movie') {
		const url = req.nextUrl.clone();
		url.pathname = '/';
		return NextResponse.rewrite(url);
	}
	return NextResponse.next();
}
