import React from 'react';

// loading the sass style fot the component
import './index.scss';

function UploadCompanyPhoto (props) {
  const { className = "", children, setCompanyPic, logo, ...other } = props;

  const [picture, setPicture] = React.useState("/images/pic.svg");


  const setAvatar = () => {
    const input = document.getElementById("companyAvatar");
    const img = document.getElementsByClassName("companyImage")[0];

    input.addEventListener("change", function () {
      let file = this.files[0];
      if (file) {
        setCompanyPic(file);
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          setPicture(reader.result);
          img.setAttribute("id", "pic");
        });

        reader.readAsDataURL(file);
      }
    });
  };

  return <div
    className={"atom__upload-image-container " + className}
    {...other}
  >
    <div className="profile-pic">
      <img className="companyImage" id={logo && "pic"} src={logo || picture} alt=""></img>
    </div>

    <label htmlFor="companyAvatar">{children}</label>
    <input
      // {...register('companyPic')}
      onClick={setAvatar}
      type="file"
      id="companyAvatar"
      name="companyAvatar"
      accept="image/png, image/jpeg"
    />
  </div>;
}

export default UploadCompanyPhoto;
