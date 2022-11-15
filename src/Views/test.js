import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    type: "",
    owner: "",
    name: "",
    image: "",
  });
  useEffect(() => {
    fetch(`http://localhost:3000/products/updateImage/6373d4bd45fde47b83b4fd3f`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);

      const res = await fetch(
        `http://localhost:5000/user/"6373d4bd45fde47b83b4fd3f"`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (res.ok) {
        setData({ name: "", image: "" });
        history.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditUser;
