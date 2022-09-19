import Alert from 'react-bootstrap/Alert';

export default function MessageBox(props) {
  // showing a spinner icon if not show loading txt
  //   if thr variant exists set it to the variant tht was entered in props or use info as default
  // render the conten in children of alert
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
