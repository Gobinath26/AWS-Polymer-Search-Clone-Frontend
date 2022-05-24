export function Card({
  cardTitle,
  cardSubtitle,
  fullname,
  owner,
  stars,
  language,
  forks
}) {
  return (
    <div class="card" style={{ width: "24rem" }}>
      <h5 class="card-title">{cardTitle}</h5>
      <h6 class="card-subtitle">{cardSubtitle}</h6>
      <div class="card-social-media">
        <a>
          Github <i class="fa-brands fa-github"></i>
        </a>
        <a>
          Share <i class="fa-solid fa-share-nodes"></i>
        </a>
      </div>
      <hr />
      <div class="card-body">
        <div>
          <strong>Full Name</strong>
          <p style={{
              background: "skyblue",
              borderRadius: "10px",
              textAlign: "center",
            }}>{fullname}</p>
        </div>
        <div>
          <strong>Owner</strong>
          <p style={{
              background: "#6ddd6d",
              borderRadius: "10px",
              textAlign: "center",
            }}>{owner}</p>
        </div>
      </div>
      <hr />
      <div class="card-bottom">
        <div>
          <p>Stars</p>
          <p
            style={{
              background: "skyblue",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {stars}
          </p>
        </div>
        <div>
          <p>Language</p>
          <p
            style={{
              background: "pink",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {language}
          </p>
        </div>
        <div>
          <p>Forks</p>
          <p
            style={{
              background: "#6ddd6d",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            {forks}
          </p>
        </div>
      </div>
    </div>
  );
}
