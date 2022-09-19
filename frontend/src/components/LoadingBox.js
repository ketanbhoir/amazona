import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox() {
  // showing a spinner icon if not show loading txt
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
