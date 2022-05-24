export default function Home() {
  return (
    <div class="container-fluid" id="home">
      <div class="row">
        <div class="col-lg-12 text-center mt-3">
          <h4>🔍The Best Way to Browse Quality AWS GitHub Repositories🔍</h4>
        </div>

        <div class="col-lg-12 text-center mt-2">
          <p>
            ⚡Built with a spreadsheet +
            <span style={{ color: "blue" }}>
              <a href=""> Polymer Search |</a>
              <a href="">
                {" "}
                Create a search and data app in seconds with Polymer beta
              </a>
            </span>
          </p>
        </div>

        <div class="col-lg-12 d-flex justify-content-center mt-2">
          <form class="form" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
        
        <div class="col-lg-12  mt-3">
        <div class="list-group-item list-group-item-dark"> Tags:</div>
        <div class="list-group-item list-group-item-light text-center border rounded-pill mt-3"> Count: 12</div>
        </div>
      </div>
    </div>
  );
}
