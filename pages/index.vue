<template>
<div id="page-top">
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top bg-dark" id="mainNav">
        <div class="container"><a class="navbar-brand" href="#page-top">Wincognito</a><button data-bs-toggle="collapse" data-bs-target="#navbarResponsive" class="navbar-toggler navbar-toggler-right" type="button" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto text-uppercase">
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Über</a></li>
                    <li class="nav-item"><a class="nav-link" href="#it-guidelines">Richtlinien</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Kontakt</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead">
        <div class="container">
            <div class="intro-text">
              <div class="intro-lead-in"><span>IT-Lösungen mit Wert auf Datensicherheit</span></div>
              <div class="intro-heading text-uppercase"><span>Wie wichtig<br/>sind<br/>Ihnen<br/>Ihre Daten?</span></div><a class="btn btn-primary btn-xl text-uppercase" role="button" href="#services">Weiterlesen</a>
            </div>
        </div>
    </header>
    <services-section></services-section>
    <portfolio-section></portfolio-section>
    <about-section></about-section>
    <it-guidelines-section></it-guidelines-section>
    <contact-section clientid="Eerohwa0heihei7Lei2Pho" serverurl="https://contact.wincognito.eu/api/contactform"></contact-section>
    <footer class="bg-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-4"><span class="copyright text-light">Copyright&nbsp;© Pawel Idzikowski 2022</span></div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                        <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li class="list-inline-item"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                        <li class="list-inline-item"><a href="#privacy" data-bs-toggle="modal" data-bs-target="#privacy">Datenschutz</a></li>
                        <li class="list-inline-item"><a href="#imprint" data-bs-toggle="modal" data-bs-target="#imprint">Impressum</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      <modal-component text-center id="portfolio-erp">
        <portfolio-erp-content></portfolio-erp-content>
      </modal-component>
      <modal-component text-center id="portfolio-crm">
        <portfolio-crm-content></portfolio-crm-content>
      </modal-component> 
      <modal-component text-center id="portfolio-letter">
        <portfolio-letter-content></portfolio-letter-content>
      </modal-component> 
      <modal-component text-center id="portfolio-outlook">
        <portfolio-outlook-content></portfolio-outlook-content>
      </modal-component>                  
      <modal-component text-center id="portfolio-excel">
        <portfolio-excel-content></portfolio-excel-content>
      </modal-component>              
      <modal-component text-center id="portfolio-word">
        <portfolio-word-content></portfolio-word-content>
      </modal-component>          
      <modal-component text-center id="portfolio-data">
        <portfolio-data-content></portfolio-data-content>
      </modal-component>          
      <modal-component text-center id="portfolio-report">
        <portfolio-report-content></portfolio-report-content>
      </modal-component>      
      <modal-component text-center id="portfolio-geo">
        <portfolio-geo-content></portfolio-geo-content>
      </modal-component>    
      <modal-component class="text-modal" id="privacy">
        <privacy-content></privacy-content>
      </modal-component>
      <modal-component class="text-modal" id="imprint">
        <imprint-content></imprint-content>
      </modal-component>
</div>
  
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
header.masthead {
  background-image: url("~/assets/img/header-bg.jpg");
}

#contact {
  background-image: url("~/assets/img/map-image.png");
}
</style>
