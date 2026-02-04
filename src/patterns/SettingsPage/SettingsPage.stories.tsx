import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Label } from '../../components/Label/Label';
import { FieldGroup } from '../../components/FieldGroup/FieldGroup';
import { HelperText } from '../../components/HelperText/HelperText';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../../components/Card/Card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/Tabs/Tabs';
import { Switch } from '../../components/Switch/Switch';
import { Avatar, AvatarImage, AvatarFallback } from '../../components/Avatar/Avatar';
import { Divider } from '../../components/Divider/Divider';

const meta = {
  title: 'Patterns/SettingsPage',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
Settings page pattern demonstrates a complete settings interface with tabbed navigation and organized sections.

## Pattern Components Used
- Tabs (main navigation)
- Card (section containers)
- FieldGroup (form fields)
- Label, Input (form inputs)
- Switch (toggles)
- Button (actions)
- Avatar (profile picture)
- Divider (section separation)

## Features
- Tabbed interface (Profile, Account, Security, Notifications)
- Form sections with clear grouping
- Toggle switches for boolean settings
- Profile picture upload
- Danger zone for destructive actions
- Responsive layout
- Save/Cancel actions

## Typical Sections
1. Profile (name, email, avatar)
2. Account (preferences, language, timezone)
3. Security (password, 2FA)
4. Notifications (email, push, in-app)
5. Billing (subscription, payment)
6. Team (members, roles)
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Manage your account settings and preferences.
          </p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your profile details and how others see you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      Change photo
                    </Button>
                    <p className="text-xs text-slate-500 mt-1">JPG, GIF or PNG. Max 2MB.</p>
                  </div>
                </div>

                <Divider />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldGroup
                    label={
                      <Label htmlFor="firstName" required>
                        First name
                      </Label>
                    }
                  >
                    <Input id="firstName" defaultValue="John" />
                  </FieldGroup>

                  <FieldGroup
                    label={
                      <Label htmlFor="lastName" required>
                        Last name
                      </Label>
                    }
                  >
                    <Input id="lastName" defaultValue="Doe" />
                  </FieldGroup>
                </div>

                <FieldGroup
                  label={
                    <Label htmlFor="email" required>
                      Email address
                    </Label>
                  }
                  helperText={<HelperText>This is your primary contact email.</HelperText>}
                >
                  <Input id="email" type="email" defaultValue="john@example.com" />
                </FieldGroup>

                <FieldGroup
                  label={<Label htmlFor="bio">Bio</Label>}
                  helperText={<HelperText>Brief description for your profile.</HelperText>}
                >
                  <Input id="bio" placeholder="Tell us about yourself..." />
                </FieldGroup>

                <div className="flex gap-3 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Save changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Preferences</CardTitle>
                <CardDescription>Manage your account settings and preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <FieldGroup
                  label={<Label htmlFor="language">Language</Label>}
                  helperText={<HelperText>Select your preferred language.</HelperText>}
                >
                  <Input id="language" defaultValue="English" />
                </FieldGroup>

                <FieldGroup
                  label={<Label htmlFor="timezone">Timezone</Label>}
                  helperText={<HelperText>Used for displaying dates and times.</HelperText>}
                >
                  <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
                </FieldGroup>

                <Divider />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Email notifications</Label>
                      <p className="text-sm text-slate-500">Receive email about your account activity.</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Marketing emails</Label>
                      <p className="text-sm text-slate-500">
                        Receive emails about new features and updates.
                      </p>
                    </div>
                    <Switch />
                  </div>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Save changes</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to keep your account secure.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FieldGroup
                  label={
                    <Label htmlFor="currentPassword" required>
                      Current password
                    </Label>
                  }
                >
                  <Input id="currentPassword" type="password" />
                </FieldGroup>

                <FieldGroup
                  label={
                    <Label htmlFor="newPassword" required>
                      New password
                    </Label>
                  }
                  helperText={
                    <HelperText>
                      Must be at least 8 characters with uppercase, lowercase, and numbers.
                    </HelperText>
                  }
                >
                  <Input id="newPassword" type="password" />
                </FieldGroup>

                <FieldGroup
                  label={
                    <Label htmlFor="confirmPassword" required>
                      Confirm new password
                    </Label>
                  }
                >
                  <Input id="confirmPassword" type="password" />
                </FieldGroup>

                <div className="flex gap-3 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="primary">Update password</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable 2FA</Label>
                    <p className="text-sm text-slate-500">
                      Require a verification code in addition to your password.
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-500">Danger Zone</CardTitle>
                <CardDescription>Irreversible and destructive actions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-900 rounded-lg">
                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-slate-50">Delete account</h4>
                    <p className="text-sm text-slate-500">
                      Permanently delete your account and all data.
                    </p>
                  </div>
                  <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Manage which emails you receive.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Product updates</Label>
                    <p className="text-sm text-slate-500">News about product and features.</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Weekly digest</Label>
                    <p className="text-sm text-slate-500">Summary of your activity each week.</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Team notifications</Label>
                    <p className="text-sm text-slate-500">When someone mentions you or assigns you.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Push Notifications</CardTitle>
                <CardDescription>Manage push notification preferences.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Browser notifications</Label>
                    <p className="text-sm text-slate-500">Receive notifications in your browser.</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Mobile notifications</Label>
                    <p className="text-sm text-slate-500">Receive push notifications on mobile.</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};
