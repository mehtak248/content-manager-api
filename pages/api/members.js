import membersData from './membersdata.json'
import axios from "axios";

export default function members(req, res) {
    if (req.method === "GET") {
        return res.send(membersData)
    }

    if (req.method === "POST") {
        const { title, description, link, timeToFinish, priority} = req.body;
    
        if (!title || !description || !link || !timeToFinish || !priority) {
          return res.status(422).send("Data are missing!");
        }
    
        axios.post("http://localhost:3000/api/members", req.body);
    
        return res.send("Data has been received!");
      }
}