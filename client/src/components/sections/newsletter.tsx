import { useEffect } from "react";

// Extend Window interface for MailerLite
declare global {
  interface Window {
    ml_jQuery?: any;
  }
}

export default function Newsletter() {
  useEffect(() => {
    // Load MailerLite script if not already loaded
    if (!window.ml_jQuery && !document.querySelector('script[src*="webforms.min.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024';
      script.type = 'text/javascript';
      document.head.appendChild(script);
      
      // Add the takel fetch
      script.onload = () => {
        if (typeof fetch !== 'undefined') {
          fetch("https://assets.mailerlite.com/jsonp/976785/forms/161724071625623326/takel");
        }
      };
    }
  }, []);

  return (
    <section className="py-32 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 subtitle">The Smarter Way to Date — Straight to Your Inbox</h2>
        <p className="text-xl text-gray-300 mb-12 body-text">Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips</p>
        
        {/* MailerLite Embedded Form */}
        <div dangerouslySetInnerHTML={{
          __html: `
            <style type="text/css">
              @import url("https://assets.mlcdn.com/fonts.css?version=1753872");
              
              /* LOADER */
              .ml-form-embedSubmitLoad {
                display: inline-block;
                width: 20px;
                height: 20px;
              }

              .g-recaptcha {
                transform: scale(1);
                -webkit-transform: scale(1);
                transform-origin: 0 0;
                -webkit-transform-origin: 0 0;
              }

              .sr-only {
                position: absolute;
                width: 1px;
                height: 1px;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0,0,0,0);
                border: 0;
              }

              .ml-form-embedSubmitLoad:after {
                content: " ";
                display: block;
                width: 11px;
                height: 11px;
                margin: 1px;
                border-radius: 50%;
                border: 4px solid #fff;
                border-color: #ffffff #ffffff #ffffff transparent;
                animation: ml-form-embedSubmitLoad 1.2s linear infinite;
              }
              
              @keyframes ml-form-embedSubmitLoad {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              
              #mlb2-29163860.ml-form-embedContainer {
                box-sizing: border-box;
                display: table;
                margin: 0 auto;
                position: static;
                width: 100% !important;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper {
                background-color: transparent;
                border-width: 0px;
                border-color: transparent;
                border-radius: 4px;
                border-style: solid;
                box-sizing: border-box;
                display: inline-block !important;
                margin: 0;
                padding: 0;
                position: relative;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper.embedForm { 
                max-width: 500px; 
                width: 100%; 
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody {
                padding: 0;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm {
                margin: 0;
                padding: 0;
                width: 100%;
                height: auto;
                float: left;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
                height: auto;
                width: 100%;
                float: left;
                margin: 0;
                padding: 0;
                display: flex;
                align-items: stretch;
                gap: 0;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-input-horizontal {
                flex: 1;
                margin: 0;
                padding: 0;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-input-horizontal .horizontal-fields {
                width: 100%;
                margin: 0;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-fieldRow input {
                background-color: #ffffff !important;
                color: #333333 !important;
                border: none !important;
                border-radius: 6px 0 0 6px !important;
                font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                font-size: 18px !important;
                height: 56px !important;
                line-height: 21px !important;
                margin: 0;
                padding: 0 15px !important;
                width: 100% !important;
                box-sizing: border-box !important;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-button-horizontal button {
                background-color: #f2491b !important;
                border: none !important;
                border-radius: 0 6px 6px 0 !important;
                color: #ffffff !important;
                cursor: pointer;
                font-family: 'Open Sans', Arial, Helvetica, sans-serif !important;
                font-size: 18px !important;
                font-weight: 600 !important;
                height: 56px !important;
                padding: 0 24px !important;
                white-space: nowrap;
                transition: background-color 0.2s ease;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-button-horizontal button:hover {
                background-color: #e0401a !important;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-mobileButton-horizontal {
                display: none;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-successBody {
                padding: 20px;
                text-align: center;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-successBody h4 {
                color: #ffffff;
                font-size: 24px;
                margin-bottom: 10px;
              }
              
              #mlb2-29163860.ml-form-embedContainer .ml-form-successBody p {
                color: #ffffff;
                font-size: 16px;
              }
              
              @media only screen and (max-width: 500px) {
                #mlb2-29163860.ml-form-embedContainer .ml-form-horizontalRow {
                  flex-direction: column !important;
                }
                
                #mlb2-29163860.ml-form-embedContainer .ml-form-fieldRow input {
                  border-radius: 6px !important;
                  margin-bottom: 10px;
                }
                
                #mlb2-29163860.ml-form-embedContainer .ml-button-horizontal {
                  display: none !important;
                }
                
                #mlb2-29163860.ml-form-embedContainer .ml-mobileButton-horizontal {
                  display: block !important;
                  width: 100%;
                }
                
                #mlb2-29163860.ml-form-embedContainer .ml-mobileButton-horizontal button {
                  background-color: #f2491b !important;
                  border-radius: 6px !important;
                  width: 100% !important;
                  height: 56px !important;
                  font-size: 18px !important;
                  font-weight: 600 !important;
                }
              }
            </style>
            
            <div id="mlb2-29163860" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-29163860">
              <div class="ml-form-align-center">
                <div class="ml-form-embedWrapper embedForm">
                  <div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                    <div class="ml-form-embedContent" style="margin-bottom: 0px;"></div>
                    <form class="ml-block-form" action="https://assets.mailerlite.com/jsonp/976785/forms/161724071625623326/subscribe" data-code="" method="post" target="_blank">
                      <div class="ml-form-formContent horozintalForm">
                        <div class="ml-form-horizontalRow">
                          <div class="ml-input-horizontal">
                            <div style="width: 100%;" class="horizontal-fields">
                              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                                <input type="email" class="form-control" data-inputmask="" name="fields[email]" placeholder="Enter your Email" autocomplete="email">
                              </div>
                            </div>
                          </div>
                          <div class="ml-button-horizontal primary">
                            <button type="submit" class="primary">Subscribe</button>
                            <button disabled="disabled" style="display: none;" type="button" class="loading">
                              <div class="ml-form-embedSubmitLoad"></div>
                              <span class="sr-only">Loading...</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <input type="hidden" name="ml-submit" value="1">
                      <div class="ml-mobileButton-horizontal">
                        <button type="submit" class="primary">Subscribe</button>
                        <button disabled="disabled" style="display: none;" type="button" class="loading">
                          <div class="ml-form-embedSubmitLoad"></div>
                          <span class="sr-only">Loading...</span>
                        </button>
                      </div>
                      <input type="hidden" name="anticsrf" value="true">
                    </form>
                  </div>
                  <div class="ml-form-successBody row-success" style="display: none">
                    <div class="ml-form-successContent">
                      <h4>Thank you!</h4>
                      <p>You have successfully joined our newsletter subscriber list.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <script>
              function ml_webform_success_29163860() {
                var $ = ml_jQuery || jQuery;
                $('.ml-subscribe-form-29163860 .row-success').show();
                $('.ml-subscribe-form-29163860 .row-form').hide();
              }
            </script>
          `
        }} />
      </div>
    </section>
  );
}