import { Link } from "react-router-dom";

function ButtonLink({ url, content }) {
  return (
    <div className="button-link">
      <Link to={url}>
        {content}
      </Link>      
    </div>
  );
}

export default ButtonLink;
