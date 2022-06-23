const PersonalInformation = ({ name, lastName, nationality, age }) => {
  return (
    <section >
      <div className ='section-container'>
        <h2>Personal Information:</h2>
        <p>Name: {name}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age} years old</p>
        <p>Nationality: {nationality}</p>
      </div>
    </section>


  );
};

export default PersonalInformation;
