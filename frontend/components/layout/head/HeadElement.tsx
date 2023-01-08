import Head from 'next/head';

export interface IHeadElement {
  title: string;
  description: string;
  keywords: string;
}

const HeadElement: React.FC<IHeadElement> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="alternate icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default HeadElement;
