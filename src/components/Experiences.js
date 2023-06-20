import axios from "axios";
import { useEffect, useState } from "react";
import Experiencebox from "./Experiencebox";

function Experiences() {
    let [projectboxes, setprojectboxes] = useState([]);
    useEffect(() => {
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/${process.env.REACT_APP_EXP_ID}`;
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
              image: entry["Image"],
              id: entry["ID"],
            }
            items.push(item);
          });
          setprojectboxes(items);
        })
        .catch(err=> console.log(err));
      }, []);
    return (
        <div className = "projects">
          {projectboxes.map(project => (
            <Experiencebox name = {project.name} startend = {project.startend} role = {project.role} desc = {project.desc} image = {project.image} id = {project.id}/>
          ))}
        </div>
    );
}

export default Experiences;

/*            {projectboxes.map(item => (
                <Projectbox name={item["name"]} startend = {item['startend']} role={item["role"]} desc={item["desc"]}/>
              ))}*/