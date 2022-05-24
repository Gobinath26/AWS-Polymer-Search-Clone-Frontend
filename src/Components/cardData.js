import { Card } from "./card";
//import { API } from "../global";
import "../App.css";
import { useEffect, useState } from "react";

export default function CardData() {
  const [cardData, setCardData] = useState([]);

  //const API = "https://61f277d42219930017f505f5.mockapi.io";
  //const API = "http://localhost:4000";//node(local)
  const API = "https://aws-polymer-search-backend.herokuapp.com";

  const getProduct = () => {
    fetch(`${API}/cards`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setCardData(response));
  };

  useEffect(() => getProduct(), []);

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div className="cardData-list">
            {cardData.map(
              ({
                cardTitle,
                cardSubtitle,
                fullname,
                owner,
                stars,
                language,
                forks,
                id,
              }) => (
                <Card
                  key={id}
                  cardTitle={cardTitle}
                  cardSubtitle={cardSubtitle}
                  fullname={fullname}
                  owner={owner}
                  stars={stars}
                  language={language}
                  forks={forks}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
