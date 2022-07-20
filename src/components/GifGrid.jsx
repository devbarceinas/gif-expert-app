import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifCard } from "./GifCard";
import { Loading } from "./Loading";

import "./GifGrid.css";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category)

  return (
    <>
      <h3 style={{textAlign: 'center'}}>{category}</h3>
      <hr style={{marginBottom: '30px'}}/>
      <Loading isLoading={isLoading}>
        Cargando...
      </Loading>
      <section className="container-grid">
        {images.length > 1 &&
          images.map((gif) => <GifCard key={gif.id} {...gif} />)}
      </section>
    </>
  );
};

export { GifGrid };
