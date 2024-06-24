import React from 'react'
import "../Form/Form.css"
const Form = () => {
  return (
    <div className='form'>
        <div className='form__cont'>
            <form action="">
                <label htmlFor="">Your Name</label>
                <input type="text" />
                <label htmlFor="">Your Email</label>
                <input type="email" />
                <label htmlFor="">Subject</label>
                <input type="text" />
                <label htmlFor="">Message</label>
<textarea name="" id="" rows="6" placeholder='types your message here'></textarea>
<button className='btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Form