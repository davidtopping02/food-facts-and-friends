import { useEffect } from "react";
import "./Facebook.css";

declare global {
  interface Window {
    FB: any;
  }
}

const FacebookPage = () => {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <h4>Our Latest Updates</h4>
      <div
        className="fb-page mt-2"
        data-href="https://www.facebook.com/foodfactsfriends"
        data-tabs="timeline"
        data-width="800"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </>
  );
};

export default FacebookPage;
