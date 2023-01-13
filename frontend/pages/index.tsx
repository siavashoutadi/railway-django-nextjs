import HeadElement from '../components/layout/head/HeadElement';

export default function Home() {
  return (
    <>
      <HeadElement
        title="My app"
        description="My cool app"
        keywords="My app"
      ></HeadElement>
      <section className="py-10">
        <h1>Hello World!</h1>
      </section>
    </>
  );
}
