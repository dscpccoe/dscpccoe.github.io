import React,{useEffect,useState} from 'react'
import '../css/links.scss';





function Links() {
    const [data, setLinksJSONData] = useState([]);
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/Atharvamaid/linkjson/master/links.json')
        .then(response => response.json()).catch(e => console.log(e))
        .then(data => setLinksJSONData(data))
    },[])
    console.log("data ",data);
    return (
        
        <div style={{minHeight:"75vh"}}>
            <h1 className="text-center font-weight-bold mt-3">Links</h1>
        {Object.keys(data).map((member,index) => (
            <div key={index} className="container-fluid linked mt-4">
                <div className="rainbow mt-4">
             <ul >
                 <li className="TheNewClass"><a href="https://google.com" target="BLANK" title={data[member]['name']}>{data[member]['name']}</a></li>
             </ul>
         </div>
         </div>
        )
        )}
        
        </div>
    )
}

export default Links;