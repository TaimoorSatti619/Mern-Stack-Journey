import './App.css'
import { useForm } from 'react-hook-form';

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data){
    // API call to send the form data to the server
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submitting the Form",data);
  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>

      <div>

        <label>First Name : </label>
        <input
        className={errors.firstName ? 'input-error': ''}
        {...register('firstName', {
          required: true,
          minLength: {value:3, message:"First Name should be atleast 3 characters"},
          maxLength: {value:10, message:"First Name should be atmost 10 characters"}
          })} />

          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}

      </div>

      <br/>

      <div>

        <label>Middle Name : </label>
        <input
        className={errors.middleName ? 'input-error': ''}
         {...register('middleName')} />

      </div>

      <br/>

      <div>

        <label>Last Name : </label>
        <input
        className={errors.lastName ? 'input-error': ''}
         {...register('lastName',
          {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last Name should contain only alphabets"
            }
          }
        )} />

        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}

      </div>

      <br/>

      <input type='submit' disabled={isSubmitting}
      value={isSubmitting ? "Submitting..." : "Submit"}
      />

    </form>
   
  )
}

export default App
