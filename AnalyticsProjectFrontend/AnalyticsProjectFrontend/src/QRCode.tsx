import React, { useState } from "react";

function QRCode() {
  const [url, setUrl] = useState("");

  function handleSubmit() {
    alert("ok");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Your URL : "
        />
        {/* <input type="submit" value="Generate QR Code" /> */}
      </form>
      {url && <img src={`https://quickchart.io/qr?text=${url}`} />}
    </div>
  );
}

export default QRCode;
