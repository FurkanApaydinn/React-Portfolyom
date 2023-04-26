import React from 'react'
import logo from '../İmages/logo4.png'
import logo2 from '../İmages/logo.png'
import jslogo from '../İmages/jslogo.png'
import foto from '../İmages/FurkanApaydın.jpg'
import logogit from '../İmages/logogit.png'
import css from '../İmages/css.webp'
import About from '../components/About'
import Certificate from './Certificate'
import Contact from '../components/Contact'
import Header from '../components/header'
import { Routes, Route, Link, Navlink, BrowserRouter } from 'react-router-dom'
import '../App'
function Anasayfa() {
  return (

    <div className="App">
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#FFFAEB", fontWeight: "bold" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">

            <img className='logo' src={logo} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Home">Home</Link>
              </li>
              <li>
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>

              </li>
              <li>
                <Link className="nav-link active" aria-current="page" to="/Certificate">Certificate</Link>

              </li>

              <li>
                <Link className="nav-link active" aria-current="page" to="/Contact">Contact</Link>
              </li>
            </ul>
            <input style={{ width: "500px", backgroundColor: "#FFFAEB" }} className="form-control me-2   " type="search" placeholder='Search' />
            <button className="btn btn-outline-warning" type="submit" >Search</button>
          </div>
        </div>
      </nav>
      <div class='container mt-1 d-flex p-2 justify-content-center' >
        <article>
          <div className='mt-3 '>
            <h1 className='mb-4'>Furkan Apaydın</h1>
            <h6 className='mb-4 mb-2' style={{ fontWeight: "bold" }}>İş Analisti / Developer</h6>
            <Link to="/About" className='btn btn-outline-warning mt-2'> Daha fazla</Link>


          </div>

        </article>

        <article >
          <img src={foto} alt="Benim Fotoğrafım" className='photo' />

          <div>
            <ul className='d-flex justify-content-evenly mt-3 '>
              <li   >
                <a href="https://twitter.com/furkanapydnn/"><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg></a>
              </li>
              <li >
                <a href="https://www.instagram.com/furkanapaydiin/" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg></a>
              </li>
              <li >
                <a href="https://www.linkedin.com/in/furkanapaydin/" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg></a>
              </li>
              <li>
                <a href="https://github.com/FurkanApaydinn" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg></a>
              </li>

            </ul>
          </div>
        </article>


      </div >

      <div
        id="carouselMultiItemExample"
        class="carousel slide carousel-dark text-center mt-3"
        data-mdb-ride="carousel">
        <section style={{ backgroundColor: "#FCEEC5" }}>

          <h3 className='skills' >Skills</h3>

          <article className='d-flex  justify-content-center mt-2' style={{ height: "100px" }}>
            <h6 className='p-0'>Html / Css</h6>
            <div className='progress ms-2 mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "75%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>
            <h6 className='p-0 ms-5'>JavaScript</h6>
            <div className='progress ms-2  mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "60%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>

          </article>
          <article className='d-flex  justify-content-center' style={{ height: "100px" }}>
            <h6 className='p-0'>React js</h6>
            <div className='progress ms-2 mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "70%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>
            <h6 className='p-0 ms-5'>Bootstrap</h6>
            <div className='progress ms-2  mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "50%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>


          </article>
          <article className='d-flex  justify-content-center' style={{ height: "100px" }}>
            <h6 className='p-0'>Mssql</h6>
            <div className='progress ms-2 mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "80%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>
            <h6 className='p-0 ms-5'>PostgreSql</h6>
            <div className='progress ms-2  mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "80%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>


          </article>
          <article className='d-flex  justify-content-center' style={{ height: "100px" }}>
            <h6 className='p-0'>Soap UI</h6>
            <div className='progress ms-2 mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "70%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>
            <h6 className='p-0 ms-5'>Postman</h6>
            <div className='progress ms-2  mt-1 ' style={{ width: "25%", height: "12px" }} >
              <div className='progress-bar progress-bar-striped' role="progressbar" style={{ width: "60%", backgroundColor: "#E9B949" }} aria-valuenow="5" aria-valuemin="5" aria-valuemax="50" >


              </div>
            </div>


          </article>
          <section class="section1" style={{ backgroundColor: "#FFFAEB" }} >

            <div class="section-title" >
              <h2>Timeline</h2>
              <div class="underline"></div>
            </div>

            <div class="section-center timeline-center">

              <article class="timeline-item">
                <h4>2023 - Devam ediyor </h4>
                <h3 style={{ fontWeight: "bold" }} > VBT Yazılım A.Ş </h3>
                <h4 style={{ fontWeight: "normal" }} >Kıdemli İş Analisti</h4>
                <h5 style={{ fontWeight: "normal" }}>
                  Oyak Holding bünyesinde bulunan tüm şirketlerin kullandığı Dijitalik uygulamasının Analistliğini yapıyorum. Gelen taleplerin analizi, uçtan uca testlerini ve prod sonrası hataların çözümlenmesini sağlıyorum.
                </h5>
                <span class="number">
                  1
                </span>
              </article>

              <article class="timeline-item">
                <h4>2021-2022</h4>
                <h3 style={{ fontWeight: "bold" }} >Turgut Aydın Holding </h3>
                <h4 style={{ fontWeight: "normal" }} >İş Analisti</h4>
                <h5 style={{ fontWeight: "normal" }}>
                  İş Akışı, İş ve Süreç Geliştirme, Mobil Projeler,(JavaScript,Xml]
                  Kurumsal iş akış süreçlerini yönettiğimiz tool'da ön yüz tasarımı yaparak formların hazırlanması, onay adımlarını ve kuralları oluşturduğumuz admin panelinde JavaScript ve xml ile kod yazımı,(mağaza açılış süreci, masraf süreci, izin süreci vb., kampanya süreci, perakende süreçleri) SAP entegrasyonu yönetme,
                  Şirket stratejileri doğrultusunda süreç tasarımı projelerinde yer almak; Öncelikli, tanımlanabilir, ölçülebilir, tekrarlanabilir, kontrol edilebilir, kullanıcı odaklı ve katma değerli süreç tasarımı,
                  Kullanıcı odaklı süreç gereksinimlerini belirlemek ve buna hizmet edecek iş kurallarını tanımlamak, toplanan verilerin detaylı bir şekilde analizi (Maliyet, kalite ve kullanıcı deneyimi) ,
                  Süreç boyunca danışmanların organize edilmesi, karar ve aksiyon noktalarının belirlenmesi ve takibi, İş birimleri ile koordinasyon ve analiz desteği sağlanması. Support ekibine Prod geçişi sonrası destek verilmesi,

                </h5>
                <span class="number">
                  2
                </span>
              </article>

              <article class="timeline-item">
                <h4>2019-2022</h4>
                <h3 style={{ fontWeight: "bold" }} >Bahçeşehir Eğitim Kurumları A.Ş</h3>
                <h4 style={{ fontWeight: "normal" }} >İş Analisti</h4>
                <h5 style={{ fontWeight: "normal" }}>
                  Eğitim içeriklerinin
                  yönetildiği ve E- Öğrenme modüllerinin yer
                  aldığı Metodbox uygulaması için Kampüs
                  yöneticilerinden gelen geliştirme taleplerinin
                  analizini yapmak, mevcut ve hedeflenen iş
                  akışlarını çıkartmak(draw.io,Xmind), analiz
                  dokümanını hazırlayarak(Confluence) genel
                  merkezde yer alan yazılım ekibine aktarmak,
                  geliştirme sonrası kullanıcı testlerini
                  gerçekleştirmek ve süreci canlıya alınmasını
                  sağlamak, kullanıcı dokümanı hazırlayarak
                  Öğretmen - Öğrenci ve Veli saha eğitimlerini.
                  tamamlamak.
                </h5>
                <span class="number">
                  3
                </span>
              </article>

              <article class="timeline-item">
                <h4>2016 - 2018</h4>
                <h4 style={{ fontWeight: "bold" }} >Bahçeşehir Eğitim Kurumları A.Ş</h4>
                <h4  >Bilişim Teknolojileri Bölüm Başkanı</h4>
                <p style={{ fontWeight: "normal" }}>

                </p>
                <span class="number">
                  4
                </span>
              </article>
              <article class="timeline-item">
                <h4>2016 - 2018</h4>
                <h4 style={{ fontWeight: "bold" }} >Bil Koleji</h4>
                <h4  >Bilişim Teknolojileri Zümre Başkanı</h4>
                <p style={{ fontWeight: "normal" }}>

                </p>
                <span class="number">
                  5
                </span>
              </article>

            </div>
          </section>



        </section>

        <div class="carousel-inner py-4 " style={{ backgroundColor: "#FCEEC5" }}>
          <h3>Projeler</h3>

          <div class="carousel-item active mt-4">
            <div class="container">
              <div class="row">
                <div class="col-lg-3">
                  <div class="card">
                    <img
                      src={logo2}
                      class="card-img-top" style={{ paddingLeft: "auto", paddingRight: "auto", Width: "200px", height: "230px" }}
                      alt="Waterfall"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Axios veri çekme</h5>
                      <p class="card-text">
                        React Axios ile .api üzerinden veri çekme
                      </p>
                      <a style={{ marginTop: "20px" }} href="https://furkanapaydinn.github.io/React-Axios-vericekme/" class="btn btn-outline-warning">Tıkla</a>
                    </div>

                  </div>

                </div>
                <div class="col-lg-3">
                  <div class="card">
                    <img style={{ paddingLeft: "auto", paddingRight: "auto", Width: "30%", height: "240px" }}
                      src={jslogo}
                      class="card-img-top"
                      alt="Waterfall"
                    />
                    <div class="card-body">
                      <h5 class="card-title"> JavaScript Sayı Tahmi Oyunu</h5>
                      <p class="card-text">
                        Dom yapısı ile sayı tahmin oyunu
                      </p>
                      <a style={{ marginTop: "30px" }} href="https://furkanapaydinn.github.io/SayiTahminOyunu/" class="btn btn-outline-warning">Tıkla</a>
                    </div>

                  </div>

                </div>



                <div class="col-lg-3 d-none d-lg-block">
                  <div class="card">
                    <img
                      src={logo2}
                      class="card-img-top " style={{ paddingLeft: "auto", paddingRight: "auto", Width: "200px", height: "230px" }}
                      alt="Sunset over the Sea"
                    />
                    <div class="card-body">
                      <h5 class="card-title">React ile Arama Motoru</h5>
                      <p class="card-text">
                        Axios ile Türkiye covid verilerinin olduğu .api servisinden verileri çekerek tablo üzerinde gösterimi
                      </p>
                      <a href="https://furkanapaydinn.github.io/React-Axios-uygulama/" class="btn btn-outline-warning">Tıkla</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-lg-block">
                  <div class="card">
                    <img style={{ paddingLeft: "auto", paddingRight: "auto", Width: "30%", height: "250px" }}
                      src={jslogo}
                      class="card-img-top"
                      alt="Sunset Over the Sea"
                    />
                    <div class="card-body">
                      <h5 class="card-title">JavaScript Zar Atma oyunu</h5>
                      <p class="card-text">
                        JS ile hazırladığım ve dom yapısını kullandığım zart atma oyunu
                      </p>
                      <a href="https://furkanapaydinn.github.io/ZarAtmaOyunu/" class="btn btn-outline-warning">Tıkla</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 d-lg-block justify-content-center  " style={{ marginTop: "30px" }} >
                  <div class="card">
                    <img style={{ paddingLeft: "auto", paddingRight: "auto", Width: "40%", height: "250px" }}
                      src={css}
                      class="card-img-top mt-3"
                      alt="Sunset Over the Sea"
                    />
                    <div class="card-body">
                      <h5 class="card-title" >Açılabilir kartlıklar</h5>
                      <p class="card-text mb-3">
                        Expandig-Cards
                      </p>
                      <a href="https://furkanapaydinn.github.io/expanding-cards/" class="btn btn-outline-warning">Tıkla</a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 d-lg-block justify-content-center  " style={{ marginTop: "30px" }} >
                  <div class="card">
                    <img style={{ paddingLeft: "auto", paddingRight: "auto", Width: "40%", height: "250px" }}
                      src={logogit}
                      class="card-img-top"
                      alt="Sunset Over the Sea"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Diğer</h5>
                      <p class="card-text">
                        Diğer Projelerim ve çalışmalarım için 👇👇
                      </p>
                      <a href="https://github.com/FurkanApaydinn?tab=repositories" class="btn btn-outline-warning">Tıkla</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <footer class="footer" >
          <article >
            <p  >&copy; <span id="date"></span> Furkan Apaydın. all rights reserved</p>

            <div>
              <ul className='d-flex justify-content-center ' >
                <li style={{ marginLeft: "10px" }} >
                  <a href="https://twitter.com/furkanapydnn/"><svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ color: "#E9B949" }}>
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg></a>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <a href="https://www.instagram.com/furkanapaydiin/" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg></a>
                </li>
                <li style={{ marginRight: "10px" }}>
                  <a href="https://www.linkedin.com/in/furkanapaydin/" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg></a>
                </li>
                <li >
                  <a href="https://github.com/FurkanApaydinn" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style={{ color: "#E9B949" }} viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg></a>
                </li>

              </ul>
            </div>
          </article>

        </footer>

      </div>



    </div >






  );
}

export default Anasayfa;
