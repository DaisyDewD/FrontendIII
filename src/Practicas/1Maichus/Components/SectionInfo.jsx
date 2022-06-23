import Bio from "./Bio";

const SectionInfo = (props) => {
  if (props.bio) {
    return (
      <section>
        <div className='sectionContainer'>
          
          <div>
            <h2>Biography</h2>
            <Bio bio={props.bio} />
          </div>
        </div>
      </section>
    );
  } else {
    let sectionTitle = props.career ? "Experience" : "Education";
    let items = props.career ? props.career : props.education;
    return (
      <section>
        <div className='sectionContainer'>
          
          <div>
            <h2>{sectionTitle}</h2>
            <ul className='liStyle'>
              {items.map((item) => (
                <li key={item.id}>
                  {item.occupation ? item.occupation : item.institute}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
};

export default SectionInfo;
//
