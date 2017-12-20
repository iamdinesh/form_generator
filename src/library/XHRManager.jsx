import axios from 'axios';
import $ from 'jquery';


export default class XHRManager {

  construct() {
    // bind the context
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    // Submit the data to remote server using axios
    axios.post('http://localhost:3000/users', $('form').serializeArray())
      .then(response => alert(response.data))
      .catch(error => console.log(error));
  }
}
