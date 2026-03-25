import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  AlertTriangle,
  CheckCircle2,
  Loader2,
  ShieldOff,
  WifiOff,
} from "lucide-react"



interface ShellProps {
  name: string
  picture: string
  children: React.ReactNode
}

interface OidcProps {
  name: string
  picture: string
}

function Shell({ name, picture, children }: Readonly<ShellProps>) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-hyperfluid-light-teal/5 p-4 z-50">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img
            src={picture}
            alt={name}
            className="h-10 w-10"
          />
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-hyperfluid-dark-teal">
              {name}
            </span>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export function OidcLoading({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow">
        <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-hyperfluid-light-teal" />
          <p className="text-sm text-muted-foreground">Loading...</p>
        </CardContent>
      </Card>
    </Shell>
  )
}

export function OidcAuthenticating({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow">
        <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin text-hyperfluid-light-teal" />
          <div className="text-center">
            <p className="text-sm font-medium">Signing you in</p>
            <p className="text-xs text-muted-foreground mt-1">
              Redirecting to your identity provider...
            </p>
          </div>
        </CardContent>
      </Card>
    </Shell>
  )
}

export function OidcCallbackSuccess({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow">
        <CardContent className="pt-8 pb-8 flex flex-col items-center gap-4">
          <CheckCircle2 className="h-8 w-8 text-emerald-500" />
          <div className="text-center">
            <p className="text-sm font-medium">Authenticated</p>
            <p className="text-xs text-muted-foreground mt-1">
              Preparing your dashboard...
            </p>
          </div>
        </CardContent>
      </Card>
    </Shell>
  )
}

export function OidcAuthenticatingError({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow border-destructive/20">
        <CardContent className="pt-8 pb-4 flex flex-col items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <div className="text-center">
            <p className="text-sm font-medium">Authentication failed</p>
            <p className="text-xs text-muted-foreground mt-1">
              We couldn't verify your identity. Please try again.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center pb-8">
          <Button
            size="sm"
            onClick={() => (globalThis.location.href = "/")}
            className="bg-hyperfluid-light-teal text-white hover:bg-hyperfluid-medium-teal"
          >
            Retry
          </Button>
        </CardFooter>
      </Card>
    </Shell>
  )
}

export function OidcSessionLost({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow border-amber-200">
        <CardContent className="pt-8 pb-4 flex flex-col items-center gap-4">
          <WifiOff className="h-8 w-8 text-amber-500" />
          <div className="text-center">
            <p className="text-sm font-medium">Session expired</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your session has ended. Sign in again to continue.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center pb-8">
          <Button
            size="sm"
            onClick={() => globalThis.location.reload()}
            className="bg-hyperfluid-light-teal text-white hover:bg-hyperfluid-medium-teal"
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </Shell>
  )
}

export function OidcServiceWorkerNotSupported({ name, picture }: Readonly<OidcProps>) {
  return (
    <Shell name={name} picture={picture}>
      <Card className="soft-shadow border-destructive/20">
        <CardContent className="pt-8 pb-4 flex flex-col items-center gap-4">
          <ShieldOff className="h-8 w-8 text-destructive" />
          <div className="text-center">
            <p className="text-sm font-medium">Browser not supported</p>
            <p className="text-xs text-muted-foreground mt-1">
              Your browser doesn't support the features required for secure
              authentication. Please use a modern browser.
            </p>
          </div>
        </CardContent>
        <CardFooter className="justify-center pb-8">
          <Button size="sm" variant="outline" onClick={() => globalThis.location.reload()}>
            Retry
          </Button>
        </CardFooter>
      </Card>
    </Shell>
  )
}
