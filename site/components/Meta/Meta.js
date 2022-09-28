import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ title = '', description = '' }) => {
  return (
    <Head>
      <title>{title ? `${title} - ` : ''}Michael Cacciano</title>
      <meta
        name='description'
        content={`Michael Cacciano's website about Web Development ${
          description ? ` - ${description}}` : ''
        }`}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Meta;
