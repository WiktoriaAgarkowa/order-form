import axios from 'axios';

const onSubmit = (values) => {

    values.id = Date.now()
    values.no_of_slices = parseInt(values.no_of_slices);
    values.diameter = parseInt(values.diameter);
    values.spiciness_scale = parseInt(values.spiciness_scale);
    values.slices_of_bread = parseInt(values.slices_of_bread);
  
    const headers = {
      'Content-Type': 'application/json'
    }
  
    axios.post(
      'https://frosty-wood-6558.getsandbox.com:443/dishes',
      JSON.stringify(values),
      {'headers': headers})
      .then((req) => {
        console.log(req)
      })
      .catch((error) => {
        console.log(error.message);
      });
  
}

export default onSubmit;