import axios from 'axios';
// const baseUrl = 'http://localhost:3001/case-study';
const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/case-study';

const get = (id, setPageData, setRequestStatus, setPageLoaded) => {
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        setPageData(response.data);
        setPageLoaded(true);
      }
    })
    .catch((err) => {
      setRequestStatus(err.status === 404 ? 'error-404' : 'other-error');
    });
};

export { get };

const put = (id, updatedCaseStudy, setUpdateStatus, setPageData) => {
  axios
    .put(`${baseUrl}/${id}`, updatedCaseStudy)
    .then((response) => {
      setUpdateStatus('success');
      setPageData(response.data);
    })
    .catch((err) => {
      setUpdateStatus('error', err);
    });
};

export { put };

/*

{
    "id": "9595958d-3ac2-4977-bbf3-c22f70f9635d",
    "spotlight": true,
    "title": "This is the title",
    "overview": "This is the overview",
    "coverImageLink": "This is a link :/",
    "body": {
        "content": [
            {
                "markdownText": "This is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template",
                "imageLink": "https://picsum.photos/500/300"
            },
            {
                "markdownText": "#This is the header of the block \n This is even more text, just doing it for fun as you do --hello-- ",
                "imageLink": "https://picsum.photos/500/300"
            },
            {
                "markdownText": "This is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template, this is a lot of markdown text to be used as a template",
                "imageLink": "https://picsum.photos/500/300"
            }
        ]
    },
    "pdfLink": "This is a PDF link",
    "pptxLink": "This is a PPTX link"
}

*/
