import "./Home.css";
import Body from "../../components/main-elements/body/Body";
import InfoCardList from "../../components/secondary-elements/info-card-list/InfoCardList";

import restaurantImage from "../../assets/restaurant.webp";
import barImage from "../../assets/bar.webp";
import peluqueriaImage from "../../assets/peluqueria.webp";



const infoData = [
  {
    title: "Restaurantes",
    image: restaurantImage,
    subtitle: "Haz crecer tu negocio",
    text: "¿Quieres que tu restaurante sea reconocido en todas las islas? No esperes más, contáctame y juntos crearemos la conexión perfecta para que tu negocio llegue a más personas.",
    link: "/restaurants",
  },
  {
    title: "Bares",
    image: barImage,
    subtitle: "Atrae más clientes",
    text: "Si tienes un bar y quieres que más personas lo conozcan, podemos ayudarte a expandir tu alcance y atraer nuevos clientes.",
    link: "/bars",
  },
  {
    title: "Barberías",
    image: restaurantImage,
    subtitle: "Atrae más clientes",
    text: "¿Tienes una barbería y quieres que más personas la conozcan? ¡Podemos ayudarte! Te ofrecemos estrategias para expandir tu alcance, atraer nuevos clientes y aumentar tus reservas. No importa si estás empezando o si ya tienes tu negocio establecido, ¡juntos lograremos más!",
    link: "/barberias",
  },
  {
    title: "Tienda de Ropa",
    image: restaurantImage,
    subtitle: "Atrae más clientes",
    text: "¿Tienes una tienda de ropa y quieres que más personas visiten tu negocio? Podemos ayudarte a potenciar tu presencia online y aumentar las ventas con estrategias efectivas de marketing digital. ¡Haz que tu tienda sea el lugar al que todos quieren ir!",
    link: "/tiendas-de-ropa",
  },
];

export const Home = () => {
  return (
    <Body>
      <InfoCardList infoData={infoData} />
    </Body>
  );
};
