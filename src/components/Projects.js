import "./Projects.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Projects() {
    let [projectboxes, setprojectboxes] = useState([]);

    useEffect(() => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_PROJ_ID}`;
        const config = {
          headers : {
            "Authorization" : `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
          }
        };
        axios.get(url, config)
        .then(res => {
          let tableEntries = res.data.records;
          let items1 = [];
          tableEntries.forEach(record => {
            let entry = record.fields;
            let item = {
              name1: entry["Project Name"],
              startend1: entry["Start to End"],
              projectrole: entry["Project Role"],
              projectdesc: entry["Project Description"],
            }
            items1.push(item);
          });
          setprojectboxes(items1);
        })
        .catch(err=> console.log(err))
    
      }, []);
    return (
        <div>
            Hello
        </div>
    );
}

export default Projects;