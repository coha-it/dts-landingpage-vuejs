<template lang="pug">
.navbar-container.bg-light
  nav.navbar.navbar-expand-lg.navbar-light(data-sticky='top')
    .container
      a.navbar-brand.navbar-brand-dynamic-color.fade-page(href='/')
        img(alt='Jumpstart' src='@/assets/img/custom/logos/logo.svg' Xdata-inject-svg style='width: 206px;')
      .d-flex.align-items-center.order-lg-3
        button.btn.btn-primary.ml-lg-4.mr-3.mr-md-4.mr-lg-0.d-none.d-sm-block.order-lg-3(onclick='coha_click_contact_form()')| {{ $t('request_btn_1') }}
        button.navbar-toggler(aria-expanded='false' aria-label='Toggle navigation' data-target='.navbar-collapse' data-toggle='collapse' type='button')
          img.navbar-toggler-open.icon.icon-sm(alt='Navbar Toggler Open Icon' data-inject-svg='' src="@/assets/img/icons/interface/icon-menu.svg")
          img.navbar-toggler-close.icon.icon-sm(alt='Navbar Toggler Close Icon' data-inject-svg='' src="@/assets/img/icons/interface/icon-x.svg")
      #navigation-menu.collapse.navbar-collapse.order-3.order-lg-2.justify-content-lg-end
        ul.navbar-nav.my-3.my-lg-0
          li.nav-item
            router-link.nav-link.nav-item(aria-haspopup='true' data-toggle='dropdown-grid' to='/' role='button')
              | {{ $t('nav_homepage') }}
          li.nav-item
            .dropdown
              a.dropdown-toggle.nav-link.nav-item.arrow-bottom(aria-expanded='false' aria-haspopup='true' data-toggle='dropdown-grid' href='#' role='button')
                | {{ $t('nav_app') }}
              .row.dropdown-menu
                .col-auto(data-dropdown-content='')
                  .dropdown-grid-menu
                    a.dropdown-item.fade-page(href='https://app.dreamteam-survey.de/auth') Login
                    a.dropdown-item.fade-page.disabled(href='#')
                      | {{ $t('nav_ios') }}
                      .badge.badge-pill.badge-secondary(style='font-size: .75em;float: right; margin-left: 10px;')| {{ $t('badge_soon')
                    a.dropdown-item.fade-page.disabled(href='#')
                      | {{ $t('nav_android') }}
                      .badge.badge-pill.badge-secondary(style='font-size: .75em;float: right; margin-left: 10px;')| {{ $t('badge_soon')
          //- li.nav-item
          //-   .dropdown
          //-     a.dropdown-toggle.nav-link.nav-item.arrow-bottom(aria-expanded='false' aria-haspopup='true' data-toggle='dropdown-grid' href='#' role='button') Support
          //-     .row.dropdown-menu
          //-       .col-auto(data-dropdown-content='')
          //-         .dropdown-grid-menu
          //-           a.dropdown-item(href='documentation/index.html' target='_blank') Documentation
          //-           a.dropdown-item(href='documentation/changelog.html' target='_blank') Changelog
          //-           a.dropdown-item(href='https://mediumrare.ticksy.com/' target='_blank') Get Help
</template>
