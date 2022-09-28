import Navigation from '../Navigation';

const Layout = ({ reviews = [], children }) => {
  return (
    <div className='relative overflow-x-hidden min-h-screen'>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
