import { bibleVerses } from "@/assets/asset";
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();
  const date = new Date().getDate();
  const handleButtonClick = () => {
    navigate('/about');
  };
  return (
    <>
      <div className="container">
        <figure className="text-center mt-3">
          <blockquote className="blockquote fw-600">
            <p className="fs-14">" {bibleVerses[date-1]?.verses} "</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            <cite title="Source Title">{bibleVerses[date-1]?.from}</cite>
          </figcaption>
        </figure>
        <div className="vstack">
          <button type="button" className="btn" onClick={handleButtonClick}>Wish to know more about us. <i className="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
      </div>
    </>
  )
}

export default Home;
