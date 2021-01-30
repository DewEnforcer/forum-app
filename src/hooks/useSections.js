import {useEffect, useState} from 'react'
import sectionService from '../services/sectionservice';

export default function useSections (id = null) { //retrieves all sections or one with given ID
    const [sections, setSections] = useState([]);

    const fetchSections = async () => {
        const {data} = id ? await sectionService.getSectionById(id) : await sectionService.getSections();
        setSections(data);
    }
    
    useEffect(() =>{
        fetchSections();
    }, []);

    return sections;
}