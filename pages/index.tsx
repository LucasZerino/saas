import type { NextPage } from 'next'
import { Button } from "@material-tailwind/react";
import Link from 'next/link';
import Seo from 'components/Seo';

const Home: NextPage = () => {
  return <>
    <Seo tittle='Mezap Multi' description='Sua plataforma de montoramento e automação de whatsapp!'/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <ul>
      <li>
        <Link href='/app'>
          <Button>App</Button>
        </Link>
      </li>
      <li>
        <Link href='/Mezap'>
          <Button>Mezap</Button>
        </Link>
      </li>
    </ul>
  </>
}

export default Home
