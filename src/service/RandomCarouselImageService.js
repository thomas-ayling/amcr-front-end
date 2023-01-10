import axios from "axios";
const RandomImage = axios.get('https://picsum.photos/1450/560').then((res) => console.dir(res));
export default RandomImage;