import React from "react";
import { useNavigate } from "react-router-dom";

function CorsError() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-2xl m-10 text-center">Oops!</div>
      <h3 className="text-2xl mx-10 ">Error Notice :</h3>
      <div className="text-xl  m-10 ">
        It seems the application encountered an issue due to a restriction
        related to cross-origin resource sharing (CORS).
        <p className="text-xl my-4">
          This application relies on a real-time API from a food delivery
          service, and CORS policies enforced by browsers may block the
          requests.
        </p>
        <p className="text-xl my-4">
          1.To resolve this issue: Please install the "Allow CORS" browser
          extension.
        </p>{" "}
        <div className="text-xl my-4">
          2.Once installed, enable the extension, retry
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="w-25 rounded-lg bg-slate-600 text-white p-1 m-1"
          >
            ↻ Retry
          </button>
        </div>
      </div>
      <button
        className="w-30 border p-3 rounded-lg bg-slate-700 text-white align-middle flex m-auto"
        onClick={() =>
          window.open(
            "https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en",
            "_blank"
          )
        }
      >
        Download Extension
      </button>
    </div>
  );
}

export default CorsError;
