import Head from '../components/layout/head/HeadElement';

export default function Home() {
  return (
    <>
      <Head title="My app" description="My app is cool" keywords="My app" />
      <main className="py-10">
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
