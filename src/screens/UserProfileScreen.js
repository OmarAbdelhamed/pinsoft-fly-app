import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    gender: false,
    birthDate: false,
    nationality: false,
    idNumber: false,
    region: false,
    city: false,
  });

  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    gender: "",
    birthDate: "",
    nationality: "",
    idNumber: "",
    region: "",
    city: "",
  });

  const handleEdit = (field) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSave = (field) => {
    setIsEditing({ ...isEditing, [field]: false });
    // Save the updated contactInfo[field] here
  };

  const renderInput = (fieldName, inputType = "text", width = "w-64") => {
    return (
      <div className="flex items-center mb-2">
        <label htmlFor={fieldName} className="w-40 mr-2 text-right">
          {fieldName}:
        </label>
        {isEditing[fieldName] ? (
          <>
            <input
              type={inputType}
              id={fieldName}
              value={contactInfo[fieldName]}
              onChange={(e) =>
                setContactInfo({ ...contactInfo, [fieldName]: e.target.value })
              }
              className={`border p-1 rounded flex-1 ${width}`}
            />
            {isEditing[fieldName] ? (
              <button
                onClick={() => handleSave(fieldName)}
                className="ml-2 bg-blue-500 text-white rounded px-3 py-1"
                style={{ backgroundColor: "#3D5CB8" }} // Set the button color here
              >
                Kaydet
              </button>
            ) : (
              <button
                onClick={() => handleEdit(fieldName)}
                className="ml-2 bg-blue-500 text-white rounded px-3 py-1"
                style={{ backgroundColor: "#3D5CB8" }} // Set the button color here
              >
                Düzenle
              </button>
            )}
          </>
        ) : (
          <>
            <p className={`flex-1 mr-2 ${width}`}>{contactInfo[fieldName]}</p>
            <button
              onClick={() => handleEdit(fieldName)}
              className="bg-blue-500 text-white rounded px-3 py-1"
              style={{ backgroundColor: "#3D5CB8" }} // Set the button color here
            >
              Düzenle
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="border rounded p-4 mb-4 w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Üyelik ve İletişim Bilgileri
        </h2>
        <div className="flex flex-wrap">
          {renderInput("Full Name")}
          {renderInput("Cep Telefonu")}
          {renderInput("Mail")}
        </div>
      </div>

      <div className="border rounded p-4 mb-4 w-1/2">
        <h3 className="text-xl font-bold mb-4">Üyelik Bilgileri</h3>
        <div className="flex flex-wrap">
          {renderInput("Cinsiyet", "text", "w-48")}
          {renderInput("Doğum Tarihi", "text", "w-48")}
          {renderInput("Uyruk", "text", "w-48")}
          {renderInput("T.C. Kimlik No", "text", "w-48")}
          {renderInput("Ülke/Bölge", "text", "w-48")}
          {renderInput("Şehir", "text", "w-48")}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
