import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const ActiveResource = () => {
  const [resource, setResource] = useState({});

  const [seconds, setSeconds] = useState();

  useEffect(() => {
    async function fetchResource() {
      const axiosRes = await axios.get("/api/activeresource");
      const resource = axiosRes.data;
      const timeToFinish = parseInt(resource.timeToFinish, 10);
      const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
      const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime;

      if (updatedTimeToFinish >= 0) {
        resource.timeToFinish = updatedTimeToFinish;
        setSeconds(updatedTimeToFinish);
      }

      setResource(resource);
    }

    fetchResource();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(seconds - 1);
    },1000)

    if(seconds < 0) {
        clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [seconds]) 

  return (
    <div className="active-resource">
      <h1 className="resource-name">{resource.title}</h1>
      <div className="time-wrapper">
        <h2 className="elapsed-time">
          {seconds}
        </h2>
      </div>
      <Link href="/">
        <a className="button">
          Go to resource
        </a>
      </Link>
    </div>
  )
}

export default ActiveResource;