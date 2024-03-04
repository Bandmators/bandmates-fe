import { Button, Form, Input, InputDesc, InputGroup, Label, Textarea } from 'bmates-ui';
import { useEffect, useState } from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

// import Button from '@/components/common/button';
// import Form from '@/components/common/form';
// import Input, { InputDesc, InputGroup } from '@/components/common/input';
// import Label from '@/components/common/label';
// import Textarea from '@/components/common/textarea';

const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    fetch('/aaa')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="card">
        <Button onClick={() => setCount(count => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      DATA: {JSON.stringify(data)}
      <Form redirect="testsuccess">
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="email" />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="bio" />
          <InputDesc>You can @mention other users to link to them.</InputDesc>
        </InputGroup>
        <Button type="submit">Save</Button>
      </Form>
    </DashboardLayout>
  );
};
export default Dashboard;
