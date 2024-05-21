<!--navbar navbar-expand-lg bg-body-tertiary-->

<nav class="navbar navbar-dark bg-dark fixed-top"> 
  <div class="container-fluid">
    <a class="navbar-brand" href="#/">IBIS-IP</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="offcanvas offcanvas-end text-bg-dark"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menü</h5>
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li class="nav-item">
            <a class="nav-link" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/devices">Devices OfflineTesting</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/live">Devices Livesystem</a>
          </li>
          
      </div>
    </div>
  </div>
</nav>

<style>
  .navbar {
    z-index: 3000; /* Stellen Sie sicher, dass dieser Wert hoch genug ist */
}

</style>





