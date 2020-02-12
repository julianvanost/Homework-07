module.exports = `<html lang="en-us">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${name}</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <style>body {background-color: #ecfdff;}navWidth {width: 100%;}* {font-family: 'Quicksand', sans-serif;font-size: 24px;}a {font-family: 'Quicksand', sans-serif;}p {font-family: 'Quicksand', sans-serif;font-size: 24px;font-weight: normal;}h1 {font-family: 'Ubuntu', sans-serif;font-weight: bolder;font-stretch: ultra-expanded;font-size: 32px;text-align: center;margin: 20px;margin-bottom: 20px;}nav {font-family: 'Ubuntu', sans-serif;font-weight: bold;}svg {height: 60;width: 60;}largerLinks {font-size: larger;margin-left: 20px;}card-text {font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}card-title {font-family: 'Ubuntu', sans-serif;font-weight: bold;font-size: 24px;}col-md-8 {webkit-box-flex: 0;ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;}row {webkit-box-flex: 0;ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;}bg-dark {background-color: #004065!important;}navbar-dark .navbar-nav .nav-link {color: #d2d2d2!important;}navbar-dark .navbar-brand {font-size: 1.25rem !important;font-weight: 700!important;color: #ffffff !important;font-family: 'Segoe UI',Tahoma,Geneva,Verdana,sans-serif!important;}</style>
  </head>
  <body>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <span class="navbar-brand mb-1 h1">${name}</span>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="page-header">
          <h1>Portfolio</h1>
        </div>
        <div class="row">
          <div class="col-md-3">
            <img src="${image}" alt="Profile Image" class="img-thumbnail">
          </div>
          <div class="col-md-9">
            <p class="">
              <svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1"
                width="32" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg><a class="largerLinks" target="_blank" href='${link}'>My Github Page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
`
}