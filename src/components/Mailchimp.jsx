import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from "./Newsletter";

function Mailchimp() {
  const postUrl = `${import.meta.env.VITE_MAILCHIMP_URL}?u=${
    import.meta.env.VITE_MAILCHIMP_U
  }&id=${import.meta.env.VITE_MAILCHIMP_ID}`;
  return (
      // <h1>OA</h1>
      // {/* <MailchimpSubscribe
      //   url={postUrl}
        
      // /> */}
      <MailchimpSubscribe
        url={postUrl}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <Newsletter
              status={status}
              message={message}
              onValidated={formData => subscribe( formData)}
            />
          )
        }}
      />
  );
}
export default Mailchimp;
