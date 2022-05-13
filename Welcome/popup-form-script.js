<!--[if lte IE 8]>
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
<![endif]-->
<script>
  (function() {
    var addForm = function() {
      window.hbspt.forms.create({
        region: "na1",
	      portalId: "19897870",
	      formId: "8ca9b219-cdbf-4f42-86ee-025b2b356601",
        target: '.FieldsElement--customHTML .customHtml .custom-hubspot-form-{{id}}',
  
            onFormSubmit($form, ctx){
  
                om{{id}}.Listeners.convert();
  
   
  
                                  // Show Success view on submission
  
                                  // Remove if you prefer to close the campaign on submission
  
                om{{id}}.changeView('success');
  
   
  
                                  // Close campaign on submission
  
                                  // Remove if you prefer to show the Success view on submission
  
                                  om{{id}}.startClose();
  
            },

            onFormReady($form) {

              var pagePath = window.location.pathname;
              var preferredLanguage = document.getElementsByName('newsletter___preferred_language')[0];
              
              if (pagePath.indexOf('/fr/') !== -1) {
                preferredLanguage.value = 'French';
              } else if (pagePath.indexOf('/de/') !== -1) {
                preferredLanguage.value = 'German';
              } else if (pagePath.indexOf('/es/') !== -1) {
                preferredLanguage.value = 'Spanish';
              } else if (pagePath.indexOf('/it/') !== -1) {
                preferredLanguage.value = 'Italian';
              } else if (pagePath.indexOf('/ro/') !== -1) {
                preferredLanguage.value = 'Romanian';
              } else if (pagePath.indexOf('/bg/') !== -1) {
                preferredLanguage.value = 'Bulgarian';
              } else {
                preferredLanguage.value = 'English';
              }

            }
  
        });
  
    };
  
   
  
    if ( window.hbspt ) {
  
        return addForm();
  
    }
   
  
    // Inject the Hubspot script.
  
    var script = document.createElement('script')
  
    script.src = "//js.hsforms.net/forms/v2.js"
  
    script.async = true
  
    script.onload = addForm;
  
    (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(script);
  
  })();
</script>
<div class="custom-hubspot-form-{{id}} js-form-loaded"></div>