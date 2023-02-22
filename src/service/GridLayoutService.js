import axios from 'axios';

const headers = {
  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' },
};
const baseURL = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/page-layout';
//const baseURL = 'http://localhost:3001/page-layout';

const get = (setPage, setLayout, location) => {
  axios.get(`${baseURL}?name=${location.loc}`, headers).then((res) => {
    if (res) {
      setPage(res.data);
      setLayout(res.data.components);
    }
  });
};

const put = (component, layout, page) => {
  axios.put(
    `${baseURL}/${component.id}`,

    { id: page.id, name: page.name, components: layout },
    { headers: headers }
  );
  console.log('res.data.components 2', layout);
};

export { get, put };
