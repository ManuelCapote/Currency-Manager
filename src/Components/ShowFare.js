import React from 'react'
import accounting from 'accounting-js'
import CurrencyTable from './CurrencyTable'


class ShowFare extends React.Component {
 constructor(props) {
  super(props)

  this.state = {
   country: this.props.country,
   fare: this.toFormatValue(this.props.fareObject)
  }
 }

 isIntValue = (n) => {
  if(n % 1 === 0) {
   return '.00'
  } else 
  return ''
 }

 formatNumber = (o) => {
    const number = parseFloat(o.currencyValue)
    const symbol = o.currencyType
    let finalFare = ''
    


//position off || before || after
     if ( o.position === 'off' && o.decimals === 'on' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: '',
               thousand: ",",
               decimal: '.',
               precision: 2,
               format: '%v %s'
          })
     }
     else if (o.position === 'off' && o.decimals === 'off' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: '',
               thousand: ",",
               decimal: '.',
               precision: 0,
               format: '%v %s'
          })
     }
     else if (o.position === 'off' && o.decimals === 'on' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: '',
               thousand: ".",
               decimal: ',',
               precision: 2,
               format: '%v %s'
          })
     }
      else if (o.position === 'off' && o.decimals === 'off' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: '',
               thousand: ".",
               decimal: ',',
               precision: 0,
               format: '%v %s'
          })
     }


     else if (o.position === 'before' && o.decimals === 'on' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ",",
               decimal: '.',
               precision: 2,
               format: '%s %v'
          })
     } 
     else if (o.position === 'after' && o.decimals === 'on' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ",",
               decimal: '.',
               precision: 2,
               format: '%v %s'
          })
     }
//decimals on/off
     else if (o.position === 'before' && o.decimals === 'off' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ",",
               decimal: '.',
               precision: 0,
               format: '%s %v'
          })
     }
     else if (o.position === 'after' && o.decimals === 'off' && o.formatValue === 'comma' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ",",
               decimal: '.',
               precision: 0,
               format: '%v %s'
          })
     }
//format 1 or 2
     else if (o.position === 'before' && o.decimals === 'off' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ".",
               decimal: ',',
               precision: 0,
               format: '%s %v'
          })
     }
     else if (o.position === 'after' && o.decimals === 'off' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ".",
               decimal: ',',
               precision: 0,
               format: '%v %s'
          })
     }
     else if (o.position === 'before' && o.decimals === 'on' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ".",
               decimal: ',',
               precision: 2,
               format: '%s %v'
          })
     }
     else if (o.position === 'after' && o.decimals === 'on' && o.formatValue === 'dot' ) {
          finalFare = accounting.formatMoney( number, {
               symbol: `${o.currencyType}`,
               thousand: ".",
               decimal: ',',
               precision: 2,
               format: '%v %s'
          })
     } else return finalFare
   return finalFare
  }

 toFormatValue = (props) => {
  const finalFormat = this.formatNumber(props)
  return finalFormat
 }

 handleClick = () => {
      this.setState({ fare: this.toFormatValue(this.props.fareObject), country: this.props.fareObject.region })
      console.log( this.state.fare)
      console.log( this.state.country)
 }

 render() {
  return (
  <div>
   <br />
   <h4>{this.toFormatValue(this.props.fareObject)}</h4>
   <p>{this.props.fareObject.region}</p>
   <br />
   <div>
     <CurrencyTable 
          fare={this.toFormatValue(this.props.fareObject)}
          country={this.props.fareObject.region}
     />
   </div>
  </div>
  )
 }
}

export default ShowFare
 