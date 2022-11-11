

export const GET = "GET";
export const FILTER_DATA = "FILTER_DATA";

export const getData = (data) => {
    return {
      type: GET,
      payload: data,
    };
  };

 