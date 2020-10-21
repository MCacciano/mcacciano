import Meta from '../components/Meta/Meta';

export default function Home() {
  return (
    <div>
      <Meta />

      <main className='m-4'>
        <h1 className='flex justify-center text-3xl'>Magick Digital</h1>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  return { props: {} };
};
