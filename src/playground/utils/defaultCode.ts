export interface PlaygroundTemplate {
  name: string;
  label: string;
  code: string;
}

export const templates: PlaygroundTemplate[] = [
  {
    name: 'button',
    label: 'Button Variants',
    code: `function App() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <h2 className="text-2xl font-bold text-fg-primary">
        Button Variants
      </h2>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <Button isLoading>Loading...</Button>
    </div>
  );
}`,
  },
  {
    name: 'form',
    label: 'Login Form',
    code: `function App() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="name@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button className="w-full">Sign in</Button>
        <p className="text-sm text-center text-fg-muted">
          Don't have an account? Sign up
        </p>
      </CardContent>
    </Card>
  );
}`,
  },
  {
    name: 'card',
    label: 'Card Layout',
    code: `function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
          <CardDescription>Monthly overview</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-fg-primary">$45,231</p>
          <p className="text-sm text-fg-muted">+20.1% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Users</CardTitle>
          <CardDescription>Real-time count</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold text-fg-primary">2,350</p>
          <p className="text-sm text-fg-muted">+180 since last hour</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-3">
          <Button variant="primary">New Report</Button>
          <Button variant="outline">Export Data</Button>
          <Button variant="ghost">Settings</Button>
        </CardContent>
      </Card>
    </div>
  );
}`,
  },
  {
    name: 'feedback',
    label: 'Alerts & Badges',
    code: `function App() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-lg">
      <Alert variant="info">
        <AlertTitle>New update available</AlertTitle>
        <AlertDescription>
          Version 2.0 is now available with new features.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Payment successful</AlertTitle>
        <AlertDescription>
          Your payment of $99.00 has been processed.
        </AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Storage almost full</AlertTitle>
        <AlertDescription>
          You've used 90% of your available storage.
        </AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertTitle>Connection lost</AlertTitle>
        <AlertDescription>
          Please check your internet connection and try again.
        </AlertDescription>
      </Alert>
      <div className="flex gap-2 mt-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
      </div>
    </div>
  );
}`,
  },
  {
    name: 'mixed',
    label: 'Component Mix',
    code: `function App() {
  const [checked, setChecked] = React.useState(false);
  const [progress, setProgress] = React.useState(65);

  return (
    <div className="flex flex-col gap-6 p-8 max-w-md">
      <h2 className="text-2xl font-bold text-fg-primary">
        Settings
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Label>Enable notifications</Label>
          <Switch
            checked={checked}
            onCheckedChange={setChecked}
          />
        </div>

        <Divider />

        <div className="flex flex-col gap-2">
          <Label>Storage used</Label>
          <Progress value={progress} />
          <p className="text-sm text-fg-muted">{progress}% of 10GB</p>
        </div>

        <Divider />

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Display Name</Label>
          <Input id="name" defaultValue="Alejandra" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself..." />
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="primary">Save Changes</Button>
        <Button variant="outline">Cancel</Button>
      </div>
    </div>
  );
}`,
  },
];

export const defaultTemplate = templates[0];
