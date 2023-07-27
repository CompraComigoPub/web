import React from "react";

// loading the sass style fot the component
import "./index.scss";

function UploadImage(props) {
  const { className = "", children, setProfilePic, register, ...other } = props;

  const [picture, setPicture] = React.useState("/images/pic.svg");

  const setAvatar = () => {
    const input = document.getElementById("avatar");
    const img = document.getElementsByClassName("image")[0];

    input.addEventListener("change", function () {
      let file = this.files[0];

      if (file) {
        setProfilePic(file);
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          setPicture(reader.result);
          input.setAttribute('value', picture);
          img.setAttribute("id", "pic");
        });

        reader.readAsDataURL(file);
      }
    });
  };

  return (
    <div className={"atom__upload-image-container " + className} {...other}>
      <div className="profile-pic">
        <img className="image" src={picture} alt=""></img>
      </div>

      <label htmlFor="avatar">{children}</label>
      <input
        onClick={setAvatar}
        // {...register('profilePic')}
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
    </div>
  );
}

export default UploadImage;
