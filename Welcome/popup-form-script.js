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

              var hsButton = document.querySelector('.hs-button.primary.large');

              hsButton.style.cssText = "font-family: Lato !important;width: 100% !important;font-weight: 700 !important;font-size:22px!important; padding: 20px 12px !important;margin-top: 25px !important;";

              var hsEmailField = document.querySelector('input[type=email].hs-input');
              hsEmailField.style.cssText = "width:100% !important; border-radius:30px !important; padding:0 25px!important;background:rgba(255, 139, 0, 0.21)!important; border-color:rgba(251, 106, 58, 0.52)!important; font-size:16px!important; font-family:Lato !important;border-width:2px!important;color:rgb(107, 126, 133)!important;margin-bottom:25px!important;height:50px!important;";

              var languageFieldTitle = document.querySelectorAll('label span');
              var languageFieldTitleStyles = "font-family:Lato!important;font-size:16px!important;margin-bottom:10px!important;display:block!important;color:rgb(107, 126, 133)!important;font-weight:700;";
              languageFieldTitle[0].style.cssText = languageFieldTitleStyles;
              languageFieldTitle[1].style.cssText = languageFieldTitleStyles;

              var languageField = document.querySelector('#newsletter___preferred_language-8ca9b219-cdbf-4f42-86ee-025b2b356601');
              languageField.style.cssText = "border-radius:30px !important; padding:11px 25px 13px 25px!important;background:rgba(255, 139, 0, 0.21)!important; border-color:rgba(251, 106, 58, 0.52)!important; font-size:20xp !important; font-family:Lato !important;border-width:2px!important;color:rgb(107, 126, 133)!important;height:50px!important;font-size:16px!important;";
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