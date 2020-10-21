import Head from 'next/head';

const Meta = ({ title = 'Michael Cacciano', children }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      {children}
    </Head>
  );
};

export default Meta;
