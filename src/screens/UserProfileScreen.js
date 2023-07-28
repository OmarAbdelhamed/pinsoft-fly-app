import React, { useState } from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const UserProfile = () => {
  const selectedUserData = useSelector((state) => state.data.selectedUserData);
  console.log(selectedUserData);

  const [isEditing, setIsEditing] = useState({
    contactInfo: false,
    membershipInfo: false,
  });

  const [contactInfo, setContactInfo] = useState({
    fullName: 'p',
    phoneNumber: '123-456-7890',
    email: 'john@example.com',
  });

  const [membershipInfo, setMembershipInfo] = useState({
    gender: 'Male',
    birthDate: '1990-01-01',
    nationality: 'USA',
    idNumber: '123456789',
    region: 'West',
    city: 'New York',
  });

  const handleEdit = (section) => {
    setIsEditing({ ...isEditing, [section]: true });
  };

  const handleSave = (section) => {
    setIsEditing({ ...isEditing, [section]: false });
  };

  const renderSection = (sectionName, fields) => {
    const isSectionEditing = isEditing[sectionName];

    return (
      <div className='border relative shadow-xl bg-white rounded-lg h-auto max-w-[1200px] flex flex-col justify-center items-center  p-4 mb-4 w-1/2'>
        <h2 className='text-3xl font-bold mb-4 font-Headlines'>
          {sectionName}
        </h2>
        {fields.map((field) => (
          <div
            key={field.name}
            className='border p-2 rounded-xl shadow flex items-center mb-2'
          >
            <label htmlFor={field.name} className='w-40  text-left'>
              {field.label}:
            </label>
            {isSectionEditing ? (
              <input
                type={field.type}
                id={field.name}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                className='p-2 border rounded shadow flex-1 h-[34px] w-64'
              />
            ) : (
              <p className=' p-2 rounded h-[34px] flex-1 w-64'>{field.value}</p>
            )}
          </div>
        ))}
        {isSectionEditing ? (
          <button
            onClick={() => handleSave(sectionName)}
            className='bg-primary-color p-2 text-white rounded-md px-[100px]  hover:scale-[105%] hover:transition-all ease-linear hover:bg-primary-color-light'
          >
            Kaydet
          </button>
        ) : (
          <button
            onClick={() => handleEdit(sectionName)}
            className='bg-primary-color p-2 text-white rounded-md px-[100px]  hover:scale-[105%] hover:transition-all ease-linear hover:bg-primary-color-light'
          >
            Düzenle
          </button>
        )}
      </div>
    );
  };

  const contactInfoFields = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      value: contactInfo.fullName,
      setValue: (value) => setContactInfo({ ...contactInfo, fullName: value }),
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      type: 'text',
      value: contactInfo.phoneNumber,
      setValue: (value) =>
        setContactInfo({ ...contactInfo, phoneNumber: value }),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      value: contactInfo.email,
      setValue: (value) => setContactInfo({ ...contactInfo, email: value }),
    },
  ];

  const PersonalInfoFields = [
    {
      name: 'gender',
      label: 'Gender',
      type: 'text',
      value: membershipInfo.gender,
      setValue: (value) =>
        setMembershipInfo({ ...membershipInfo, gender: value }),
    },
    {
      name: 'birthDate',
      label: 'BirthDate',
      type: 'date',
      value: membershipInfo.birthDate,
      setValue: (value) =>
        setMembershipInfo({ ...membershipInfo, birthDate: value }),
    },
    {
      name: 'idNumber',
      label: 'T.C. ID No',
      type: 'text',
      value: membershipInfo.idNumber,
      setValue: (value) =>
        setMembershipInfo({ ...membershipInfo, idNumber: value }),
    },
    {
      name: 'nationality',
      label: 'Nationality',
      type: 'text',
      value: membershipInfo.nationality,
      setValue: (value) =>
        setMembershipInfo({ ...membershipInfo, nationality: value }),
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      value: membershipInfo.city,
      setValue: (value) =>
        setMembershipInfo({ ...membershipInfo, city: value }),
    },
  ];

  return (
    <>
      <div className='bg-fifth bg-cover bg-fixed bg-opacity-50  bg-no-repeat min-h-screen flex items-center justify-center -z-1'>
        <div className='container mx-auto   p-4'>
          <div className='flex items-center my-5 w-full justify-center'>
            <h1 className=' text-5xl relative font-bold mb-4 w-[600px] text-center  font-Headlines z-13 shadow rounded-full bg-white'>
              <MdSupervisedUserCircle className='absolute bg-white rounded-full left-[40px] -top-[25px] text-xl w-[100px] h-[100px]' />
              User Profile
            </h1>
          </div>
          <div className='flex flex-col items-center  justify-center'>
            {renderSection('Contact Info', contactInfoFields)}
            {renderSection('Personal Info', PersonalInfoFields)}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
