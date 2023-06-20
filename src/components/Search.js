import "./Search.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import { Link } from "react-router-dom";

function Search() {
  const[query, setQuery] = useState(null);

  function getFiltered(list, query){
    if (query) {
      return list.filter(item => (item.name.toLowerCase().includes(query.toString().toLowerCase()) || item.skills.toLowerCase().includes(query.toString().toLowerCase())));
    }
    else{
      return list;
    }
  }
  let [searchboxes, setsearchboxes] = useState([]);
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
          let items = [];
          tableEntries.forEach(record => {
            let entry = record.fields;
            let item = {
              name: entry["Name"],
              id: entry["ID"],
              skills: entry["Skills"],
              desc: entry["What It Is"],
              type: entry["Type"]
            }
            items.push(item);
          });
          setsearchboxes(items);
        })
        .catch(err=> console.log(err));
      }, []);
      const filteredsearchboxes = getFiltered(searchboxes, query);
    return (
        <div className = "search">
            <div className = "search-bar">
              <div className = "search-icon">
                <p className = "icon">🔎</p>
              </div>
              <input className = "search-input" id="search-input" placeholder = "Search Portfolio Items" type = "text" onChange = {(e) => setQuery(e.target.value)}/>
            </div>
            <div className = "column-labels">
              <p>Name</p>
              <p>Preview</p>
              <p>Skills</p>
            </div>
            <div className = "search-content">
              {filteredsearchboxes.map(project => (
              <Link to = {"/" + project.type + "/" + project.id} ><Searchbox name = {project.name} skills = {project.skills} id = {project.id} preview = {project.desc.slice(0,50) + "..."}/></Link>
            ))}
            </div>

        </div>
    );
}

export default Search;

  // onChange={(e) => setQuery(e.target.value)}