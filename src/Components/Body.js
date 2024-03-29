import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { FiRefreshCcw } from "react-icons/fi";
import baseUrl from "../baseUrl";
import { AiOutlinePicture } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { SlPicture } from "react-icons/sl";
function Body() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [qrcodeVisible, setQRCodeVisible] = useState(false);
  let [showqr, setShowqr] = useState("");
  let [qr, setQr] = useState(false);

  const handleSubmit = async () => {
    const isValidUrl = /^(http|https):\/\/.*$/.test(url);
    if (!isValidUrl) {
      alert("Please enter a valid URL starting with http:// or https://");
      return;
    }

    await fetch(baseUrl + "/api/url/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        //console.log(result.shorturl);
        setShortUrl(result.shorturl);
        setQRCodeVisible(true);
      })
      .catch((err) => alert(err));
  };

  const fetchData = async () => {
    await fetch(baseUrl + "/api/url/data")
      .then((res) => res.json())
      .then((result) => {
        //console.log(result);
        setData(result);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDelete = async (id) => {
    await fetch(baseUrl + "/api/url/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: id }),
    })
      .then(() => fetchData())
      .catch((err) => alert(err));
  };

  const handleRefresh = () => {
    fetchData();
  };

  const onOpen = (short) => {
    setShowqr(short);
    setQr(true);
  };
  const onClose = () => {
    setQr(false);
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-center">
        {qrcodeVisible && (
          <div className="card mt-5" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <QRCode value={shortUrl} className="card-img-top p-1"></QRCode>
              <div className="card-title">shorturl</div>
              <a
                href={shortUrl}
                className="card-link mt-4 mb-4"
                target="_blank"
              >
                {shortUrl}
              </a>
            </div>
          </div>
        )}
      </div>
      <form className="form-group form-group-sm d-flex justify-content-center mt-3">
        <input
          type="url"
          style={{ width: "300px" }}
          className="form-control form-control-sm me-2"
          name="url"
          value={url}
          onChange={handleChange}
          placeholder="Copy Url for short Url"
          pattern="^(http|https)://.*$"
          title="Please enter a valid URL starting with http:// or https://"
          required
        />
        <button
          className="btn btn-sm btn-outline-success me-2"
          type="button"
          onClick={handleSubmit}
        >
          Create url
        </button>
        <button
          className="btn btn-sm btn-outline-primary "
          onClick={handleRefresh}
        >
          <FiRefreshCcw />
        </button>
      </form>

      {data.length > 0 && (
        <div className="container mt-5">
          <table className="table mt-3 table-striped table-bordered border text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Full URL</th>
                <th scope="col">Short URL</th>
                <th scope="col"></th>
                <th scope="col">QR</th>
                <th scope="col">Count</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item._id}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-center">
                    <a href={item.Full_link_url} target="_blank">
                      {item.Full_link_url}
                    </a>
                  </td>
                  <td className="text-center">
                    <a href={`${baseUrl}/${item.Short_url}`} target="_blank">
                      {`${baseUrl}/${item.Short_url}`}
                    </a>
                  </td>
                  <td className="text-center">
                    <AiFillDelete
                      className="btn btn-sm"
                      onClick={() => handleDelete(item._id)}
                      size={45}
                      color="red"
                    />
                  </td>
                  <td className="text-center">
                    <SlPicture
                      size={40}
                      className="btn btn-sm"
                      onClick={() => onOpen(`${baseUrl}/${item.Short_url}`)}
                      color="blue"
                    />
                  </td>
                  <td className="text-center">{item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {qr && (
        <div className="qr-modal">
          <QRCode value={showqr} size={256} />
          <button className="btn btn-sm btn-danger mt-2" onClick={onClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Body;
