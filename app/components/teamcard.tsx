interface Props {
  name: string;
  p: string;
  img: string
}

export default function TeamCard({ name, p , img}: Props) {
  return (
    <div className="card glass w-80">
      <figure>
        <img
          src = {img}
          alt="car!"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
}
