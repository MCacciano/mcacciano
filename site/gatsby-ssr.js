const React = require('react')
const { HelmetProvider } = require('react-helmet-async')

exports.wrapRootElement = ({ element }) => {
  return <HelmetProvider>{element}</HelmetProvider>
}
