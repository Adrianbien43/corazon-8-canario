import React from 'react';
import "./Home.css";
import Body from "../../components/main-elements/body/Body";
import InfoCardList from "../../components/secondary-elements/info-card-list/InfoCardList";
import { useTranslation } from 'react-i18next';

import restaurantImage from "../../assets/restaurant.webp";
import barImage from "../../assets/bar.webp";
import barbershopImage from "../../assets/barbershop.webp";
import clothingStoreImage from "../../assets/clothingstore.webp";

export const Home = () => {
  const { t } = useTranslation();

  // Datos de las tarjetas de información
  const infoData = [
    {
      title: t("home.infoData.restaurants.title"),
      image: restaurantImage,
      subtitle: t("home.infoData.restaurants.subtitle"),
      text: t("home.infoData.restaurants.text"),
      link: "/restaurants",
    },
    {
      title: t("home.infoData.bars.title"),
      image: barImage,
      subtitle: t("home.infoData.bars.subtitle"),
      text: t("home.infoData.bars.text"),
      link: "/bars",
    },
    {
      title: t("home.infoData.barbershops.title"),
      image: barbershopImage,
      subtitle: t("home.infoData.barbershops.subtitle"),
      text: t("home.infoData.barbershops.text"),
      link: "/barberias",
    },
    {
      title: t("home.infoData.clothingStores.title"),
      image: clothingStoreImage,
      subtitle: t("home.infoData.clothingStores.subtitle"),
      text: t("home.infoData.clothingStores.text"),
      link: "/tiendas-de-ropa",
    },
  ];

  return (
    <Body>
      <div className="text-info">
        <h1>{t("home.welcomeTitle")}</h1>
        <h3>{t("home.welcomeSubtitle")}</h3>
        {/* Renderiza el texto con saltos de línea */}
        <p>
          {t("home.welcomeText")
            .split('\n')
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
      {/* Pasa los datos de las tarjetas al componente InfoCardList */}
      <InfoCardList infoData={infoData} />
    </Body>
  );
};