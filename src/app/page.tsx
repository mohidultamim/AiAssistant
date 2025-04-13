// src/app/page.tsx
'use client';

import {AuthForm} from '@/components/auth-form';
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider} from '@/components/ui/sidebar';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Icons} from '@/components/icons';
import {Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {useState} from 'react';
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Textarea} from '@/components/ui/textarea';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase';

export default function Home() {
  const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <AuthForm />;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <CardTitle>StudyPath AI</CardTitle>
            <CardDescription>Your AI-powered Higher Studies Assistant</CardDescription>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Icons.home className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Icons.user className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <Icons.settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Icons.plusCircle className="mr-2 h-4 w-4" />
                  <span>Add Account</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Account</DialogTitle>
                  <DialogDescription>
                    Add a new account to manage
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="Sofia Davis" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="@sofiadavis" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Save changes</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 p-4">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>
                Welcome to your StudyPath AI dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent className="pl-6">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://picsum.photos/500/500" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">Welcome, Sofia Davis!</h2>
                  <p className="text-sm text-muted-foreground">
                    Here are your personalized recommendations and support resources.
                  </p>
                </div>
              </div>
              {/* AI-Powered Recommendations and Support Information */}
              <div className="mt-6">
                <h3 className="text-md font-semibold">Recommended Countries:</h3>
                <p className="text-sm text-muted-foreground">United States, Canada, United Kingdom</p>
              </div>
              <div className="mt-4">
                <h3 className="text-md font-semibold">Recommended Universities:</h3>
                <p className="text-sm text-muted-foreground">Harvard University, University of Toronto, Oxford University</p>
              </div>
              {/* AI Study Abroad Assistant integration */}
              <div className="mt-4">
                <Sheet open={open} onOpenChange={setOpen}>
                  <SheetTrigger asChild>
                    <Button>
                      <Icons.messageSquare className="mr-2 h-4 w-4" />
                      <span>AI Assistant</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="sm:max-w-lg">
                    <SheetHeader>
                      <SheetTitle>AI Study Abroad Assistant</SheetTitle>
                      <SheetDescription>
                        Get help with your university applications, documentation, and more.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="question" className="text-right">
                          Ask a question:
                        </Label>
                        <Textarea id="question" className="col-span-3" />
                      </div>
                    </div>
                    <SheetFooter>
                      <SheetClose asChild>
                        <Button type="submit">Submit</Button>
                      </SheetClose>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarProvider>
  );
}
