import axios from "axios";

const MarkdownButton = ({ baseUrl, id, output }) => {
  const updateContent = () => {
    axios
      .put(`${baseUrl}/page-content/markdown/update/${id}`, output)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <button className='markdown-submit-button' onClick={updateContent}>
      Confirm Changes
    </button>
  );
};

export default MarkdownButton;
