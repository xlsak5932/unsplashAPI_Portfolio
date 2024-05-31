import React, { useState, useEffect } from "react";
import axios from "axios";

function IntroPost() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);

  const Access_Key = "1A5wx-s_geGW4wkODkps0CydKGxaxYPUTMbYzK8FDm0"; // 여기에 올바른 API 키를 입력하세요.

  const fetchRequest = async () => {
    if (img.trim() === "") return; // 검색어가 없으면 요청하지 않음

    const url = `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}&orientation=landscape&per_page=20`;

    try {
      const response = await axios.get(url);
      const result = response.data.results;
      console.log(result);
      setRes(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (img.trim() !== "") {
      // 검색어가 있을 때만 요청
      fetchRequest();
    }
  }, [img]);

  const submit = (e) => {
    e.preventDefault();
    fetchRequest();
    setImg("");
  };

  return (
    <>
      <div>
        <div>
          <div className="search">
            <input
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Searching Anything..."
            />
            <button type="submit" onClick={submit}>
              Search
            </button>
          </div>
          <div className="imgContainer">
            {res.map((val) => (
              <img
                key={val.id}
                src={val.urls.thumb}
                alt={val.alt_description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroPost;
