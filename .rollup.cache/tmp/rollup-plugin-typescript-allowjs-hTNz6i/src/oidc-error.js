'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, Loader2, ShieldOff, WifiOff, } from "lucide-react";
function Shell({ name, picture, children }) {
    return (_jsx("div", { className: "fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-hyperfluid-light-teal/5 p-4 z-50", children: _jsxs("div", { className: "w-full max-w-sm", children: [_jsxs("div", { className: "flex items-center justify-center gap-3 mb-8", children: [_jsx("img", { src: picture, alt: name, className: "h-10 w-10" }), _jsx("div", { className: "flex items-baseline gap-2", children: _jsx("span", { className: "text-2xl font-bold text-hyperfluid-dark-teal", children: name }) })] }), children] }) }));
}
export function OidcLoading({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsx(Card, { className: "soft-shadow", children: _jsxs(CardContent, { className: "pt-8 pb-8 flex flex-col items-center gap-4", children: [_jsx(Loader2, { className: "h-8 w-8 animate-spin text-hyperfluid-light-teal" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Loading..." })] }) }) }));
}
export function OidcAuthenticating({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsx(Card, { className: "soft-shadow", children: _jsxs(CardContent, { className: "pt-8 pb-8 flex flex-col items-center gap-4", children: [_jsx(Loader2, { className: "h-8 w-8 animate-spin text-hyperfluid-light-teal" }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium", children: "Signing you in" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Redirecting to your identity provider..." })] })] }) }) }));
}
export function OidcCallbackSuccess({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsx(Card, { className: "soft-shadow", children: _jsxs(CardContent, { className: "pt-8 pb-8 flex flex-col items-center gap-4", children: [_jsx(CheckCircle2, { className: "h-8 w-8 text-emerald-500" }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium", children: "Authenticated" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Preparing your dashboard..." })] })] }) }) }));
}
export function OidcAuthenticatingError({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsxs(Card, { className: "soft-shadow border-destructive/20", children: [_jsxs(CardContent, { className: "pt-8 pb-4 flex flex-col items-center gap-4", children: [_jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium", children: "Authentication failed" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "We couldn't verify your identity. Please try again." })] })] }), _jsx(CardFooter, { className: "justify-center pb-8", children: _jsx(Button, { size: "sm", onClick: () => (globalThis.location.href = "/"), className: "bg-hyperfluid-light-teal hover:bg-hyperfluid-medium-teal", children: "Retry" }) })] }) }));
}
export function OidcSessionLost({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsxs(Card, { className: "soft-shadow border-amber-200", children: [_jsxs(CardContent, { className: "pt-8 pb-4 flex flex-col items-center gap-4", children: [_jsx(WifiOff, { className: "h-8 w-8 text-amber-500" }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium", children: "Session expired" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Your session has ended. Sign in again to continue." })] })] }), _jsx(CardFooter, { className: "justify-center pb-8", children: _jsx(Button, { size: "sm", onClick: () => globalThis.location.reload(), className: "bg-hyperfluid-light-teal hover:bg-hyperfluid-medium-teal", children: "Sign in" }) })] }) }));
}
export function OidcServiceWorkerNotSupported({ name, picture }) {
    return (_jsx(Shell, { name: name, picture: picture, children: _jsxs(Card, { className: "soft-shadow border-destructive/20", children: [_jsxs(CardContent, { className: "pt-8 pb-4 flex flex-col items-center gap-4", children: [_jsx(ShieldOff, { className: "h-8 w-8 text-destructive" }), _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium", children: "Browser not supported" }), _jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Your browser doesn't support the features required for secure authentication. Please use a modern browser." })] })] }), _jsx(CardFooter, { className: "justify-center pb-8", children: _jsx(Button, { size: "sm", variant: "outline", onClick: () => globalThis.location.reload(), children: "Retry" }) })] }) }));
}
//# sourceMappingURL=oidc-props.js.map