import "./Projects.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Projectbox from "./Projectbox";

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
          let items = [];
          tableEntries.forEach(record => {
            let entry = record.fields;
            let item = {
              name: entry["Name"],
              startend: entry["Start to End"],
              role: entry["Role"],
              desc: entry["Description"],
            }
            items.push(item);
          });
          setprojectboxes(items);
        })
        .catch(err=> console.log(err))
    
      }, []);
    return (
        <div className = "projects">
          <Projectbox name = {"Insight Housing"} startend = {"March 2023 - June 2023"} role = {"Developer"} desc = {"Made a donation portal"} what1 = {"a donation portal"} what2 = {"facilitates the donation of items"} how = {"tech1, tech2, tech3, tech4, tech5"} image = {"https://github.com/brandonwu32/webmusic/blob/main/Screenshot%202023-06-05%20at%2011.41.42%20AM.png?raw=true"}></Projectbox>
          <Projectbox name = {"Insight Housing"} startend = {"March 2023 - June 2023"} role = {"Developer"} desc = {"Made a donation portal"} what1 = {"a donation portal"} what2 = {"facilitates the donation of items"} how = {"tech1, tech2, tech3, tech4, tech5"} image = {"https://github.com/brandonwu32/webmusic/blob/main/Screenshot%202023-06-05%20at%2011.41.42%20AM.png?raw=true"}></Projectbox>
          <Projectbox name = {"Insight Housing"} startend = {"March 2023 - June 2023"} role = {"Developer"} desc = {"Made a donation portal"} what1 = {"a donation portal"} what2 = {"facilitates the donation of items"} how = {"tech1, tech2, tech3, tech4, tech5"} image = {"https://github.com/brandonwu32/webmusic/blob/main/Screenshot%202023-06-05%20at%2011.41.42%20AM.png?raw=true"}></Projectbox>
          <Projectbox name = {"Insight Housing"} startend = {"March 2023 - June 2023"} role = {"Developer"} desc = {"Made a donation portal"} what1 = {"a donation portal"} what2 = {"facilitates the donation of items"} how = {"tech1, tech2, tech3, tech4, tech5"} image = {"https://github.com/brandonwu32/webmusic/blob/main/Screenshot%202023-06-05%20at%2011.41.42%20AM.png?raw=true"}></Projectbox>

        </div>
    );
}

export default Projects;

/*            {projectboxes.map(item => (
                <Projectbox name={item["name"]} startend = {item['startend']} role={item["role"]} desc={item["desc"]}/>
              ))}*/