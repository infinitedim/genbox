export default function Card(props) {
  return (
    <ul>
      <li>{props.nama}</li>
      <li>{props.umur}</li>
      <li>{props.hobi}</li>
    </ul>
  );
}
