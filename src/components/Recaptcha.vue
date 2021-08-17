<template lang="pug">
div(
    data-recaptcha
    :data-sitekey="GOOGLE_RECAPTCHA_KEY"
    data-size='invisible'
    data-badge='bottomleft'
)
// input(type="hidden" name="g-recaptcha-response" value="{{ env('GOOGLE_RECAPTCHA_KEY') }}")
</template>

<script>
export default {
  computed: {
    GOOGLE_RECAPTCHA_KEY: function() {
      return process.env.GOOGLE_RECAPTCHA_KEY;
    }
  }
}
</script>
