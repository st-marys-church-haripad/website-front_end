import {Helmet} from "react-helmet";

const TitleGenerator = ({ title }) => {
  const adjustedTitle = title?.length == 0 ? 'Home' : title?.slice(1).charAt(0).toUpperCase() + title?.slice(2)
  return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{adjustedTitle}</title>
            </Helmet>
        </div>
  )
}

export default TitleGenerator