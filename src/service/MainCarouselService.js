import axios from 'axios';

const get = (location, setSlideHeaderData) => {
    const baseUrl = 'http://localhost:3001/main-carousel/location';
    // const baseUrl = "http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/main-carousel/location";
    const headers = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };

    axios
      .get(`${baseUrl}/${location}`, headers)
      .then((result) => {
          const slides = [];
          for (let i = 0; i < result.data.imageLinks.length; i++) {
            slides.push({
              id: [i],
              titles: result.data.titles[i],
              imageLinks: result.data.imageLinks[i],
              descriptions: result.data.descriptions ? result.data.descriptions[i] : null,
            });
          }
          setSlideHeaderData(slides);
          console.log("slides", slides);
      })
      .catch((err) => {
        console.error(err);
      });
};

export { get }