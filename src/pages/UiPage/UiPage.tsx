import { useLocation } from "react-router";

const UiPage = () => {
  const location = useLocation();
  return (
    <div className="m-3">
      <h1>UI Header</h1>

    </div>
  );
};
export default UiPage;
