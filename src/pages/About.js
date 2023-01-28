import * as React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <h1>Hello world </h1>
      <Link to="/">About</Link>
    </>
  );
}