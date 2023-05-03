import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

export function useFlip() {
    const [flip, setFlip] = useState(true);
    const toggleFlip = () => {
        setFlip(f => !f)
    }
    return [flip, toggleFlip];
}


export function useAxios(url) {
    const [data, setData] = useState([]);
    const getData = async (urlParams = "") => {
        const resp = await axios.get(`${url}${urlParams}`)
        setData( d => [...d, {...resp.data, id: uuid()}])
    }
    const removeData = () => setData([]);
    return [data, getData, removeData]
}