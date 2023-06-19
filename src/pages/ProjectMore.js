import "./ProjectMore.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProjectMore() {
    const {id} = useParams();
    const [ moreName, setMoreName ] = useState(null);
    const [ moreIs, setMoreIs ] = useState(null);
    const [ moreDid, setMoreDid ] = useState(null);
    const [ moreHow, setMoreHow ] = useState(null);
    const [ moreWhere, setMoreWhere ] = useState(null);
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
              how: entry["How I Made It"],
              where: entry["Where It Was"],
              did: entry["What I Did"],
              skills: entry["Skills"],
              image: entry["Image2"],
              more: entry["More"],
              id: entry["ID"],
            }
            if (item.id === id.toString()){
                setMoreName(item.name);
                setMoreIs(item.is);
                setMoreHow(item.how);
                setMoreWhere(item.where);
                setMoreDid(item.did);
                setMoreSkills(item.skills.split(','));
                setMoreImage(item.image);
                setMoreMore(item.more);
            }
          });
        })
        .catch(err=> console.log(err));
      }, []);
    return (
        <div className = "shaded-background">
            <div className = "article">
                <h1 className = "more-title">{moreName}</h1>
                <img className = "more-image" src = {moreImage} alt = "hello"></img>
                <p className = "more-where">{moreWhere}</p>
                <h1 className = "more-section">What It Is</h1>
                <p className = "more-is">{moreIs}</p>
                <h1 className = "more-section">What I Did</h1>
                <p className = "more-did">{moreDid}</p>
                <h1 className = "more-section">How It Was Made</h1>
                <p className = "more-how">{moreHow}</p>
                <h1 className = "more-section">What I Applied</h1>
                <p className = "more-skills">{moreSkills.map(skill => intoBubbles(skill))}</p>
                <h1 className = "more-section">Check It Out</h1>
                <a className = "more-more" target="_blank" rel="noopener noreferrer" href = {moreMore}>Click Me</a>
            </div>
        </div>
    );
}

export default ProjectMore;