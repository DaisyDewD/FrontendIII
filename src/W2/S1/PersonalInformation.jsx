
const PersonalInformation = ({ name, lastname, age, nationality, residence, occupation, bio }) => {
    return (
        <main className="main">
           
            <section className="personalData">
                <h1> Personal information </h1> 
                <h2> Name: {name} </h2>
                <h2> Lastname: {lastname} </h2> 
                <h2> Age: {age} years old </h2>
                <h2> Nationality: {nationality} </h2> 
                <h2> Residence: {residence} </h2>
                <h2> Occupation: {occupation} </h2>
                <h2>Bio:{bio}</h2>
                
            
           
      

            </section>
            
        </main>
    );
};
export default PersonalInformation;