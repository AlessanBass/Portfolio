'use client';
import Image from "next/image";
import { ChangeEvent, useState } from 'react';
import { InputText } from 'primereact/inputtext';


export default function Home() {
  const [value, setValue] = useState('');
  return (
    <main>
      <h1>Playground</h1>
      <InputText
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <p>{value}</p>
    </main>
  );
}
