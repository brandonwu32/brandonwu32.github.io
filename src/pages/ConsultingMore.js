import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ConsultingMore() {
    const {id} = useParams();
    const [ moreName, setMoreName ] = useState(null);
    const [ moreIs, setMoreIs ] = useState(null);
    const [ moreDid, setMoreDid ] = useState(null);
    const [ moreSkills, setMoreSkills ] = useState([]);
    const [ moreImage, setMoreImage ] = useState(null);
    const [ moreMore, setMoreMore ] = useState(null);

    function intoBubbles(skill){
        return (
            <div className = "skills">{skill}</div>
        );
    }

    useEffect(() => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_MORE_ID}`;
        const config = {
          headers : {
            "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          }
        };
        axios.get(url, config)
        .then(res => {
          let tableEntries = res.data.records;
          tableEntries.forEach(record => {
            let entry = record.fields;
            let item = {
              name: entry["Name"],
              is: entry["What It Is"],
              did: entry["What I Did"],
              skills: entry["Skills"],
              image: entry["Image2"],
              more: entry["More"],
              id: entry["ID"],
            }
            if (item.id === id.toString()){
                setMoreName(item.name);
                setMoreIs(item.is);
                setMoreDid(item.did);
                setMoreSkills(item.skills.split(','));
                setMoreImage(item.image);
                setMoreMore(item.more);
            }
          });
        })
        .catch(err=> console.log(err));
      }, [id]);
    return (
        <div className = "shaded-background">
            <div className = "article">
                <h1 className = "more-title">{moreName}</h1>
                <img className = "more-image" src = {moreImage} alt = "hello"></img>
                <h1 className = "more-section">What It Is</h1>
                <p className = "more-is">{moreIs}</p>
                <h1 className = "more-section">What I Did</h1>
                <p className = "more-did">{moreDid}</p>
                <h1 className = "more-section">What I Applied</h1>
                <p className = "more-skills">{moreSkills.map(skill => intoBubbles(skill))}</p>
                <h1 className = "more-section">Check It Out</h1>
                <a className = "more-more" href = {moreMore} target="_blank" rel="noopener noreferrer">Click Me</a>
            </div>
        </div>
    );
}

export default ConsultingMore;