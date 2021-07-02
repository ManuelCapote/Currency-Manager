import React, { useState } from 'react'
import { nanoid} from 'nanoid'

const dataSample = [
  {
    id: 1,
    fare: '1234.56 USD',
    country: 'USA'
  },
  {
    id: 2,
    fare: '3456.56 USD',
    country: 'DR'
  },
  {
    id: 3,
    fare: '14.6 USD',
    country: 'Costa Rica'
  },

]

const CurrencyTable = (props) => {
  const [currencys, setCurrencys] = useState(dataSample);
  const [addFormData, setAddFormData] = useState({
    fare: '',
    country: '' 
  })

  const buttonClicked = useState({
    clicked: 'noClicked'
  })

  const handleAddFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
    console.log(newFormData)
  }

  const updateFare = (value) => {

    const fieldName = 'fare'
    const fieldValue = value;

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
    console.log(newFormData)
  }


  const updateCountry = (value) => {

    const fieldName = 'country'
    const fieldValue = value;

    const newFormData = { ...addFormData }
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
    console.log(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

    updateCountry(props.country)
    updateFare(props.fare)

    const newCurrency = {
      id: nanoid(),
      fare: addFormData.fare,
      country: addFormData.country
    }

    const newCurrencys = [...currencys, newCurrency]
    setCurrencys(newCurrencys)
  }

  const isClicked = () => {
    buttonClicked.clicked = 'isClicked'
    console.log(buttonClicked)
  }


  return (
    <div className="ui container">
      <table className='ui table'>
        <thead>
          <tr>
            <th>Fare</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {currencys.map((currency) => (
          <tr>
            <td>{currency.fare}</td>
            <td>{currency.country}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleAddFormSubmit} className='ui form'>
        <input style={{display: ''}} type='text' value={props.fare} name='fare'
              onMouseOver={handleAddFormChange}
        />
        <input style={{display: ''}} type='text' value={props.country} name='country'
              onMouseOver={handleAddFormChange}
        />
        <button className='ui button primary' onClick={isClicked} onSubmit={handleAddFormSubmit} type="">Add Fare</button>
      </form>
    </div>
  )
}

export default CurrencyTable