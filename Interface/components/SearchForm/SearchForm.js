import { useState } from 'react';
import styles from './SearchForm.module.css';

export default function SearchForm() {
  const cities = [{name: 'Marília - SP'}, {name: 'Pompéia - SP'}, {name: 'Oriente - SP'}];
  const cultures = [{name: 'Milho'}, {name: 'Soja'}];
  const [city, setCity] = useState();
  const [culture, setCulture] = useState();
  const [dayStart, setDayStart] = useState();
  const [dayEnd, setDayEnd] = useState();
  const [plantedArea, setPlantedArea] = useState();

  return(
    <div className={styles.containerPage}>
        <div className={styles.containerImage}>
            <img src="./logo.png" className={styles.logo}/>
            <p className={styles.logoText}>Sua calculadora para<br /><strong>estimativa de produção agricola</strong></p>
        </div>
        <form className={styles.containerForm}>
            <div className='inputContainer'>
                <p className='inputTitle'>Selecione sua cidade</p>
                <select className='inputContent' value={city} onChange={e => setCity(e.target.value)} required>
                    <option value="" selected disabled hidden>Escolha uma cidade</option>
                    {cities.map(city => {
                        return <option key={city.name} value={city.name}>{city.name}</option>
                    })}
                </select>
            </div>
            
            <div className='inputContainer'>
                <p className='inputTitle'>Selecione sua cultura</p>
                <select className='inputContent' value={culture} onChange={e => setCulture(e.target.value)} required>
                    <option value="" selected disabled hidden>Escolha uma cultura</option>
                    {cultures.map(culture => {
                    return <option key={culture.name} value={culture.name}>{culture.name}</option>
                    })}
                </select>
            </div>
            
            <div className='inputDayContainer'>
                <div className='inputContainer' style={{ marginRight: 8 }}>
                    <p className='inputTitle'>Do dia</p>
                    <input className='inputContent' value={dayStart} onChange={e => setDayStart(e.target.value)} required/>
                </div>
                <div className='inputContainer' style={{ marginLeft: 0 }}>
                    <p className='inputTitle'>Até o dia</p>
                    <input className='inputContent' value={dayEnd} onChange={e => setDayEnd(e.target.value)} required/>
                </div>
            </div>
            
            <div className='inputContainer'>
                <p className='inputTitle'>Área plantada em hectares</p>
                <input className='inputContent' type="number" value={plantedArea} onChange={e => setPlantedArea(e.target.value)} required/>
            </div>

            <div className='inputContainer' >
                <input className='buttonSubmit' type="submit" />
            </div>
        </form>
    </div>
  )
};