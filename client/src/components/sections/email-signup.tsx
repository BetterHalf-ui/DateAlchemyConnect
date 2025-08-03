import { useI18n } from "@/lib/i18n";

export default function EmailSignup() {
  const { t } = useI18n();

  return (
    <>
      {/* Inline styles for the email campaign service */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url("https://assets.mlcdn.com/fonts.css?version=1753872");
          
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

          #mlb2-29163860.ml-form-embedContainer h4,
          #mlb2-29163860.ml-form-embedContainer p,
          #mlb2-29163860.ml-form-embedContainer span,
          #mlb2-29163860.ml-form-embedContainer button {
            text-transform: none !important;
            letter-spacing: normal !important;
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper {
            background-color: #000000;
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

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper.embedPopup,
          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper.embedDefault { 
            width: 400px; 
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper.embedForm { 
            max-width: 400px; 
            width: 100%; 
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-align-center { 
            text-align: center; 
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,
          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody {
            padding: 20px 20px 0 20px;
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal {
            padding-bottom: 0;
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,
          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent {
            text-align: left;
            margin: 0 0 20px 0;
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input {
            background-color: #ffffff !important;
            color: #333333 !important;
            border-color: #000000;
            border-radius: 6px !important;
            border-style: solid !important;
            border-width: 0px !important;
            font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            font-size: 18px !important;
            height: 56px !important;
            line-height: 21px !important;
            margin-bottom: 0;
            margin-top: 0;
            margin-left: 0;
            margin-right: 0;
            padding: 10px 10px !important;
            width: 100% !important;
            box-sizing: border-box !important;
            max-width: 100% !important;
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder { 
            color: #333333; 
          }

          #mlb2-29163860.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow {
            height: auto;
            float: left;
            width: 100%;
            white-space: nowrap;
          }

          .ml-input-horizontal { 
            width: 70%; 
            float: left; 
          }

          .ml-button-horizontal { 
            width: 30%; 
            float: left; 
          }

          .ml-button-horizontal.primary button {
            background-color: #f2491b !important;
            border-color: #f2491b !important;
            border-radius: 6px !important;
            border-style: solid !important;
            border-width: 0px !important;
            color: #ffffff !important;
            cursor: pointer;
            font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            font-size: 18px !important;
            font-weight: 700;
            line-height: 21px !important;
            height: 56px !important;
            margin: 0 !important;
            padding: 10px 10px !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }

          .ml-button-horizontal.primary button:hover {
            background-color: rgba(242, 73, 27, 0.9) !important;
          }

          .ml-form-successBody {
            display: none;
          }

          .ml-form-successBody h4 {
            color: #ffffff;
            font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            font-size: 24px;
            font-weight: 400;
            margin: 0 0 10px 0;
            text-align: left;
          }

          .ml-form-successBody p {
            color: #ffffff;
            font-family: 'Open Sans', Arial, Helvetica, sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            margin: 0 0 10px 0;
            text-align: left;
          }
        `
      }} />

      <section className="py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 subtitle">The Smarter Way to Date — Straight to Your Inbox</h2>
          <p className="text-xl text-gray-300 mb-12 body-text">Join 1,000+ Smart Singles Getting Bi-Weekly Dating Tips</p>
          
          {/* Email Campaign Service Form */}
          <div id="mlb2-29163860" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-29163860">
            <div className="ml-form-align-center">
              <div className="ml-form-embedWrapper embedForm">
                <div className="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
                  <div className="ml-form-embedContent" style={{ marginBottom: '0px' }}></div>

                  <form 
                    className="ml-block-form" 
                    action="https://assets.mailerlite.com/jsonp/976785/forms/161724071625623326/subscribe" 
                    data-code="" 
                    method="post" 
                    target="_blank"
                  >
                    <div className="ml-form-formContent horozintalForm">
                      <div className="ml-form-horizontalRow">
                        <div className="ml-input-horizontal">
                          <div style={{ width: '100%' }} className="horizontal-fields">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                              <input 
                                type="email" 
                                className="form-control" 
                                data-inputmask="" 
                                name="fields[email]" 
                                placeholder="Enter your Email" 
                                autoComplete="email"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="ml-button-horizontal primary">
                          <button type="submit" className="primary">Subscribe</button>
                          <button disabled style={{ display: 'none' }} type="button" className="loading">
                            <div className="ml-form-embedSubmitLoad"></div>
                            <span className="sr-only">Loading...</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />
                  </form>
                </div>

                <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
                  <div className="ml-form-successContent">
                    <h4>Thank you!</h4>
                    <p>You have successfully joined our newsletter subscriber list.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External scripts for the email campaign service */}
      <script 
        src="https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024" 
        type="text/javascript"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function ml_webform_success_29163860() {
              var $ = ml_jQuery || jQuery;
              $('.ml-subscribe-form-29163860 .row-success').show();
              $('.ml-subscribe-form-29163860 .row-form').hide();
            }
            fetch("https://assets.mailerlite.com/jsonp/976785/forms/161724071625623326/takel");
          `
        }}
      />
    </>
  );
}