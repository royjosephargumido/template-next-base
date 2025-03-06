"use client";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Label,
  Switch,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/index";

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
            <Label htmlFor="functional" className="flex flex-col space-y-1">
              <span>Strictly Necessary</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies are essential in order to use the website and its
                features.
              </span>
            </Label>
            <Switch id="necessary" defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="functional" className="flex flex-col space-y-1">
              <span>Functional Cookies</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </Label>
            <Switch id="functional" />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="performance" className="flex flex-col space-y-1">
              <span>Performance Cookies</span>
              <span className="font-normal leading-snug text-muted-foreground">
                These cookies help to improve the performance of the website.
              </span>
            </Label>
            <Switch id="performance" />
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            Save preferences
          </Button>
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
}
