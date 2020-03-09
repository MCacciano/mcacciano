export default function resolveProdUrl(document) {
  return `http://localhost:8000/preview/${document._id}`;
}
