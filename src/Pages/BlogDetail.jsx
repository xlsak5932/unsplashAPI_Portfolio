import React, { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./BlogDetail.css";

function BlogDetail() {
  const { id } = useParams();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Id : ", id);
    getBlogById();
  }, [id]);

  const getBlogById = async () => {
    try {
      const Access_Key = "1A5wx-s_geGW4wkODkps0CydKGxaxYPUTMbYzK8FDm0"; // 여기에 올바른 API 키를 입력하세요.
      const response = await axios.get(
        `https://api.unsplash.com/photos/${id}?client_id=${Access_Key}`
      ); // 적절한 API 엔드포인트를 넣어주세요
      setImage(response.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  console.log(image);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Detail__total__box">
      <Header />
      <div className="detail__box">
        <p className="type">사진 종류:{image.asset_type}</p>
        <p className="title">제목: {image.alt_description}</p>
        <img src={image.urls.thumb} alt={image.alt_description} />
        <p className="img__desc">이미지 설명: {image.alternative_slugs.ko}</p>
        <p className="description">설명: {image.description}</p>
        <p className="cap">촬영일: {image.updated_at}</p>
        <p className="download">다운로드 횟쉬: {image.downloads}</p>
      </div>

      <div className="btn__box">
        <button
          type="button"
          className="detail__btn"
          onClick={() => {
            navigate("/");
          }}
        >
          메인 페이지로 이동
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetail;
