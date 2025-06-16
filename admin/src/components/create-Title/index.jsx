import { useContext } from "react";
import { GlobalContext } from "../../Context";

export default function CreateTitle() {
  const { formData, setFormData, handleSaveData } = useContext(GlobalContext);

  return (
    <div>
      <input
        type="text"
        name="title"
        placeholder="Enter Something"
        id="title"
        value={formData.title}
        onChange={(event) => {
          setFormData({ ...formData, title: event.target.value });
        }}
      />
      <textarea
        name="description"
        id="description"
        placeholder="Enter description"
        value={formData.description}
        onChange={(event) => {
          setFormData({ ...formData, description: event.target.value });
        }}
      />
      <button onClick={handleSaveData}>Add</button>
    </div>
  );
}
