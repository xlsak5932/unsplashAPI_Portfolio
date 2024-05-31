import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import banner from "./../assets/Images/banner1.jpg";
import "./Search.css";

function Search() {
  const [img, setImg] = useState("a");
  const [res, setRes] = useState([]);
  const navigate = useNavigate();

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

  // const submit = (e) => {
  //   e.preventDefault();
  //   fetchRequest();
  //   setImg("");
  // };

  return (
    <div>
      <div className="search__box">
        <img src={banner} alt="배너" />

        <div className="search__tag__box">
          <div className="tag__flex">
            <h1>영문으로 입력 해보세요!!</h1>
            <input
              type="text"
              // value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="영문으로 아무거나 입력하세용~~♥︎"
            />
            {/* <button type="submit" onClick={submit} className="search__btn">
              검색하기
            </button> */}
          </div>
        </div>

        <h1>이미지를 클릭 해보세요!!</h1>
        <div className="imgContainer">
          {res.map((val) => (
            <div className="img__con__top">
              <img
                key={val.id}
                src={val.urls.thumb}
                alt={val.alt_description}
                onClick={() => navigate("blog-defail/" + val.id)}
              />
              <div className="img__con__bottom">
                <p>제목: {val.alt_description}</p>
                <p>설명: {val.description}</p>
                <p>촬영일: {val.updated_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
