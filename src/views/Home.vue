<template lang="pug">
.home
  section.bg-light.o-hidden.pt-5.pb-0
    .container
        .row.align-items-center.justify-content-between
          .col-lg-7.d-flex.flex-column.text-center.text-lg-left.mb-5.mb-lg-0(data-aos='fade-right')
              .pr-xl-5
                h1.display-4
                    span(style='hyphens: auto;') {{ $t('mab_title') }}
                    br
                    mark
                      vue-typed-js(
                        :strings="$t('three_strings').split(', ')"
                        :loop='true'
                        :type-speed='90'
                      )
                        span.typing
                      span(
                          data-typed-text
                          data-loop='true'
                          data-type-speed='90'
                          :data-strings="$t('three_strings')"
                      )
                p.lead {{ $t('mab_subtext') }}
                .mt-4.mt-lg-5
                    form(data-form-email novalidate action="/contact" method='POST')
                      |@include('components.parts.token')
                      .d-flex.flex-column.flex-sm-row.form-group
                          input.email-input.form-control.form-control-lg.mr-sm-2.mb-2.mb-sm-0.h-100(name='email' :placeholder="$t('email')" type='email' required='')
                          button.btn.btn-lg.btn-primary.flex-shrink-0.btn-loading(type='submit' data-loading-text='Sending')
                            // Icon for loading animation
                            svg.icon.bg-white(width='24px' height='24px' viewbox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink')
                                title Icon For Loading
                                g(stroke='none' stroke-width='1' fill='none' fill-rule='evenodd')
                                  g
                                      polygon(points='0 0 24 0 24 24 0 24' opacity='0')
                                  path(d='M12,4 L12,6 C8.6862915,6 6,8.6862915 6,12 C6,15.3137085 8.6862915,18 12,18 C15.3137085,18 18,15.3137085 18,12 C18,10.9603196 17.7360885,9.96126435 17.2402578,9.07513926 L18.9856052,8.09853149 C19.6473536,9.28117708 20,10.6161442 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z' fill='#000000' fill-rule='nonzero' transform='translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) ')
                            span {{ $t('request_btn_1') }}
                      Recaptcha
                      .d-none.alert.alert-success.w-100(role='alert' data-success-message='')
                          | Thanks, a member of our team will be in touch shortly.
                      .d-none.alert.alert-danger.w-100(role='alert' data-error-message='')
                          | Please fill all fields correctly.
                    template(v-if="!production")
                      .alert.rounded-lg.bg-secondary.d-inline-flex.align-items-center
                        .badge.badge-pill.badge-success Beta
                        .mx-3 {{ $t('launch_at') }}
                            |&nbsp;
                            span.font-weight-bold 01.09.21
          .col
              .row.justify-content-center(data-jarallax-element='-50')
                .coha_shadow.coha_rounded.col-10.col-sm-8.col-md-7.col-lg-9.col-xl-9(data-aos='zoom-in' data-aos-delay='250')
                    img.img-fluid(data-src="https://dreamteam-survey.s3.eu-central-1.amazonaws.com/landingpage/images/stock_2.png" alt='Screenshot')
    .w-50.h-50.bottom.right.position-absolute(data-aos='zoom-in' data-aos-delay='500')
        .blob.h-100.w-100.bottom.right.bg-warning.opacity-90
    .divider.divider-bottom.bg-primary-3.mt-5

  section.bg-primary-3.text-white
    .container

        template(v-if="production")
          .row.justify-content-center.text-center(style='margin: -2.5rem 0')
            .col-12.col-lg-7.col-md-8.mb-5.mb-lg-0
              img(
                  :data-src="asset('img/custom/logos/corporate-happiness-logo.svg')"
                  style='filter: grayscale(1) brightness(1.2);opacity: .75;width: 200px;padding: 20px;'
              )
              .px-xl-4
                | &quot;Wir unterst&uuml;tzen Menschen und Organisationen in ihrem Wunsch nach mehr Erf&uuml;llung und Erfolg. Dabei begleiten wir sie auf ihrem Weg zu ungeahntem Wachstum.
                | Unsere einzigartige Methodik, auf der Grundlage wissenschaftlicher Erkenntnisse, sichert die Freisetzung bisher unentdeckter Selbstentfaltungskr&auml;fte.&quot;
        template(v-else)
            .row.text-center
              .col-md-4.mb-5.mb-lg-0
                  img.bg-white.opacity-50.my-4(:data-src="asset('img/logos/brand/kyan.svg')" alt='Kyan company logo' data-inject-svg='')
                  .px-xl-4
                    | &ldquo;A polished product from a solid performer in the brutal and ever-changing SaaS
                    | landscape.&rdquo;
              .col-md-4.mb-5.mb-lg-0
                  img.bg-white.opacity-50.my-4(:data-src="asset('img/logos/brand/goldline.svg')" alt='Goldline company logo' data-inject-svg='')
                  .px-xl-4
                    | &ldquo;It&apos;s clear that the team at Jumpstart have been listening to their customers.&rdquo;
              .col-md-4.mb-5.mb-lg-0
                  img.bg-white.opacity-50.my-4(:data-src="asset('img/logos/brand/aven.svg')" alt='Aven company logo' data-inject-svg='')
                  .px-xl-4
                    | &ldquo;The future is looking bright for this punky young startup. One to watch for sure.&rdquo;

  section.bg-light.o-hidden.pb-0
    .container
        .row.section-title.justify-content-center.text-center
          .col-md-9.col-lg-8.col-xl-7
              h3.display-4 {{ $t('our') + ' ' }}
                mark(data-aos="highlight-text" data-aos-delay="200") {{ $t('method') }}

  section.bg-light.o-hidden.pt-0
    .container
        .row.align-items-center.justify-content-around.text-center.text-lg-left
          .col-md-9.col-lg-6.col-xl-5.order-lg-1(data-aos='fade-in')
              img.img-fluid.rounded.shadow(:data-src="asset('img/custom/survey-tablet-1k-x-1k_t.jpg')" alt='Image')
              img.position-absolute.p-0.col-4.col-xl-5.border.border-white.border-thick.rounded-circle.top.left.shadow-lg.mt-5.ml-n5.ml-lg-n3.ml-xl-n5.d-none.d-md-block(
                  :data-src="asset('img/custom/compuser-software-500x500_t.jpg')"
                  alt='Image'
                  data-jarallax-element='-24 0'
              )

          .col-md-9.col-lg-6.col-xl-5.mb-4.mb-md-5.mb-lg-0.order-lg-2(data-aos='fade-in')
              h2.h1 Online-Befragungen
              p.lead
                | Wir führen online basierte Mitarbeiterbefragungen mit unserer eigens dafür entwickelten App durch, um die Wahrnehmung der MitarbeiterInnen über ihren Arbeitsplatz, die Führungskräfte, das Teamklima sowie das Unternehmen als Ganzes einzufangen.
              .d-flex.flex-wrap.justify-content-center.justify-content-lg-start.col-lg-9.pl-0
                .mb-3.mr-4.ml-lg-0.mr-lg-4(data-aos='fade-left', data-aos-delay='100')
                    .d-flex.align-items-center
                      .rounded-circle.bg-success-alt
                          img.m-2.icon.icon-xs.bg-success(:data-src="asset('img/icons/interface/icon-check.svg')" alt='Binoculars icon', data-inject-svg='')
                      h6.mb-0.ml-3 Anonym
                .mb-3.mr-4.ml-lg-0.mr-lg-4(data-aos='fade-left', data-aos-delay='200')
                    .d-flex.align-items-center
                      .rounded-circle.bg-success-alt
                          img.m-2.icon.icon-xs.bg-success(:data-src="asset('img/icons/interface/icon-check.svg')" alt='Layouts icon', data-inject-svg='')
                      h6.mb-0.ml-3 Sicher
                .mb-3.mr-4.ml-lg-0.mr-lg-4(data-aos='fade-left', data-aos-delay='300')
                    .d-flex.align-items-center
                      .rounded-circle.bg-success-alt
                          img.m-2.icon.icon-xs.bg-success(:data-src="asset('img/icons/interface/icon-check.svg')" alt='Box icon', data-inject-svg='')
                      h6.mb-0.ml-3 Skalierbar
                .mb-3.mr-4.ml-lg-0.mr-lg-4(data-aos='fade-left', data-aos-delay='400')
                    .d-flex.align-items-center
                      .rounded-circle.bg-success-alt
                          img.m-2.icon.icon-xs.bg-success(:data-src="asset('img/icons/interface/icon-check.svg')" alt='Lightning icon', data-inject-svg='')
                      h6.mb-0.ml-3 Modern
              //- a.lead(href='#') Kontakt

  section.bg-light.o-hidden.pt-0
    .container
        .row.align-items-center.justify-content-around.text-center.text-lg-left

          .col-md-9.col-lg-6.col-xl-5.mb-4.mb-lg-0.pl-lg-5.pl-xl-0(data-aos='fade-in')
              div(data-aos='fade-in' data-aos-offset='250')
                  //- h2.h1.text-center.text-lg-left Here&apos;s how we do things differently
                  h2.h1.text-center.text-lg-left
                      | Wieso wir&nbsp;
                      mark(data-aos="highlight-text" data-aos-delay="200") anders
                      |  als Andere vorgehen
                  .d-flex.flex-wrap.justify-content-center.justify-content-lg-start
                    .my-4(data-aos='fade-left' data-aos-delay='200')
                        .d-flex
                          .mr-3.mr-md-4
                              img.icon.bg-primary(:data-src="asset('img/icons/theme/design/select.svg')" alt='Selection interface icon' data-inject-svg='')
                          div
                              h5 Analysen & Empfehlungen
                              div
                                | Sie erhalten von uns nicht nur statistische Auswertungen, sondern eine auf unseren langjährigen Erfahrungswerten gestützte Einschätzung inklusive konkreter Handlungsempfehlungen.
                    .my-4(data-aos='fade-left' data-aos-delay='100')
                        .d-flex
                          .mr-3.mr-md-4
                              img.icon.bg-primary(:data-src="asset('img/icons/theme/general/shield-check.svg')" alt='Bookmark icon' data-inject-svg='')
                          div
                              h5 Individuelle Unterstützung
                              div
                                | Wir unterstützen Sie auch dabei, die Ergebnisse transparent zu kommunizieren und einen Prozess zu starten, bei dem Maßnahmen erarbeitet, umgesetzt und nachgehalten werden. Uns ist es wichtig, dass nicht nur die Erkenntnisse gesammelt werden, sondern Ihr Unternehmen auch ins Tun kommt.
                  // a.lead(href='#' data-aos='fade-left' data-aos-delay='100') Kontakt

          .col-md-9.col-lg-5(data-aos='fade-in')
              img.img-fluid.rounded.shadow(:data-src="asset('img/custom/analytics-1_t.jpg')", alt='Image' style='transform: rotateY(-180deg)')
              img.position-absolute.p-0.col-4.col-xl-5.border.border-white.border-thick.rounded-circle.bottom.right.shadow-lg.mt-5.mr-n5.mr-lg-n3.mr-xl-n5.d-none.d-md-block(
                  :data-src="asset('img/custom/survey-stats-pen-500x500_t.jpg')"
                  alt='Image'
                  data-jarallax-element='-24 0'
                  style='margin-bottom: -70px !important'
              )

  section.o-hidden
    .container
      .row.section-title.justify-content-center.text-center
        .col-md-9.col-lg-8.col-xl-7
          h2.display-4
            | Unser&nbsp;
            mark(data-aos="highlight-text" data-aos-delay="200") Ziel
          .lead
            | Wir ermitteln für Ihr Unternehmen …

      .row
        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='100')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/general/half-heart.svg')" alt='Lightning icon' data-inject-svg='')
            h5.mt-4 Zufriedenheit
            div
              | Den Grad der Arbeitszufriedenheit - Sie gewinnen einen Einblick in das Betriebsklima und die Unternehmenskultur. 
        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='300')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/general/search.svg')" alt='Bookmark icon' data-inject-svg='')
            h5.mt-4 Hinweise
            div
              | Detaillierte Hinweise, z.B. zu den Arbeitsbedingungen oder der Arbeitsplatzgestaltung etc.
        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='500')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/design/select.svg')" alt='Selection interface icon' data-inject-svg='')
            h5.mt-4 Schwachstellen
            div
              | Schwachpunkte und Handlungschancen.

        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='100')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/general/user.svg')" alt='Bookmark icon' data-inject-svg='')
            h5.mt-4 Kommunikation
            div
              |  Wie die Kommunikation zwischen Führungskräften und Mitarbeitern optimiert werden kann.
        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='300')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/electric/fan.svg')" alt='Bookmark icon' data-inject-svg='')
            h5.mt-4 Das Maß an Verbundenheit
            div
              | mit Ihrem Unternehmen - Sie erhalten Rückschlüsse auf Ihre Arbeitgeberattraktivität.
        .col-md-4.mb-4(data-aos='fade-left', data-aos-delay='500')
          div
            img.icon.bg-primary(:data-src="asset('img/icons/theme/communication/chat-5.svg')" alt='Bookmark icon' data-inject-svg='')
            h5.mt-4 Feedback/Rückmeldung
            div
              | über Ihre personalwirtschaftlichen Maßnahmen.

    .position-absolute.w-50.h-100.top.right(data-jarallax-element='100 48')
      .blob.blob-2.w-100.h-100.top.right.bg-gradient.opacity-10

  section.bg-light.o-hidden
    .container
      .row.section-title.justify-content-center.text-center
        .col-md-9.col-lg-8.col-xl-7
          h3.display-4 Ihre&nbsp;
            mark(data-aos='highlight-text' data-aos-delay='250') Vorteile
      .container
        .row
          .col
            ul#myTab.nav.nav-pills.lead.mb-4.mb-md-5.justify-content-center(role='tablist')
              li.nav-item
                a#home-tab.nav-link.active(data-toggle='tab' href='#home' role='tab' aria-controls='home' aria-selected='true') Anonym
              li.nav-item
                a#profile-tab.nav-link(data-toggle='tab' href='#profile' role='tab' aria-controls='profile' aria-selected='false') Analytisch
              li.nav-item
                a#contact-tab.nav-link(data-toggle='tab' href='#contact' role='tab' aria-controls='contact' aria-selected='false') Individuell
            #myTabContent.tab-content
              #home.tab-pane.fade.show.active(role='tabpanel' aria-labelledby='home-tab')
                .row.align-items-center.justify-content-between.flex-lg-row-reverse
                  .col-lg-6.col-xl-5.text-center.text-lg-left.mb-4.mb-md-5.mb-lg-0
                    .pl-lg-4.pr-xl-5(data-aos='fade-right')
                      h3.h1
                        | Anonyme&nbsp;
                        mark(data-aos='highlight-text' data-aos-delay='250') Befragungen
                      p
                        | Anonyme, webbasierte Mitarbeiterbefragungen stellen ein sehr effizientes Instrument dar, um eine ehrliche Meinung der Mitarbeiter über den Arbeitsplatz, Vorgesetzten, Teamklima sowie das Unternehmen als Ganzes zu erfahren.
                      template(v-if="!production")
                          .mt-4
                            .media.rounded.align-items-center.pl-3.pr-3.pr-md-4.py-2.d-inline-flex.text-left.shadow-sm.bg-white
                              img.avatar.avatar-sm.flex-shrink-0.mr-3(:data-src="asset('img/avatars/male-4.jpg')" alt='Harvey Derwent avatar image')
                              .text-dark.mb-0 &ldquo;We are working at almost twice the capacity&rdquo;
                  .col-lg-6.col-xl-7(data-aos='fade-left')
                      img.img-fluid(
                          :data-src="asset('img/custom/anonym-laptop_t.jpg')"
                          alt='Image'
                          data-jarallax-element='-12 0'
                      )
                      .position-absolute.p-0.col-4.col-xl-5.top.left.mt-5.mr-n5.mr-lg-n3.mr-xl-n5.d-md-block(style='margin-top: -10% !important')
                          img.shadow-lg(
                              :data-src="asset('img/custom/anonym-smartphone_t.png')"
                              alt='Image'
                              data-jarallax-element='-24 0'
                              style='width: 70%'
                          )
                      //-   img.img-fluid.rounded.shadow.border(:data-src="asset('img/custom/anonym-app_t.jpg')" alt='Screenshot')
              #profile.tab-pane.fade(role='tabpanel' aria-labelledby='profile-tab')
                .row.align-items-center.justify-content-around
                  .col-lg-6.col-xl-5.text-center.text-lg-left.mb-4.mb-md-5.mb-lg-0
                    .pr-lg-4.pr-xl-5(data-aos='fade-right')
                      h3.h1 Qualitative&nbsp;
                        mark(data-aos='highlight-text' data-aos-delay='250') Analysen
                      p
                        | Im Rahmen unserer anonymen Mitarbeiterbefragung werden von uns quantitative und qualitative Aussagen von Mitarbeitern Ihres Unternehmens erhoben und analysiert.
                      template(v-if="!production")
                          .mt-4
                            .media.rounded.align-items-center.pl-3.pr-3.pr-md-4.py-2.d-inline-flex.text-left.shadow-sm.bg-white
                              img.avatar.avatar-sm.flex-shrink-0.mr-3(:data-src="asset('img/avatars/male-1.jpg')" alt='Harvey Derwent avatar image')
                              .text-dark.mb-0 &ldquo;Jumpstart increases productivity.&rdquo;
                  .col-lg-6.col-xl-7(data-aos='fade-left')
                      //-   img.img-fluid.rounded.shadow.border(:data-src="asset('img/desktop-app/desktop-app-1.jpg')" alt='Screenshot')
                      img.rotate_in(
                          data-jarallax-element='-24 0'
                          :data-src="asset('img/custom/svgs/pichart-shadow.svg')"
                          style="max-width: 350px;     max-height: 50vw;"
                      )
                      img.scale_up.position-absolute.bottom.left(
                          data-jarallax-element='-48 0'
                          :data-src="asset('img/custom/svgs/charts-shadow.svg')"
                          style="max-width: 450px; margin: 0px 0px -6% 38%"
                      )
              #contact.tab-pane.fade(role='tabpanel' aria-labelledby='contact-tab')
                .row.align-items-center.justify-content-around
                  .col-lg-6.col-xl-5.text-center.text-lg-left.mb-4.mb-md-5.mb-lg-0
                    .pr-lg-4.pr-xl-5(data-aos='fade-right')
                      h3.h1
                        | Individueller Fragebogen, individuelle&nbsp;
                        mark(data-aos='highlight-text' data-aos-delay='250') Ergebnisse
                        | .
                      p
                        | Wir passen unseren bewährten Fragebogen gerne nach Ihren Wünschen an, führen die Befragung für Sie als unabhängiger Dienstleister durch, besprechen mit Ihnen die Ergebnisse und geben Ihnen konkrete Handlungsempfehlungen sowohl für die Kommunikation der Ergebnisse als auch für die zu ergreifenden Maßnahmen zur Optimierung.
                      template(v-if="!production")
                          .mt-4
                            .media.rounded.align-items-center.pl-3.pr-3.pr-md-4.py-2.d-inline-flex.text-left.shadow-sm.bg-white
                              img.avatar.avatar-sm.flex-shrink-0.mr-3(:data-src="asset('img/avatars/female-4.jpg')" alt='Ashley Mance avatar image')
                              .text-dark.mb-0 &ldquo;Jumpstart is a dream come true.&rdquo;
                  .col-lg-6.col-xl-7(data-aos='fade-left')
                    img.img-fluid.rounded.shadow.border.fade_left(:data-src="asset('img/custom/edit-surveys_t.jpg')" alt='Screenshot')

  .divider.divider-top.bg-light.transform-flip-x

  section
    .container
      .row.section-title.justify-content-center.text-center
        .col-md-9.col-lg-8.col-xl-7
          h2.display-4 Der&nbsp;
            mark(data-aos="highlight-text" data-aos-delay="200") Ablauf
          .lead
            | Beispielhaftes Muster für eine Befragung zur Mitarbeiterzufriedenheit
      .row.align-items-center.justify-content-around
        .col-md-9.col-lg-5(data-aos='fade-in')
          img.img-fluid.rounded.shadow(:data-src="asset('img/custom/step-by-step_t.jpg')" alt='Image')
          img.position-absolute.p-0.col-4.col-xl-5.border.border-white.border-thick.top.left.shadow-lg.mt-5.ml-n5.ml-lg-n3.ml-xl-n5.d-none.d-md-block(
              :data-src="asset('img/custom/step-by-step-zoom_t.jpg')" alt='Image' data-jarallax-element='-20 0'
              style='border-radius: 10%;'
          )
        .col-md-9.col-lg-7.col-xl-6.mt-4.mt-md-5.mt-lg-0
          ol.list-unstyled.p-0
            li.d-flex.align-items-start.my-4.my-md-5
              .rounded-circle.p-3.p-sm-4.d-flex.align-items-center.justify-content-center.bg-success
                .position-absolute.text-white.h5.mb-0 1
              .ml-3.ml-md-4
                h4.mb-0 Schritt 1:
                h5.text-reset Fragenkatalog
                p Sie erhalten von uns im Vorfeld einen Fragenkatalog, der sich in vielen unserer Projekte bewährt hat. Selbstverständlich diskutieren wir mit Ihnen gemeinsam, inwieweit wir die Fragen für Ihr Unternehmen abändern oder ergänzen.
                a(href='#') {{ $t('request_offer_now') }}
            li.d-flex.align-items-start.my-4.my-md-5
              .rounded-circle.p-3.p-sm-4.d-flex.align-items-center.justify-content-center.bg-success
                .position-absolute.text-white.h5.mb-0 2
              .ml-3.ml-md-4
                h4.mb-0 Schritt 2:
                h5.text-reset Erstellung der Umfrage & Zugänge
                p Um den Aufwand für Sie so gering wie möglich zu halten, richten wir für Sie Ihre Onlinebefragung in unseren Systemen ein.
                p Anschließend erhalten Sie für Ihre Mitarbeiter einen Web-Link und Zugangsdaten (auf Wunsch können hier auch Abteilungs- oder Filialkennungen vergeben werden).
                p Damit Ihre Mitarbeiter auch sicher sein können, dass niemand weiß, wer welchen Login und welches Passwort erhalten hat, empfiehlt es sich, dass Sie im Rahmen einer Mitarbeiterzusammenkunft die Zugänge verdeckt aus einer „Lostrommel“ ziehen lassen. 
                p Die Mitarbeiter haben nun eine Frist von z.B. 3 Wochen, um an der Befragung teilzunehmen.
            li.d-flex.align-items-start.my-4.my-md-5
              .rounded-circle.p-3.p-sm-4.d-flex.align-items-center.justify-content-center.bg-success
                .position-absolute.text-white.h5.mb-0 3
              .ml-3.ml-md-4
                h4.mb-0 Schritt 3:
                h5.text-reset Auswertung der Ergebnisse
                p
                  | Damit Sie den maximalen Nutzen und Transparenz über Ihre Ergebnisse haben, erstellen wir eine individuelle graphische Auswertung der gesammelten Antworten sowie eine Auflistung der abgegebenen verbalen Antworten. Darüber hinaus analysieren wir Ihre Ergebnisse und stellen für Sie eine unabhängige Handlungsempfehlung aus Expertensicht zusammen - maßgeschneidert für Ihr Unternehmen. Selbstverständlich sprechen wir unsere Analyse persönlich mit Ihnen durch und klären Ihre offenen Fragen.

  .divider.divider-bottom.bg-primary-3.mt-5

  section.bg-primary-3.text-white
    .container
      .row.section-title.justify-content-center.text-center
        .col-md-9.col-lg-8.col-xl-8
          h3.display-4 Weitere Anwendungsfelder
      .row.justify-content-center(data-aos='fade-right')
        .col.d-flex.flex-wrap.justify-content-center
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/navigation/double-check.svg')" alt='Binoculars icon' data-inject-svg='')
              h5.mb-0 Evaluierung der Mitarbeiterzufriedenheit
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/design/select.svg')" alt='Layouts icon' data-inject-svg='')
              h5.mb-0 Back-to-the office Befragung
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/shopping/box-2.svg')" alt='Box icon' data-inject-svg='')
              h5.mb-0 Fusionen
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/navigation/route.svg')" alt='Lightning icon' data-inject-svg='')
              h5.mb-0 Umstrukturierungen
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/tools/hummer.svg')" alt='Bookmark icon' data-inject-svg='')
              h5.mb-0 Produktentwicklungen
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/electric/fan.svg')" alt='Selection interface icon' data-inject-svg='')
              h5.mb-0 Nutzung von Schwarmintelligenz
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/media/equalizer.svg')" alt='Fire icon' data-inject-svg='')
              h5.mb-0 Basisdemokratische Mitarbeiterbeteiligung
          .m-2.text-dark
            .media.rounded.align-items-center.pl-3.pr-4.pl-md-4.pr-md-5.py-2.bg-white.text-dark
              img.icon.mr-3.bg-primary(:data-src="asset('img/icons/theme/general/user.svg')" alt='Sushi icon' data-inject-svg='')
              h5.mb-0 Gemeinsame Gestaltung von Entscheidungsprozessen

</template>

<script>
// @ is an alias to /src
import Recaptcha from '@/components/Recaptcha.vue'

export default {
  name: 'Home',
  components: {
    Recaptcha
  },

  computed: {
    production: function() {
      // return false
      return process.env.NODE_ENV !== 'development'
    }
  },

  methods: {
    asset: function (src) {
      return require('@/assets/'+src)
    }
  }
}
</script>
