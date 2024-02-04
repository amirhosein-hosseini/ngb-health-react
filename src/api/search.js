import React from "react";
import axios from "axios";
import { domain } from "./domain";

export const getAllSearchContents = async (slug) => {
    try {
        const response = await axios.get(domain + "api/" + 'search_title/?search=' + slug);
        

        if (response.status === 200) {
            return response;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        throw new Error(error.message);
    }
};