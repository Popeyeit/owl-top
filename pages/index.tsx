import React, { useState } from 'react';
import { Htag, Button, Rating } from '../components';
export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Rating rating={rating} setRating={setRating} isEditable />
      <Button appearance="ghost" arrow="right">
        button
      </Button>
    </>
  );
}
