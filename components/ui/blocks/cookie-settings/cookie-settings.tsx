'use client';

import {
  Button,
  CardContent,
  CardFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Label,
  Switch,
} from '@/components/index';

export function CookieSettings() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Cookie Settings</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cookie Settings</DialogTitle>
          <DialogDescription>
            Manage your cookie settings here.
          </DialogDescription>
        </DialogHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label className="flex flex-col space-y-1" htmlFor="functional">
              <span>Strictly Necessary</span>
              <span className="font-normal text-muted-foreground leading-snug">
                These cookies are essential in order to use the website and its
                features.
              </span>
            </Label>
            <Switch defaultChecked id="necessary" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label className="flex flex-col space-y-1" htmlFor="functional">
              <span>Functional Cookies</span>
              <span className="font-normal text-muted-foreground leading-snug">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </Label>
            <Switch id="functional" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label className="flex flex-col space-y-1" htmlFor="performance">
              <span>Performance Cookies</span>
              <span className="font-normal text-muted-foreground leading-snug">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
            <Switch id="performance" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Save preferences
          </Button>
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
}
