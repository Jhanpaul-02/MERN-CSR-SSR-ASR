import { useContext } from "react";
import { GlobalContext } from "../../context";

export default function ListOfTitle() {
  const { loading, listOfData } = useContext(GlobalContext);
  return (
    <div>
      <h3>List of Title</h3>
      {loading ? (
        <h3>Please wait...</h3>
      ) : (
        listOfData.map((itemData) => (
          <div key={itemData._id}>
            <p>{itemData.title}</p>
          </div>
        ))
      )}
    </div>
  );
}
