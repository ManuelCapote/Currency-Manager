import React from 'react'
import ShowFare from './ShowFare'
import Currency_Manager_Settings from './ExportExcel'

class Options extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      position: '-1',
      decimals: "0",
      formatValue: "0",
      choice: 'choice',
      region: '',
      currencyType: '',
      currencyValue: ''
      }
    }

  //excel export 



  onFormSubmit = (event) => {
    event.preventDefault();
  }

  needForSymbol = () => {
    if( this.state.position != 'off') {
    return (
      <select onChange={ e => this.setState({ choice: e.target.value })} value= {this.state.choice} className="ui fluid dropdown">
        <option value="choice" disabled selected >Code or Symbol</option>
        <option value="code">Code</option>
        <option value="symb">Symbol</option>
      </select>
    )
  }
  }

  symbolOrcode = () => {
    if(this.state.choice === 'symb') {
      return (
        <select onChange={ e => this.setState({ currencyType: e.target.value })} value={this.state.currencyType}>
            <option value='symb'>Choose Symbol</option>
            <option value="$">$</option>
            <option value="лв">лв</option>
            <option value="CHF">CHF</option>
            <option value="Kč">Kč</option>
            <option value="kr">kr</option>
            <option value="€">€</option>
            <option value="£">£</option>
            <option value="kn">kn</option>
            <option value="₾">₾</option>
            <option value="ft">ft</option>
            <option value="kr">kr</option>
            <option value="zł">zł</option>
            <option value="₽">₽</option>
            <option value="lei">lei</option>
            <option value="kr">kr</option>
            <option value="₺">₺</option>
            <option value="₴">₴</option>
            <option value="₪">₪</option>
            <option value="Ksh">Ksh</option>
            <option value="₦">₦</option>
            <option value="R">R</option>
            <option value="R">R$</option>
            <option value="$">$</option>
            <option value="S/.">S/.</option>
            <option value="৳">৳</option>
            <option value="¥ /元">¥ /元</option>
            <option value="HK$">HK$</option>
            <option value="Rp">Rp</option>
            <option value="₹">₹</option>
            <option value="¥">¥</option>
            <option value="RM">RM</option>
            <option value="₱">₱</option>
            <option value="Rs">Rs</option>
            <option value="₩">₩</option>
            <option value="Rs">Rs</option>
            <option value="฿">฿</option>
            <option value="₫">₫</option>
        </select>
      )
    } else if(this.state.choice === 'code') {
      return (
        <select onChange={ e => this.setState({ currencyType: e.target.value })} value={this.state.currencyType}>
            <option value='code'>Choose Code</option>
            <option value="USD">USD</option>
            <option value="BGN">BGN</option>
            <option value="CHF">CHF</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HRK">HRK</option>
            <option value="GEL">GEL</option>
            <option value="HUF">HUF</option>
            <option value="NOK">NOK</option>
            <option value="PLN">PLN</option>
            <option value="RUB">RUB</option>
            <option value="RON">RON</option>
            <option value="SEK">SEK</option>
            <option value="TRY">TRY</option>
            <option value="UAH">UAH</option>
            <option value="AED">AED</option>
            <option value="ILS">ILS</option>
            <option value="KES">KES</option>
            <option value="MAD">MAD</option>
            <option value="NGN">NGN</option>
            <option value="ZAR">ZAR</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CLP">CLP</option>
            <option value="COP">COP</option>
            <option value="MXN">MXN</option>
            <option value="PEN">PEN</option>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
            <option value="BDT">BDT</option>
            <option value="CNY">CNY</option>
            <option value="HKD">HKD</option>
            <option value="IDR">IDR</option>
            <option value="INR">INR</option>
            <option value="JPY">JPY</option>
            <option value="MYR">MYR</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PKR">PKR</option>
            <option value="SGD">SGD</option>
            <option value="KRW">KRW</option>
            <option value="LKR">LKR</option>
            <option value="THB">THB</option>
            <option value="VND">VND</option>
            <option value="₿">₿</option>
            <option value="XRP">XRP</option>
            <option value="ɱ">ɱ</option>
            <option value="Ł">Ł</option>
            <option value="Ξ">Ξ</option>
        </select>
      )
    }
  }

 render() {
   return ( 
  <div>
  <form onSubmit={this.onFormSubmit} className='ui form'>
   <h2 className='ui dividing header'>Currency Formats</h2>
   <div className='field'>
        <label htmlFor="fare">Insert Fare</label>
        <input 
          type="number" 
          value= {this.state.currencyValue} 
          onChange={e => this.setState({ currencyValue: e.target.value})} 
          name="fare" 
          id="fare" 
        />
      </div>
   <div className='field'>
    <select onChange={ e => this.setState({ position: e.target.value })} value= {this.state.position} className="ui fluid dropdown">
      <option value="-1" disabled selected >Symbol Position</option>
      <option value="off">Off</option>
      <option value="before">Before</option>
      <option value="after">After</option>
    </select>
    </div>
   <div className='field'>
    {this.needForSymbol()}
    </div>
      <div className='field' >
        {this.symbolOrcode()}
      </div>
    <div className='field'>
    <select onChange={ e => this.setState({ decimals: e.target.value })} value= { this.state.decimals } className="ui fluid dropdown">
      <option value="0" disabled selected>Show Decimals</option>
      <option value="on">On</option>
      <option value="off">Off</option>
    </select>
    </div>
    <div className='field'>
    <select onChange={ e => this.setState({ formatValue: e.target.value })} value= { this.state.formatValue } className="ui fluid dropdown">
      <option value="0" disabled selected>Number Format</option>
      <option value="comma">#,###.##</option>
      <option value="dot">#.###,##</option>
    </select>
    </div>
    <div className='field'> 
    <select onChange= { e => this.setState({ region: e.target.value }) } value= { this.state.region }  className="ui fluid dropdown">
      <option value="" disabled selected>Country</option>
      <option value="United States">United States</option>
      <option value="Afghanistan">Afghanistan</option>
      <option value="Albania">Albania</option>
      <option value="Andorra">Andorra</option>
      <option value="Algeria">Algeria</option>
      <option value="Angola">Angola</option>
      <option value="Antigua and Barbuda">Antigua and Barbuda</option>
      <option value="Argentina">Argentina</option>
      <option value="Armenia">Armenia</option>
      <option value="Australia">Australia</option>
      <option value="Austria">Austria</option>
      <option value="Austrian Empire">Austrian Empire</option>
      <option value="Azerbaijan">Azerbaijan</option>
      <option value="Baden">Baden*</option>
      <option value="Bahamas">Bahamas</option>
      <option value="Bahrain">Bahrain</option>
      <option value="Bavaria">Bavaria*</option>
      <option value="Belarus">Belarus</option>
      <option value="Belgium">Belgium</option>
      <option value="Belize">Belize</option>
      <option value="Benin (Dahomey)">Benin (Dahomey)</option>
      <option value="Bolivia">Bolivia</option>
      <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
      <option value="Botswana">Botswana</option>
      <option value="Brazil">Brazil</option>
      <option value="Brunei">Brunei</option>
      <option value="Brunswick and Lüneburg">Brunswick and Lüneburg</option>
      <option value="Bulgaria">Bulgaria</option>
      <option value="Burkina Faso (Upper Volta)">Burkina Faso (Upper Volta)</option>
      <option value="Burma">Burma</option>
      <option value="Burundi">Burundi</option>
      <option value="Bangladesh">Bangladesh</option>
      <option value="Barbados">Barbados</option>
      <option value="Cabo Verde">Cabo Verde</option>
      <option value="Cambodia">Cambodia</option>
      <option value="Cameroon">Cameroon</option>
      <option value="Canada">Canada</option>
      <option value="Cayman Islands">Cayman Islands</option>
      <option value="Central African Republic">Central African Republic</option>
      <option value="Central American Federation">Central American Federation</option>
      <option value="Chad">Chad</option>
      <option value="Chile">Chile</option>
      <option value="China">China</option>
      <option value="Colombia">Colombia</option>
      <option value="Comoros">Comoros</option>
      <option value="Congo Free State">Congo Free State</option>
      <option value="Costa Rica">Costa Rica</option>
      <option value="Cote d’Ivoire (Ivory Coast)">Cote d’Ivoire (Ivory Coast)</option>
      <option value="Croatia">Croatia</option>
      <option value="Cuba">Cuba</option>
      <option value="Cyprus">Cyprus</option>
      <option value="Czechia">Czechia</option>
      <option value="Czechoslovakia">Czechoslovakia</option>
      <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
      <option value="Denmark">Denmark</option>
      <option value="Djibouti">Djibouti</option>
      <option value="Dominica">Dominica</option>
      <option value="Dominican Republic">Dominican Republic</option>
      <option value="Duchy of Parma, The*">Duchy of Parma, The*</option>
      <option value="East Germany (German Democratic Republic)*">East Germany (German Democratic Republic)*</option>
      <option value="Ecuador">Ecuador</option>
      <option value="Egypt">Egypt</option>
      <option value="El Salvador">El Salvador</option>
      <option value="Equatorial Guinea">Equatorial Guinea</option>
      <option value="Eritrea">Eritrea</option>
      <option value="Estonia">Estonia</option>
      <option value="Eswatini">Eswatini</option>
      <option value="Ethiopia">Ethiopia</option>
      <option value="Fiji">Fiji</option>
      <option value="Finland">Finland</option>
      <option value="France">France</option>
      <option value="Gabon">Gabon</option>
      <option value="Gambia">Gambia, The</option>
      <option value="Georgia">Georgia</option>
      <option value="Germany">Germany</option>
      <option value="Ghana">Ghana</option>
      <option value="Greece">Greece</option>
      <option value="Grenada">Grenada</option>
      <option value="Guatemala">Guatemala</option>
      <option value="Guinea">Guinea</option>
      <option value="Guinea-Bissau">Guinea-Bissau</option>
      <option value="Guyana">Guyana</option>
      <option value="Haiti">Haiti</option>
      <option value="Hanover">Hanover*</option>
      <option value="Hanseatic Republics">Hanseatic Republics*</option>
      <option value="Hawaii">Hawaii*</option>
      <option value="Hesse">Hesse*</option>
      <option value="Holy See">Holy See</option>
      <option value="Honduras">Honduras</option>
      <option value="Hungary">Hungary</option>
      <option value="Iceland">Iceland</option>
      <option value="India">India</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Iran">Iran</option>
      <option value="Iraq">Iraq</option>
      <option value="Ireland">Ireland</option>
      <option value="Israel">Israel</option>
      <option value="Italy">Italy</option>
      <option value="Jamaica">Jamaica</option>
      <option value="Japan">Japan</option>
      <option value="Jordan">Jordan</option>
      <option value="Kazakhstan">Kazakhstan</option>
      <option value="Kenya">Kenya</option>
      <option value="Kingdom of Serbia/Yugoslavia">Kingdom of Serbia/Yugoslavia*</option>
      <option value="Kiribati">Kiribati</option>
      <option value="Korea">Korea</option>
      <option value="Kosovo">Kosovo</option>
      <option value="Kuwait">Kuwait</option>
      <option value="Kyrgyzstan">Kyrgyzstan</option>
      <option value="Laos">Laos</option>
      <option value="Latvia">Latvia</option>
      <option value="Lebanon">Lebanon</option>
      <option value="Lesotho">Lesotho</option>
      <option value="Lew Chew (Loochoo)">Lew Chew (Loochoo)*</option>
      <option value="Liberia">Liberia</option>
      <option value="Libya">Libya</option>
      <option value="Liechtenstein">Liechtenstein</option>
      <option value="Lithuania">Lithuania</option>
      <option value="Luxembourg">Luxembourg</option>
      <option value="Madagascar">Madagascar</option>
      <option value="Malawi">Malawi</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Maldives">Maldives</option>
      <option value="Mali">Mali</option>
      <option value="Malta">Malta</option>
      <option value="Marshall Islands">Marshall Islands</option>
      <option value="Mauritania">Mauritania</option>
      <option value="Mauritius">Mauritius</option>
      <option value="Mecklenburg-Schwerin*">Mecklenburg-Schwerin*</option>
      <option value="Mecklenburg-Strelitz*">Mecklenburg-Strelitz*</option>
      <option value="Mexico">Mexico</option>
      <option value="13Micronesia2">Micronesia</option>
      <option value="Moldova">Moldova</option>
      <option value="Monaco">Monaco</option>
      <option value="Mongolia">Mongolia</option>
      <option value="Montenegro">Montenegro</option>
      <option value="Morocco">Morocco</option>
      <option value="Mozambique">Mozambique</option>
      <option value="Namibia">Namibia</option>
      <option value="Nassau">Nassau*</option>
      <option value="Nauru">Nauru</option>
      <option value="Nepal">Nepal</option>
      <option value="Netherlands">Netherlands, The</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Nicaragua">Nicaragua</option>
      <option value="Niger">Niger</option>
      <option value="Nigeria">Nigeria</option>
      <option value="North German Confederation*">North German Confederation*</option>
      <option value="North German Union*">North German Union*</option>
      <option value="North Macedonia">North Macedonia</option>
      <option value="Norway">Norway</option>
      <option value="Oldenburg">Oldenburg*</option>
      <option value="Oman">Oman</option>
      <option value="Orange Free State*">Orange Free State*</option>
      <option value="Pakistan">Pakistan</option>
      <option value="Palau">Palau</option>
      <option value="Panama">Panama</option>
      <option value="Papal States*">Papal States*</option>
      <option value="Papua New Guinea">Papua New Guinea</option>
      <option value="Paraguay">Paraguay</option>
      <option value="Peru">Peru</option>
      <option value="Philippines">Philippines</option>
      <option value="Piedmont-Sardinia*">Piedmont-Sardinia*</option>
      <option value="Poland">Poland</option>
      <option value="Portugal">Portugal</option>
      <option value="Qatar">Qatar</option>
      <option value="Republic of Genoa*">Republic of Genoa*</option>
      <option value="Republic of Korea (South Korea)">Republic of Korea (South Korea)</option>
      <option value="Republic of the Congo">Republic of the Congo</option>
      <option value="Romania">Romania</option>
      <option value="Russia">Russia</option>
      <option value="Rwanda">Rwanda</option>
      <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
      <option value="Saint Lucia">Saint Lucia</option>
      <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
      <option value="Samoa">Samoa</option>
      <option value="San Marino">San Marino</option>
      <option value="Sao Tome and Principe">Sao Tome and Principe</option>
      <option value="Saudi Arabia">Saudi Arabia</option>
      <option value="Schaumburg-Lippe*">Schaumburg-Lippe*</option>
      <option value="Senegal">Senegal</option>
      <option value="Serbia">Serbia</option>
      <option value="Seychelles">Seychelles</option>
      <option value="Sierra Leone">Sierra Leone</option>
      <option value="Singapore">Singapore</option>
      <option value="Slovakia">Slovakia</option>
      <option value="Slovenia">Slovenia</option>
      <option value="Solomon Islands, The">Solomon Islands, The</option>
      <option value="Somalia">Somalia</option>
      <option value="South Africa">South Africa</option>
      <option value="South Sudan">South Sudan</option>
      <option value="Spain">Spain</option>
      <option value="Sri Lanka">Sri Lanka</option>
      <option value="Sudan">Sudan</option>
      <option value="Suriname">Suriname</option>
      <option value="Sweden">Sweden</option>
      <option value="19Switzerland6">Switzerland</option>
      <option value="Syria">Syria</option>
      <option value="Tajikistan">Tajikistan</option>
      <option value="Tanzania">Tanzania</option>
      <option value="Thailand">Thailand</option>
      <option value="Timor-Leste">Timor-Leste</option>
      <option value="Togo">Togo</option>
      <option value="Tonga">Tonga</option>
      <option value="Trinidad and Tobago">Trinidad and Tobago</option>
      <option value="Tunisia">Tunisia</option>
      <option value="Turkey">Turkey</option>
      <option value="Turkmenistan">Turkmenistan</option>
      <option value="Tuvalu">Tuvalu</option>
      <option value="Two Sicilies*">Two Sicilies*</option>
      <option value="Uganda">Uganda</option>
      <option value="Ukraine">Ukraine</option>
      <option value="United Arab Emirates, The">United Arab Emirates, The</option>
      <option value="United Kingdom, The">United Kingdom, The</option>
      <option value="Uruguay">Uruguay</option>
      <option value="Uzbekistan">Uzbekistan</option>
      <option value="Vanuatu">Vanuatu</option>
      <option value="Venezuela">Venezuela</option>
      <option value="Vietnam">Vietnam</option>
      <option value="Württemberg">Württemberg*</option>
      <option value="Yemen">Yemen</option>
      <option value="Zambia">Zambia</option>
      <option value="Zimbabwe">Zimbabwe</option>
    </select>
    </div>
   <div className='field'>
   </div>
  </form>
  <div>
    <Currency_Manager_Settings position= {this.state.position} type= {this.state.choice} decimals= {this.state.decimals} format= {this.state.formatValue} />
  </div>
  <div>
    <ShowFare  fareObject={this.state} />
  </div>
  </div>)
 }
}


export default Options