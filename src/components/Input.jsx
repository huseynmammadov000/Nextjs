import React from 'react'

const Input = ({name="",setFormData}) => {
  return (
    <div className="flex flex-col">
        <label htmlFor={name}>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
        <input
          name={name}
          className="border border-zinc-400 rounded-md mt-1 px-2 py-1" 
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              [name]: e.target.value,
            }));
          }}
        />
        </div>
  )
}

export default Input