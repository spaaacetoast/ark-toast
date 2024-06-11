import { Title } from '@solidjs/meta';
import { Avatar } from '~/components/avatar';
import { Basic } from '~/components/toast';
import { BasicFixed } from '~/components/toast-fixed';

export default function Home() {
  return (
    <main>
      <Title>Welcome to Ark UI</Title>
      <h1>Welcome to Ark UI</h1>
      <Basic />
      <BasicFixed />
    </main>
  );
}
