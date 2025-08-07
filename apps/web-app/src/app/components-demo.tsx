import { Button, Card, Input } from '@mycompany/shared-ui';
import { useState } from 'react';

export default function ComponentsDemo() {
  const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Shared UI Components Demo</h1>
      
      {/* Buttons Demo */}
      <Card title="Button Components" variant="bordered" padding="large">
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="primary" size="small">Small Primary</Button>
          <Button variant="primary" size="medium">Medium Primary</Button>
          <Button variant="primary" size="large">Large Primary</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
        </div>
        
        <Button 
          variant="primary" 
          onClick={() => alert('Button clicked!')}
        >
          Click Me!
        </Button>
      </Card>

      {/* Inputs Demo */}
      <div style={{ marginTop: '2rem' }}>
        <Card title="Input Components" variant="elevated" padding="large">
          <div style={{ display: 'grid', gap: '1rem', maxWidth: '400px' }}>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={email && !email.includes('@') ? 'Please enter a valid email' : undefined}
            />
            
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              size="large"
            />
            
            <Input
              label="Disabled Input"
              value="This is disabled"
              disabled
            />
          </div>
        </Card>
      </div>

      {/* Cards Demo */}
      <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <Card title="Default Card" padding="medium">
          <p>This is a default card with medium padding.</p>
        </Card>
        
        <Card title="Bordered Card" variant="bordered" padding="large">
          <p>This is a bordered card with large padding.</p>
        </Card>
        
        <Card 
          title="Elevated Card" 
          variant="elevated"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <Button variant="secondary" size="small">Cancel</Button>
              <Button variant="primary" size="small">Save</Button>
            </div>
          }
        >
          <p>This is an elevated card with a footer containing buttons.</p>
        </Card>
      </div>
    </div>
  );
}
