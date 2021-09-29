import React from 'react';
import { Htag, Button } from '../components';
export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="ghost" arrow="right">
        button
      </Button>
    </>
  );
}
