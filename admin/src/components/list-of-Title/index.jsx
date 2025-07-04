import { useContext } from "react";
import { GlobalContext } from "../../Context";

export default function RenderList() {
  const { loading, listOfData } = useContext(GlobalContext);

  return (
    <div>
      {loading ? (
        <h1>Please wait...</h1>
      ) : (
        listOfData.map((itemData) => (
          <div key={itemData._id}>
            <h3>{itemData.title}</h3>
            <h5>{itemData.description}</h5>
          </div>
        ))
      )}
    </div>
  );
}
