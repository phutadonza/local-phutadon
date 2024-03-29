import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

function B() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () =>{
    await fetch("/api/url/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ url })
      })
        .then((res) => res.json())
        .then((result) => {
          setLoading(true);
          setShortUrl(result.shorturl);
        })
        .catch((err) => alert(err));
    };
  }
export default B;
