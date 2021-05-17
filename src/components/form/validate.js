const validate = values => {
    const errors = {}
    const requiredFields = [
        'name',
        'preparation_time',
        'type',
        'no_of_slices',
        'diameter',
        'spiciness_scale',
        'slices_of_bread'
    ]

    if(requiredFields) {
      requiredFields.forEach(field => {
        if (!values[field]) {
          errors[field] = 'Required'
        }
      })
    }
  
    return errors
  }

  export default validate;