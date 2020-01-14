import React, { Component } from 'react';

import Input from '../../component/input/Input';
import axios from '../../axios-details';
import bear from '../../img/bear.jpg';
import './DataForm.css';

class DataForm extends Component{
    
    state = {

        DataForm: {
          name: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Your Name'
            },
            value: '',
            validation:{
                required: true
            },
            valid: false,
            typed: false
          },
          city: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Hometown'
            },
            value: '',
            validation:{
                required: true
            },
            valid: false,
            typed: false
          },
          zipcode: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Zipcode'
            },
            value: '',
            validation:{
                required: true,
                minlength: 6,
                maxlength: 6,
                isNumeric: true
            },
            valid: false,
            typed: false
          },
          email: {
            elementType: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Your email'
            },
            value: '',
            validation:{
                required: true,
                isEmail: true
            },
            valid: false,
            typed: false
          },
          message: {
              elementType: 'textarea',
              elementConfig: {
                  cols: '25',
                  rows: '5',
                  placeholder: 'Your Message'
              },
              value: '',
              validation:{
                required: true
            },
            valid: false,
            typed: false
          }
        },

        isFormValid: false

      }

      checkValidity(value, rules) {
          let isValid = true;

          if(rules.required){
              isValid = value.trim() !== '' && isValid;
          }

          if(rules.minlength){
              isValid = value.length >= rules.minlength && isValid;
          }
          
          if(rules.maxlength){
            isValid = value.length <= rules.maxlength && isValid;
          }
          
          if(rules.isNumeric){
              let pattern = /^\d+$/;
              isValid = pattern.test(value) && isValid;
          }

          if(rules.isEmail){
              let pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
              isValid = pattern.test(value) && isValid;
          }

          return isValid
      }

      inputChangeHandler = (event, inputType) => {
          let updatedDataForm = {...this.state.DataForm};
        
          let updatedDataElement = {
              ...updatedDataForm[inputType]
          };

          updatedDataElement.value = event.target.value;
          updatedDataElement.valid = this.checkValidity(updatedDataElement.value, updatedDataElement.validation);
          updatedDataElement.typed = true;
          updatedDataForm[inputType] = updatedDataElement;

          let formValidity = true;

          for(let item in updatedDataForm){
              formValidity = updatedDataForm[item].valid && formValidity;
          }

          this.setState({DataForm : updatedDataForm, isFormValid: formValidity});
      }

      onSubmitHandler = (event) => {
          event.preventDefault();
          let submitForm = {}
          for(let element in this.state.DataForm){
              submitForm[element]= this.state.DataForm[element].value;
          };
          
          axios.post('/form.json', submitForm)
          .then(response => {
              // this.props.history.replace('/');
              console.log(response);
          })
          .catch(error => {
              console.log(error);
          })
      }

    
    render(){

          let formConfig = [];

          for(let key in this.state.DataForm){
              formConfig.push({
                  id : key,
                  config: this.state.DataForm[key]});
          }

          let form = <form className='form' onSubmit={this.onSubmitHandler}>
                        {
                            formConfig.map(key => (
                                <Input 
                                    key = {key.id}
                                    elementType={key.config.elementType}
                                    elementConfig={key.config.elementConfig}
                                    value={key.config.value}
                                    invalid={!key.config.valid}
                                    shouldValidate={key.config.validation}
                                    typed={key.config.typed}
                                    changed = {(event => this.inputChangeHandler(event, key.id))} />

                            ))
                        }
                        <input className='submit' type='submit' disabled={!this.state.isFormValid} />
                     </form>

          
        return(
            <div className='DataForm'>
                <img src={bear} className='img' />
                <div className='formDiv'>
                    <h1 className='heading'>Enter the basic details:</h1>
                    {form}
                </div>
            </div>
        );

    }
}

export default DataForm;