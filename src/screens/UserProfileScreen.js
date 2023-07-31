import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const UserProfile = () => {
  const [userData, setUserData] = useState();
  const loginData = JSON.parse(localStorage.getItem('login'));
  const token = loginData ? loginData.token : null;
  console.log(token);
  console.log(userData);

  useEffect(() => {
    // Fetch user profile data on component mount
    const fetchUserProfile = async () => {
      try {
        // Send the API request only if the token exists
        if (token) {
          const response = await axios.get('http://localhost:8181/users', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUserData(response.data);
          console.log(response.data);
        }
      } catch (error) {
        // Handle error here
        console.error('Error fetching profile data:', error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const [isEditing, setIsEditing] = useState({
    contactInfo: false,
    membershipInfo: false,
  });

  const [contactInfo, setContactInfo] = useState({});

  const [membershipInfo, setMembershipInfo] = useState({});

  useEffect(() => {
    if (userData) {
      setContactInfo({
        fullName: userData.fullName,
        phoneNumber: userData.phone,
        email: userData.email,
      });

      setMembershipInfo({
        gender: userData.gender,
        birthDate: userData.dateOfBirth,
        nationality: userData.country,
        idNumber: userData.indentificationNumber,
        region: '',
        city: '',
      });
    }
  }, [userData]);

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
