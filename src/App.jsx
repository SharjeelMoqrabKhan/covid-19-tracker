import React from "react";
import { Cards, Chart, CountryPicker } from "./Components/index";
import {fetchCountries, fetchData} from "./api/index";
import styles from "./App.module.css";
import covidImg from "../src/images/image.png"
class App extends React.Component {
  state={
    data:{},
    country:"",
  }
   async componentDidMount(){
        const fatchedData = await fetchData();
        this.setState({ data: fatchedData });
    }

    handleCountryChange = async (country)=>{
      const fetchedData = await fetchData(country);
      this.setState({data:fetchedData,country:country})

    }

  render() {
    const {data,country} = this.state;
    return (
      <div className={styles.container}>
        <img src={covidImg} alt="covidImage" className={styles.image}/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
